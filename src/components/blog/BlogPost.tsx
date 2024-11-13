import { Calendar, User } from 'lucide-react';
import type { BlogPost } from '../../types/blog';

interface BlogPostProps {
  post: BlogPost;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">
            {post.category}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.date).toLocaleDateString()}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
        <p className="text-gray-600 mb-6">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {post.author.avatar ? (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <User className="w-10 h-10 p-2 bg-gray-100 rounded-full" />
            )}
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>

          <button className="text-teal-600 hover:text-teal-700 font-medium">
            Read More
          </button>
        </div>
      </div>
    </article>
  );
}