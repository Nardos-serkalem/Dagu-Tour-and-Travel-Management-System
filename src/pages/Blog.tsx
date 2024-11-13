import { useState } from 'react';
import { Search } from 'lucide-react';
import BlogPost from '../components/blog/BlogPost';
import BlogSidebar from '../components/blog/BlogSidebar';
import type { BlogPost as BlogPostType } from '../types/blog';

const blogPosts: BlogPostType[] = [
  {
    id: '1',
    title: '10 Must-Visit Historic Sites in Ethiopia',
    excerpt: 'Explore Ethiopia’s incredible historic landmarks, from ancient churches to majestic castles.',
    content: '',
    image: 'Travel pictures/pictures/Exploring-the-Rich-History-and-Cultural-Heritage-of-Ethiopia.jpg',
    author: {
      name: 'Nardos Serkalem',
      avatar: 'Travel pictures/pictures/photo_2024-04-25_00-28-16.jpg'
    },
    date: '2024-03-15',
    category: 'Destinations',
    tags: ['ethiopia', 'history', 'travel']
  },
  {
    id: '2',
    title: 'Guide to Ethiopian Festivals and Cultural Events',
    excerpt: 'Experience the vibrant and colorful festivals of Ethiopia, from Meskel to Timkat.',
    content: '',
    image: 'Travel pictures/pictures/The Rift Valley and the Cultural Mosaic of the South Route - Visit Ethiopia_files/Land-of-Origins-logo-for-website.png',
    author: {
      name: 'Markos Assefa',
      avatar: 'Travel pictures/pictures/The Rift Valley and the Cultural Mosaic of the South Route - Visit Ethiopia_files/image.png'
    },
    date: '2024-03-10',
    category: 'Culture',
    tags: ['festivals', 'culture', 'ethiopia']
  },
  {
    id: '3',
    title: 'Ethiopian Cuisine: A Journey Through Flavors',
    excerpt: 'Discover the unique and rich flavors of Ethiopian cuisine, from injera to doro wat.',
    content: '',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    author: {
      name: 'Haset Henok',
      avatar: 'Travel pictures/pictures/The Rift Valley and the Cultural Mosaic of the South Route - Visit Ethiopia_files/Land-of-Origins-logo-for-website.png'
    },
    date: '2024-03-05',
    category: 'Food & Culture',
    tags: ['food', 'ethiopian-cuisine', 'culinary']
  },
  {
     id: '4',
     title: 'ethiopians Lakes',
     excerpt: 'Discover the rich eye catching of ethiopian water resources' ,
     content: '',
     image: 'Travel pictures/pictures/The Rift Valley and the Cultural Mosaic of the South Route - Visit Ethiopia_files/Land-of-Origins-logo-for-website.png',
     author: {
            name: 'yosef Girma',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
     },
        date: '2024-11-17',
        category: 'water resources',
        tags: ['Lakes', 'seas', 'rivers']
     },
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="pt-16">
      <div className="relative py-16 bg-gradient-to-br from-teal-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Travel Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Stories, tips, and insights from our travel experiences
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full input pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <BlogPost key={post.id} post={post} />
              ))}
            </div>
          </div>

          <div className="md:w-1/3">
            <BlogSidebar
              posts={blogPosts}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              selectedTag={selectedTag}
              onSelectTag={setSelectedTag}
            />
          </div>
        </div>
      </div>
    </div>
  );
}