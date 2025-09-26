import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// Fetch user from DB
async function getUser(email: string): Promise<User | undefined> {
  try {
    const users = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    return users[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return undefined;
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'you@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Validate credentials with Zod
        const parsed = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (!parsed.success) {
          console.log('Invalid input format:', parsed.error.format());
          return null;
        }

        const { email, password } = parsed.data;
        const user = await getUser(email);

        if (!user) {
          console.log('User not found');
          return null;
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          console.log('Invalid password');
          return null;
        }

        // Return user object for session
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin', // optional custom sign-in page
  },
});
