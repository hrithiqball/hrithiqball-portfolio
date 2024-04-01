'use server';

import { db } from '@/lib/db';
import { CreateContent } from '@/schema/content.schema';
import { CreatePostInput } from '@/schema/post.schema';

export async function createPost(
  post: CreatePostInput,
  contents: CreateContent[],
) {
  try {
    await db.post
      .create({
        data: {
          title: post.title,
        },
      })
      .then(async res => {
        await db.content.createMany({
          data: contents.map(content => ({
            ...content,
            postId: res.id,
          })),
        });
      });
  } catch (error) {
    console.error(error);
    throw new Error('Error creating post');
  }
}
