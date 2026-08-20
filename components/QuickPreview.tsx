import Image from "next/image";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  imageUrl: string;
};

const ROTATIONS = ["-2deg", "1.5deg", "-1deg"];

export default function QuickPreview({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
      {posts.slice(0, 3).map((post, index) => (
        <Link
          key={post.id}
          href="/gallery"
          className="group relative block"
          style={{
            rotate: ROTATIONS[index % ROTATIONS.length],
          }}
        >
          {/* Paper / photo frame */}
          <div className="relative overflow-hidden rounded-sm bg-white p-2 pb-7 shadow-[4px_5px_0_rgba(43,38,34,0.08),0_10px_25px_rgba(43,38,34,0.08)] transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-0 group-hover:shadow-[7px_9px_0_rgba(43,38,34,0.12),0_18px_30px_rgba(43,38,34,0.14)]">
            {/* Decorative tape */}
            <div
              className="absolute -top-2 left-1/2 z-10 h-5 w-14 -translate-x-1/2 rotate-[-2deg] bg-[#E4B15A]/60 opacity-80 transition-transform duration-300 group-hover:rotate-2"
            />

            <div className="relative aspect-square overflow-hidden bg-[#2B2622]/5">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#2B2622]/0 opacity-0 transition-all duration-300 group-hover:bg-[#2B2622]/35 group-hover:opacity-100">
                <span className="translate-y-2 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[#2B2622] shadow-md transition-transform duration-300 group-hover:translate-y-0">
                  See More
                </span>
              </div>
            </div>

            {/* Title */}
            <div className="absolute bottom-2 left-0 right-0 px-3">
              <p className="truncate text-center font-script text-base text-[#2B2622] transition-colors duration-300 group-hover:text-[#B5544A]">
                {post.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}