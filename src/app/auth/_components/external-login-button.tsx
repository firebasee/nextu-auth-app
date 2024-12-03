'use client';

import { Button } from '@/components/ui/button';
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function ExternalLoginButton() {
  const [providers, setProviders] = useState<Array<ClientSafeProvider>>([]);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      const providersArray = Object.values(res!).map((provider) => {
        if (provider.id === 'credentials') {
          return;
        }
        return provider;
      }) as Array<ClientSafeProvider>;

      setProviders(providersArray.filter(Boolean));
    };
    fetchProviders();
  }, []);

  return (
    <>
      {Object.values(providers).map((provider) => (
        <Button
          key={provider.name}
          onClick={async () =>
            await signIn(provider.id, {
              redirect: false,
              callbackUrl: '/',
            })
          }
          className="w-full"
          variant="outline"
        >
          Sign in with {provider.name}
        </Button>
      ))}
    </>
  );
}
