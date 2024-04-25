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

import { CreatePostInput, CreatePostSchema } from '@/schema/post.schema';
import { useState, useTransition } from 'react';
import { toast } from 'sonner';
import { createPost } from '@/data/post.action';
import DOMPurify from 'dompurify';
import { Textarea } from '@/components/ui/textarea';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  ImageIcon,
  List,
  ListOrdered,
  Minus,
} from 'lucide-react';

export default function CreatePost() {
  const [transitioning, startTransition] = useTransition();

  const [content, setContent] = useState('');
  const [preview, setPreview] = useState('');

  const form = useForm<CreatePostInput>({
    resolver: zodResolver(CreatePostSchema),
  });

  function onSubmit(data: CreatePostInput) {
    startTransition(() => {
      toast.promise(createPost(data), {
        loading: 'Creating post...',
        success: 'Post created',
        error: 'Error creating post',
      });
    });
  }

  function handleContentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const input = event.target.value;
    setContent(input);

    const sanitized = DOMPurify.sanitize(input);
    setPreview(sanitized);
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-1">
        <Button variant={'outline'} size={'icon'}>
          <Heading1 size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'}>
          <Heading2 size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'}>
          <Heading3 size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'}>
          <Heading4 size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'}>
          <Heading5 size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'}>
          <Heading6 size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'}>
          <ImageIcon size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'}>
          <Minus size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'}>
          <List size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'}>
          <ListOrdered size={18} />
        </Button>
      </div>
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
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    value={content}
                    onChange={handleContentChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="">
        <div dangerouslySetInnerHTML={{ __html: preview }} />
      </div>
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
