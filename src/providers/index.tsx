import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from './theme-provider';
import { NextAuthProvider } from './next-auth-providers';
import { Session } from 'next-auth';

export default function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <>
      <ThemeProvider>
        <NextAuthProvider session={session}>{children}</NextAuthProvider>
      </ThemeProvider>
      <Toaster />
    </>
  );
}
