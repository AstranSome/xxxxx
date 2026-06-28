import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { journalPosts } from "@/data/journal";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  return { title: post?.title ?? "Article" };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="min-h-screen bg-ivory pt-28">
      <div className="film-grain relative h-[50vh] md:h-[60vh]">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
      </div>

      <div className="container-content mx-auto max-w-2xl section-padding">
        <span className="eyebrow">{post.category}</span>
        <h1 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">{post.title}</h1>
        <div className="mt-4 flex gap-3 font-sans text-sm text-stone">
          <time>{post.date}</time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <div className="mt-12 space-y-6">
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              className={`font-sans text-base leading-[1.8] text-charcoal/90 ${i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-none first-letter:text-brass" : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {post.content.length > 1 && (
          <blockquote className="my-12 border-l-2 border-brass pl-6">
            <p className="font-serif text-xl italic text-brass">
              Creative minds need spaces that inspire — not just caffeinate.
            </p>
          </blockquote>
        )}

        <Link href="/journal" className="link-arrow mt-12 inline-flex">
          Back to Journal
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
