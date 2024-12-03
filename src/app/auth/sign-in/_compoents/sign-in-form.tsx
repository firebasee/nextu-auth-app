'use client';

import { SignInSchema, TSignInSchema } from '@/validations/authSchema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
  const router = useRouter();
  const form = useForm<TSignInSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(SignInSchema),
  });

  const handleLogin: SubmitHandler<TSignInSchema> = async (data) => {
    const res = await signIn('credentials', data);
    console.log(res);
    if (res?.error) {
      toast.error(res.error);
    }

    router.replace('/');
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(handleLogin)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <FormControl>
                <Input id="email" placeholder="example@me.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl>
                <Input
                  id="password"
                  type="password"
                  placeholder="***************"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Sign In
        </Button>
      </form>
    </Form>
  );
}
