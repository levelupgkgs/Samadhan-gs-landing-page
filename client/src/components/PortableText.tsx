import { PortableText as BasePortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'

const components = {
  types: {
    image: ({ value }: any) => (
      <div className="my-12 group">
        <div className="relative overflow-hidden rounded-2xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 shadow-2xl">
          <img
            src={urlFor(value).width(1200).quality(85).url()}
            alt={value.alt || 'Blog image'}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        {value.caption && (
          <div className="mt-4 text-center">
            <p className="text-sm text-slate-400 italic bg-slate-800/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700/30 inline-block">
              {value.caption}
            </p>
          </div>
        )}
      </div>
    ),
    code: ({ value }: any) => (
      <div className="my-8 overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/80 backdrop-blur-sm shadow-xl">
        <div className="bg-slate-800/80 px-4 py-2 border-b border-slate-700/50">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="text-xs text-slate-400 ml-4">{value.language || 'code'}</span>
          </div>
        </div>
        <pre className="p-6 overflow-x-auto">
          <code className="text-green-400 text-sm leading-relaxed font-mono">
            {value.code}
          </code>
        </pre>
      </div>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors duration-200 hover:decoration-blue-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="font-semibold text-slate-100">
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-slate-200">
        {children}
      </em>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl md:text-5xl font-bold mt-12 mb-6 text-slate-100 leading-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-4xl font-semibold mt-10 mb-5 text-slate-200 leading-tight border-l-4 border-blue-500 pl-4 bg-slate-800/20 py-3 rounded-r-lg">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-slate-200 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl md:text-2xl font-medium mt-6 mb-3 text-slate-300 leading-tight">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="mb-6 leading-8 text-slate-300 text-lg tracking-wide">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <div className="my-8 relative">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-l-4 border-blue-500 rounded-r-xl p-6 backdrop-blur-sm">
          <div className="absolute top-4 left-6 text-blue-400/50 text-4xl font-serif">"</div>
          <blockquote className="pl-8 text-lg italic text-slate-200 leading-relaxed">
            {children}
          </blockquote>
        </div>
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-6 space-y-3 text-slate-300 text-lg leading-7">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mb-6 space-y-3 text-slate-300 text-lg leading-7">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start space-x-3 mb-2">
        <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-3"></span>
        <div className="flex-1">{children}</div>
      </li>
    ),
    number: ({ children }: any) => (
      <li className="flex items-start space-x-3 mb-2">
        <div className="flex-1">{children}</div>
      </li>
    ),
  },
}

interface PortableTextProps {
  value: any[]
}

export default function PortableText({ value }: PortableTextProps) {
  return <BasePortableText value={value} components={components} />
}