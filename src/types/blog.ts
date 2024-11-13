export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  category: string;
  tags: string[];
}