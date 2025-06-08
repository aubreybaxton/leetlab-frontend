import z from 'zod';

export const signupSchema= z.object({
    email:z.string().email("Enter a valid email"),
    password:z.string().min(8, "password must be atleast 8 character"),
    name: z.string().min(3," Name Must be atleast 3 characters")
})

export const loginSchema= z.object({
    email:z.string().email("Enter a valid email"),
    password:z.string().min(8, "password must be atleast 8 character"),
})