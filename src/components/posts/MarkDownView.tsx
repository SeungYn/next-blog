'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

interface Props {
  content: string;
}

export default function MarkDownView({ content }: Props) {
  return (
    <ReactMarkdown //ReactMarkdown 특성상 최대 너비가 정해져 있음 none로 해줘야함
      className='prose   lg:prose-xl max-w-none'
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag='div'
              {...props}
              style={dark}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className='w-full max-h-full object-cover'
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={100}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
