import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly 2 decimal places"
  );

//  Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name is required"),
  slug: z.string().min(3, "Slug is required"),
  category: z.string().min(3, "Category is required"),
  brand: z.string().min(3, "Brand is required"),
  description: z.string().min(3, "Description is required"),
  stock: z.coerce.number(),
  images: z.array(z.string().min(1, "Product must have at least one image")),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

// Schema for signing users in
export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
