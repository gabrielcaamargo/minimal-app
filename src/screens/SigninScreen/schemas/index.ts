import z from 'zod';

const SigninSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(8, { message: 'The password must have at least 8 characters' })
    .max(24, { message: 'The password must have 24 characters maximum' } )
});

type SigninSchemaType = z.infer<typeof SigninSchema>;

export { SigninSchema, SigninSchemaType };
