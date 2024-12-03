import Link from 'next/link';

import { ThemeToggler } from '@/components/theme-toggler';
import { Button } from '@/components/ui/button';
import { getServerSession } from 'next-auth';

export const Navbar = async () => {
  const session = await getServerSession();
  console.log(session);
  return (
    <nav className="flex justify-between items-center h-16 px-10 border-b">
      <div>
        <Link
          href="/"
          className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-2"
        >
          <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-emerald-600 dark:bg-gradient-to-br dark:from-green-500 dark:to-emerald-500 rounded-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <span className="text-white dark:text-primary-foreground font-bold text-xl">
              C
            </span>
          </div>
        </Link>
      </div>

      <div className="flex gap-2">
        {session ? (
          <Button>Sign Out</Button>
        ) : (
          <>
            <Link href="/auth/sign-in">
              <Button>Sign In</Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button variant="outline">Sign Up</Button>
            </Link>
          </>
        )}
        <ThemeToggler />
      </div>
    </nav>
  );
};
