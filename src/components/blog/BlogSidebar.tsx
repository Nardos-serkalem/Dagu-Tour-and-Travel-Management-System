import type { BlogPost } from '../../types/blog';

interface BlogSidebarProps {
  posts: BlogPost[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedTag: string;
  onSelectTag: (tag: string) => void;
}

export default function BlogSidebar({
  posts,
  selectedCategory,
  onSelectCategory,
  selectedTag,
  onSelectTag
}: BlogSidebarProps) {
  const categories = Array.from(new Set(posts.map(post => post.category)));
  const tags = Array.from(new Set(posts.flatMap(post => post.tags)));

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(
                category === selectedCategory ? '' : category
              )}
              className={`block w-full text-left px-3 py-2 rounded-lg ${
                category === selectedCategory
                  ? 'bg-teal-50 text-teal-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onSelectTag(tag === selectedTag ? '' : tag)}
              className={`px-3 py-1 rounded-full text-sm ${
                tag === selectedTag
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
        <p className="text-gray-600 mb-4">
          Get the latest travel tips and stories delivered to your inbox.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your email address"
            className="input"
          />
          <button type="submit" className="w-full btn btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}