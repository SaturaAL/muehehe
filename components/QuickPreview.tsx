import Image from "next/image";
import Link from "next/link";

type Post = { id: number; title: string; imageUrl: string };

export default function QuickPreview({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.slice(0, 3).map((post) => (
        <Link
          key={post.id}
          href="/gallery"
          className="group relative aspect-square overflow-hidden rounded-sm bg-white p-1.5 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
        >
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}