import { PropsWithChildren } from 'react';

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen w-full max-w-sm mx-auto mt-10">{children}</div>
  );
}
