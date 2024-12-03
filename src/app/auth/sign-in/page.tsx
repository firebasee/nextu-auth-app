import { Metadata } from 'next';
import Link from 'next/link';
import SignInForm from './_compoents/sign-in-form';
import ExternalLoginButton from '../_components/external-login-button';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your account',
  openGraph: {
    title: 'Sign In',
    description: 'Sign in to your account',
  },
  alternates: {
    canonical: '/auth/sign-in',
  },
};

export default function page() {
  return (
    <div className="h-screen w-full max-w-sm mx-auto mt-10">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
          Sign In
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Sign in to your account
        </p>
      </div>
      <hr className="my-3" />
      <SignInForm />
      <hr className="my-3" />
      <ExternalLoginButton />

      <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold mt-4">
        Don&apos;t have an account?
        <Link
          href="/auth/sign-up"
          className="ml-2 text-primary hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
