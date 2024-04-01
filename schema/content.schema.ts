import { ContentType } from '@prisma/client';
import { z } from 'zod';

export const CreateContentSchema = z.object({
  alt: z.string().optional(),
  caption: z.string().optional(),
  code: z.string().optional(),
  language: z.string().optional(),
  order: z.number({ required_error: 'Order is required' }),
  text: z.string().optional(),
  url: z.string().optional(),
});

export const CreateContentInputSchema = z.object({
  order: z.number({ required_error: 'Order is required' }),
  text: z.string().optional(),
});

export type CreateContent = z.infer<typeof CreateContentSchema> & {
  type: ContentType;
};
export type CreateContentInput = z.infer<typeof CreateContentSchema>;
