import { 
  ServerIcon,
  CodeIcon,
  DatabaseIcon,
  GitBranchIcon,
  ZapIcon,
  MonitorIcon
} from 'lucide-react'

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  date: string
  readTime: string
  featured: boolean
  author: string
  likes: number
  views: number
  icon: any
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable Microservices with Node.js and Docker",
    excerpt: "Learn how to architect and deploy microservices that can handle millions of requests while maintaining code quality and developer productivity.",
    content: "In today's fast-paced development environment, microservices have become the backbone of scalable applications. This comprehensive guide will walk you through the process of building, deploying, and maintaining microservices using Node.js and Docker.",
    category: "Backend",
    tags: ["Node.js", "Docker", "Microservices", "DevOps"],
    date: "2024-01-15",
    readTime: "8 min read",
    featured: true,
    author: "Professional Dev",
    likes: 324,
    views: 2140,
    icon: ServerIcon,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns for Enterprise Applications",
    excerpt: "Explore advanced TypeScript patterns that improve code maintainability, type safety, and developer experience in large-scale applications.",
    content: "TypeScript has revolutionized how we write JavaScript, but mastering its advanced features is key to building robust enterprise applications. This article explores patterns that will elevate your TypeScript skills.",
    category: "Frontend",
    tags: ["TypeScript", "Patterns", "Enterprise", "Architecture"],
    date: "2024-01-10",
    readTime: "12 min read",
    featured: true,
    author: "Professional Dev",
    likes: 289,
    views: 1876,
    icon: CodeIcon,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 3,
    title: "Database Performance Optimization: From Slow to Lightning Fast",
    excerpt: "Deep dive into database optimization techniques that can improve query performance by 10x, including indexing strategies and query optimization.",
    content: "Database performance is often the bottleneck in web applications. This comprehensive guide covers proven strategies to optimize your database queries and improve overall application performance.",
    category: "Database",
    tags: ["PostgreSQL", "MongoDB", "Performance", "Optimization"],
    date: "2024-01-05",
    readTime: "15 min read",
    featured: false,
    author: "Professional Dev",
    likes: 412,
    views: 3200,
    icon: DatabaseIcon,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 4,
    title: "Modern CI/CD Pipelines with GitHub Actions and AWS",
    excerpt: "Complete guide to setting up automated deployment pipelines that ensure code quality and enable rapid, safe deployments to production.",
    content: "Continuous Integration and Deployment has become essential for modern software development teams. Learn how to set up robust CI/CD pipelines using GitHub Actions and AWS.",
    category: "DevOps",
    tags: ["CI/CD", "GitHub Actions", "AWS", "Automation"],
    date: "2023-12-28",
    readTime: "10 min read",
    featured: false,
    author: "Professional Dev",
    likes: 198,
    views: 1543,
    icon: GitBranchIcon,
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 5,
    title: "React Performance: Optimization Techniques That Actually Work",
    excerpt: "Practical React optimization strategies with real-world examples, from memo and useMemo to code splitting and lazy loading.",
    content: "React applications can become slow as they grow. Here are proven techniques to keep your React apps fast and responsive, with practical examples you can implement today.",
    category: "Frontend",
    tags: ["React", "Performance", "Optimization", "JavaScript"],
    date: "2023-12-20",
    readTime: "9 min read",
    featured: false,
    author: "Professional Dev",
    likes: 267,
    views: 1890,
    icon: ZapIcon,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 6,
    title: "Building Real-time Applications with WebSockets and Redis",
    excerpt: "Learn how to build scalable real-time features using WebSockets, Redis pub/sub, and Socket.IO for modern web applications.",
    content: "Real-time features are now expected in modern applications. This guide shows you how to implement them efficiently using WebSockets, Redis, and modern JavaScript frameworks.",
    category: "Backend",
    tags: ["WebSockets", "Redis", "Real-time", "Socket.IO"],
    date: "2023-12-15",
    readTime: "11 min read",
    featured: false,
    author: "Professional Dev",
    likes: 156,
    views: 1234,
    icon: MonitorIcon,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  }
] 