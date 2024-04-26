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
  Bold,
  ExternalLink,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  ImageIcon,
  Italic,
  List,
  ListOrdered,
  Minus,
  Text,
  Underline,
} from 'lucide-react';

type ElementType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'a'
  | 'i'
  | 'b'
  | 'u'
  | 'br'
  | 'img'
  | 'p'
  | 'ul'
  | 'ol';

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

  function onAddElement(type: ElementType) {
    return () => {
      const textarea = document.getElementById(
        'content-textarea',
      ) as HTMLTextAreaElement;
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;
      const content = textarea.value;

      let newText = content.substring(0, startPos);

      switch (type) {
        case 'h1':
          newText += `<h1 style="font-size: 1.875rem;line-height: 2.25rem;"></h1>`;
          break;

        case 'h2':
          newText += `<h2 style="font-size: 1.5rem;line-height: 2rem;"></h2>`;
          break;

        case 'h3':
          newText += `<h3 style="font-size: 1.25rem;line-height: 1.75rem;"></h3>`;
          break;

        case 'h4':
          newText += `<h4 style="font-size: 1.125rem;line-height: 1.75rem;"></h4>`;
          break;

        case 'h5':
          newText += `<h5 style="font-size: 1rem;line-height: 1.5rem;"></h5>`;
          break;

        case 'h6':
          newText += `<h6 style="font-size: 0.875rem;line-height: 1.25rem;"></h6>`;
          break;

        case 'a':
          newText += `<a style="text-decoration-line: underline; text-underline-offset: 4px; margin-right: 2px; display: flex;" target='_blank' href=""> LINK <svg style="margin-left:2px;" xmlns="http://www.w3.org/2000/svg" width="18" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><span></a>`;
          break;

        case 'b':
          newText += `<b></b>`;
          break;

        case 'i':
          newText += `<i></i>`;
          break;

        case 'u':
          newText += `<u></u>`;
          break;

        case 'img':
          newText += `<img src="" alt="" />`;
          break;

        case 'br':
          newText += `<br />`;
          break;

        case 'ul':
          newText += `<ul><li></li></ul>`;
          break;

        case 'ol':
          newText += `<ol><li></li></ol>`;
          break;

        case 'p':
          newText += `<p></p>`;
          break;
      }

      newText += content.substring(endPos);

      setContent(newText);

      const newCursorPos =
        startPos + newText.length - (content.length - endPos);
      textarea.selectionStart = newCursorPos;
      textarea.selectionEnd = newCursorPos;
      textarea.focus();
    };
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
        <Button variant={'outline'} size={'icon'} onClick={onAddElement('h1')}>
          <Heading1 size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'} onClick={onAddElement('h2')}>
          <Heading2 size={18} />
        </Button>
        <p className="underline-offset-4 hover:underline"></p>
        <Button variant={'outline'} size={'icon'} onClick={onAddElement('h3')}>
          <Heading3 size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'} onClick={onAddElement('h4')}>
          <Heading4 size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'} onClick={onAddElement('h5')}>
          <Heading5 size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'} onClick={onAddElement('h6')}>
          <Heading6 size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'} onClick={onAddElement('b')}>
          <Bold size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'} onClick={onAddElement('i')}>
          <Italic size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'} onClick={onAddElement('u')}>
          <Underline size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'} onClick={onAddElement('a')}>
          <ExternalLink size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'} onClick={onAddElement('img')}>
          <ImageIcon size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'} onClick={onAddElement('br')}>
          <Minus size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'} onClick={onAddElement('ul')}>
          <List size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'} onClick={onAddElement('ol')}>
          <ListOrdered size={18} />
        </Button>
        <Button variant={'outline'} size={'icon'} onClick={onAddElement('p')}>
          <Text size={18} />
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
                    id="content-textarea"
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
      <div className="flex flex-col">
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
