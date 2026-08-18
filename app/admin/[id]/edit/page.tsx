import { prisma } from "@/lib/prisma";
import { updatePost } from "../../actions";
import { notFound } from "next/navigation";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id: Number(id) } });

  if (!post) notFound();

  const updatePostWithId = updatePost.bind(null, post.id);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold">Edit Post</h1>
      <form action={updatePostWithId} className="space-y-3 rounded-lg border p-5">
        <input name="title" defaultValue={post.title} required className="w-full rounded border px-3 py-2" />
        <textarea name="description" defaultValue={post.description} required className="w-full rounded border px-3 py-2" />
        <input name="imageUrl" defaultValue={post.imageUrl} required className="w-full rounded border px-3 py-2" />
        <select name="type" defaultValue={post.type} required className="w-full rounded border px-3 py-2">
          <option value="ILLUSTRATION">Illustration</option>
          <option value="PROGRAMMING">Programming</option>
        </select>
        <input name="figmaUrl" defaultValue={post.figmaUrl ?? ""} placeholder="Link Figma (opsional)" className="w-full rounded border px-3 py-2" />
        <input name="projectUrl" defaultValue={post.projectUrl ?? ""} placeholder="Link Project (opsional)" className="w-full rounded border px-3 py-2" />
        <button type="submit" className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800">
          Update
        </button>
      </form>
    </div>
  );
}