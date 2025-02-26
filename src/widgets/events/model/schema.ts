import { z } from 'zod';

export const eventSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  author: z.string(),
  nameImg: z.string(),
});

export type Event = z.infer<typeof eventSchema>;
