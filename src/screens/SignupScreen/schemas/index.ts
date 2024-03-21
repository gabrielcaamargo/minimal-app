import z from 'zod';

const SignupSchema = z.object({
  name: z.string().min(4, { message: 'Name must have at least 4 characters' }),
  email: z.string().email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(8, { message: 'The password must have at least 8 characters' })
    .max(24, { message: 'The password must have 24 characters maximum' }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: 'Password and password confirmation must be equal',
  path: ['confirmPassword'],
});

type SignupSchemaType = z.infer<typeof SignupSchema>;

export { SignupSchema, SignupSchemaType };
