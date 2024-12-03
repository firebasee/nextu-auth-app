import { z } from 'zod';

export const SignInSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(32, { message: 'Password must be at most 32 characters' }),
});

export const SignUpSchema = SignInSchema.extend({
  username: z
    .string({ required_error: 'Username is required' })
    .min(6, { message: 'Username must be at least 6 characters' })
    .max(60, { message: 'Username must be at most 60 characters' }),
  confirm_password: z.string({
    required_error: 'Confirm password is required',
  }),
}).refine((data) => data.password === data.confirm_password, {
  message: 'Passwords do not match',
  path: ['confirm_password'],
});

export type TSignInSchema = z.infer<typeof SignInSchema>;
export type TSignUpSchema = z.infer<typeof SignUpSchema>;
