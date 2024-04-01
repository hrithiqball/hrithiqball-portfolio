import { z } from 'zod';

export const CreatePostSchema = z.object({
  title: z.string({ required_error: 'Title is required' }),
});

export type CreatePostInput = z.infer<typeof CreatePostSchema>;
