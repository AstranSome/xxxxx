import Link from "next/link";
import Image from "next/image";
import { journalPosts } from "@/data/journal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Journal",
};

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-ivory pt-28">
      <div className="container-content section-padding pb-12 pt-0">
        <ScrollReveal>
          <p className="eyebrow mb-4">Stories</p>
          <h1 className="font-serif text-5xl text-charcoal md:text-6xl lg:text-7xl">Journal</h1>
          <p className="mt-6 max-w-xl font-sans text-lg text-stone">
            Behind-the-scenes, recipes, and culture pieces from the Masagran team.
          </p>
        </ScrollReveal>
      </div>

      <div className="container-content grid gap-10 px-4 pb-section-mobile md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-12 lg:pb-section">
        {journalPosts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 80}>
            <Link href={`/journal/${post.slug}`} className="group block">
              <div className="film-grain relative mb-5 aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <span className="eyebrow">{post.category}</span>
              <h2 className="mt-2 font-serif text-2xl text-charcoal transition-colors group-hover:text-caramel">
                {post.title}
              </h2>
              <div className="mt-3 flex gap-3 font-sans text-xs text-stone">
                <time>{post.date}</time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
