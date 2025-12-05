import { z } from 'zod'

export const categorySchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    slug: z.string().min(2, { message: "Slug must be at least 2 characters long" }),
    image: z.string()
});

export const updateCategorySchema = z.object({
    id: z.string(),
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }).optional(),
    slug: z.string().min(2, { message: "Slug must be at least 2 characters long" }).optional(),
    image: z.string().optional()
});


export type UpdateCategoryBody = z.infer<typeof updateCategorySchema>;
export type CategoryBody = z.infer<typeof categorySchema>;