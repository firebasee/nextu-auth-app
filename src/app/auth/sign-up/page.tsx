import { Metadata } from 'next';
import Link from 'next/link';

import SignUpForm from './_components/sign-up-form';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create a new account',
  openGraph: {
    title: 'Sign Up',
    description: 'Create a new account',
  },
  alternates: {
    canonical: '/auth/sign-up',
  },
};

export default function page() {
  return (
    <div className="h-screen w-full max-w-sm mx-auto mt-10">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
          Sign Up
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Create a new account
        </p>
      </div>
      <hr className="my-3" />
      <SignUpForm />
      <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold mt-4">
        Do you have an account?
        <Link
          href="/auth/sign-in"
          className="ml-2 text-primary hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}
