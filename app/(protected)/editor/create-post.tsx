'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { CreatePostInput, CreatePostSchema } from '@/schema/post.schema';
import { useState, useTransition } from 'react';
import { CreateContent } from '@/schema/content.schema';
import { toast } from 'sonner';
import { createPost } from '@/data/post.action';

export default function CreatePost() {
  const [transitioning, startTransition] = useTransition();

  const [content, setContent] = useState('');

  const form = useForm<CreatePostInput>({
    resolver: zodResolver(CreatePostSchema),
  });

  function onSubmit(data: CreatePostInput) {
    startTransition(() => {
      const newContent: CreateContent = {
        order: 1,
        text: content,
        type: 'H1',
      };

      const newContent2: CreateContent = {
        order: 2,
        text: content,
        type: 'P',
      };

      const combinedContent = [newContent, newContent2];

      toast.promise(createPost(data, combinedContent), {
        loading: 'Creating post...',
        success: 'Post created',
        error: 'Error creating post',
      });
    });
  }

  function handleContentChange(event: React.ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }

  return (
    <div className="flex flex-col space-y-4">
      <Form {...form}>
        <form
          id="create-post-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Label htmlFor="content">Content</Label>
      <Input
        id="content"
        type="text"
        value={content}
        onChange={handleContentChange}
      />
      <div className="flex flex-row-reverse">
        <Button
          type="submit"
          form="create-post-form"
          variant="outline"
          disabled={transitioning}
        >
          Create
        </Button>
      </div>
    </div>
  );
}
