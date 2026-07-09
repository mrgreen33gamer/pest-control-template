// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'termite-prevention-tips-central-texas',
    title:    'Termite Prevention Tips for Central Texas Homes',
    excerpt:  'Central Texas soil and climate keep termites active year-round. Learn practical prevention steps, warning signs, and when to schedule a professional inspection.',
    category: 'Prevention',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/home/services/service-1.jpg',
    imageAlt: 'Termite prevention tips for Central Texas homes',
    featured: true,
  },
  {
    slug:     'how-often-should-you-schedule-pest-control-waco-tx',
    title:    'How Often Should You Schedule Pest Control in Waco, TX?',
    excerpt:  'Monthly vs quarterly vs one-time — an honest guide to recurring pest control schedules for Central Texas homes and when each makes sense.',
    category: 'Plans',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/home/services/service-2.jpg',
    imageAlt: 'How often to schedule pest control in Waco TX',
  },
  {
    slug:     'signs-you-have-a-rodent-problem-waco-tx',
    title:    'Signs You Have a Rodent Problem in Waco, TX',
    excerpt:  'Droppings, scratching, grease marks, and nests — know the early warning signs of mice and rats before damage and health risks escalate.',
    category: 'Rodents',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/home/welcome/hero-main.jpg',
    imageAlt: 'Signs of a rodent problem in Waco TX homes',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
