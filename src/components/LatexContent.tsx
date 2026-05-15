'use client';

import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeRaw from 'rehype-raw';
import rehypeMathjax from 'rehype-mathjax';

interface LatexContentProps {
  content: string;
}

export default function LatexContent({ content }: LatexContentProps) {
  return (
    <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-[#8c1515] prose-a:text-[#8c1515] prose-a:no-underline hover:prose-a:underline">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeMathjax]}
        components={{
          h1: ({ ...props }) => <h1 className="text-3xl font-bold mt-12 mb-6 border-b border-stone-200 pb-2" {...props} />,
          h2: ({ ...props }) => <h2 className="text-2xl font-bold mt-10 mb-4" id={String(props.children).toLowerCase().replace(/\s+/g, '-')} {...props} />,
          h3: ({ ...props }) => <h3 className="text-xl font-bold mt-8 mb-2" {...props} />,
          p: ({ ...props }) => <p className="leading-relaxed mb-4 text-stone-700 inline-block w-full" {...props} />,
          ul: ({ ...props }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-stone-700" {...props} />,
          ol: ({ ...props }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-stone-700" {...props} />,
          li: ({ ...props }) => <li className="pl-1 mb-1 leading-relaxed" {...props} />,
          blockquote: ({ ...props }) => (
            <blockquote className="border-l-4 border-[#8c1515] pl-6 py-2 italic bg-stone-50 rounded-r-lg my-6" {...props} />
          ),
          code: ({ ...props }) => (
            <code className="bg-stone-100 px-1.5 py-0.5 rounded text-sm font-mono text-[#8c1515]" {...props} />
          ),
          pre: ({ ...props }) => (
            <pre className="bg-stone-900 text-stone-100 p-6 rounded-lg overflow-x-auto my-6 shadow-lg text-sm font-mono leading-relaxed" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
