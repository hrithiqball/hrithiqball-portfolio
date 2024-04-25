'use server';

import { db } from '@/lib/db';
import { CreatePostInput } from '@/schema/post.schema';

export async function createPost(post: CreatePostInput) {
  try {
    await db.post.create({
      data: { ...post },
    });
  } catch (error) {
    console.error(error);
    throw new Error('Error creating post');
  }
}
