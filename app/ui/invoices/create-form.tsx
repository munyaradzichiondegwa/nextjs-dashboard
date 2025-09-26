'use client';

import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { updateInvoice, State } from '@/app/lib/actions';
import { useActionState } from 'react';

interface EditFormProps {
  invoice: InvoiceForm;
  customers: CustomerField[];
}

export default function EditInvoiceForm({ invoice, customers }: EditFormProps) {
  const initialState: State = { message: null, errors: {} };

  // Bind invoice id so updateInvoice automatically receives it
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);

  // useActionState provides [state, formAction] for form submission and validation
  const [state, formAction] = useActionState(updateInvoiceWithId, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Global server-side message */}
        {state.message && (
          <div className="mb-4 rounded-md bg-red-100 p-2 text-sm text-red-700">
            {state.message}
          </div>
        )}

        {/* Customer Field */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              required
              defaultValue={invoice.customerId}
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          {state.errors?.customerId?.map((error) => (
            <p key={error} className="mt-1 text-xs text-red-600">
              {error}
            </p>
          ))}
        </div>

        {/* Amount Field */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Enter amount
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="amount"
              name="amount"
              type="number"
              step="0.01"
              min={0.01}
              required
              defaultValue={invoice.amount / 100} // assuming stored in cents
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          {state.errors?.amount?.map((error) => (
            <p key={error} className="mt-1 text-xs text-red-600">
              {error}
            </p>
          ))}
        </div>

        {/* Status Field */}
        <fieldset className="mb-4">
          <legend className="mb-2 block text-sm font-medium">Set the invoice status</legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              {['pending', 'paid'].map((status) => (
                <div className="flex items-center" key={status}>
                  <input
                    id={status}
                    name="status"
                    type="radio"
                    value={status}
                    required
                    defaultChecked={invoice.status === status}
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor={status}
                    className={`ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${
                      status === 'paid'
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {status === 'paid' ? 'Paid' : 'Pending'}
                    {status === 'paid' ? <CheckIcon className="h-4 w-4" /> : <ClockIcon className="h-4 w-4" />}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {state.errors?.status?.map((error) => (
            <p key={error} className="mt-1 text-xs text-red-600">
              {error}
            </p>
          ))}
        </fieldset>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-4 mt-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Update Invoice</Button>
      </div>
    </form>
  );
}
