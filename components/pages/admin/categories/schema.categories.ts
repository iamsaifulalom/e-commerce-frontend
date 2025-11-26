import { z } from "zod";

const imageSchema = z.object({
    public_id: z.string("public id required!"),
    image_url: z.string("image url required!"),
})

export const categorySchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    slug: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    image: imageSchema
});

export const updateCategorySchema = z.object({
    id: z.string(),
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }).optional(),
    slug: z.string().min(2, { message: "Name must be at least 2 characters long" }).optional(),
    image: imageSchema.optional()
});


export type UpdateCategoryBody = z.infer<typeof updateCategorySchema>;
export type CategoryBody = z.infer<typeof categorySchema>;