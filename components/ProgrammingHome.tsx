import Image from "next/image";

type Post = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  figmaUrl: string | null;
  projectUrl: string | null;
};

export default function ProgrammingHome({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div
          key={post.id}
          className="overflow-hidden rounded-lg border border-[#2B2622]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
        >
          <div className="relative aspect-video w-full overflow-hidden">
            <Image src={post.imageUrl} alt={post.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className="p-4">
            <h3 className="mb-1 font-semibold">{post.title}</h3>
            <p className="mb-3 line-clamp-2 whitespace-pre-wrap text-sm text-[#2B2622]/60">{post.description}</p>
            <div className="flex gap-2">
              {post.figmaUrl && (
                <a
                  href={post.figmaUrl}
                  target="_blank"
                  className="rounded-full bg-[#2B2622] px-3 py-1.5 text-xs font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#2B2622]/80"
                >
                  Figma
                </a>
              )}
              {post.projectUrl && (
                <a
                  href={post.projectUrl}
                  target="_blank"
                  className="rounded-full border border-[#2B2622]/30 px-3 py-1.5 text-xs transition hover:-translate-y-0.5 hover:bg-[#2B2622]/5"
                >
                  Live Site
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}