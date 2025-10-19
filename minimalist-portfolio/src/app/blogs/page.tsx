import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Building Scalable Microservices with Node.js",
    excerpt: "Learn how to design and implement microservices architecture that can handle millions of requests while maintaining high availability and performance.",
    content: "In this comprehensive guide, we'll explore the fundamentals of microservices architecture and how to implement it using Node.js...",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Backend Development",
    featured: true,
    tags: ["Node.js", "Microservices", "Architecture", "Scalability"]
  },
  {
    title: "Advanced TypeScript Patterns for React Applications",
    excerpt: "Discover powerful TypeScript patterns that will make your React applications more type-safe, maintainable, and developer-friendly.",
    content: "TypeScript has revolutionized how we build React applications. In this article, we'll explore advanced patterns...",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Frontend Development",
    featured: true,
    tags: ["TypeScript", "React", "Frontend", "Best Practices"]
  },
  {
    title: "Optimizing Database Performance: A Complete Guide",
    excerpt: "Master database optimization techniques that can dramatically improve your application's performance and reduce costs.",
    content: "Database performance is crucial for any application. This guide covers indexing strategies, query optimization...",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Database",
    featured: false,
    tags: ["Database", "Performance", "SQL", "Optimization"]
  },
  {
    title: "Getting Started with Docker and Kubernetes",
    excerpt: "A beginner-friendly introduction to containerization and orchestration with Docker and Kubernetes.",
    content: "Containerization has become essential in modern software development. Let's explore Docker and Kubernetes...",
    date: "2023-12-28",
    readTime: "12 min read",
    category: "DevOps",
    featured: false,
    tags: ["Docker", "Kubernetes", "DevOps", "Containers"]
  },
  {
    title: "Building Real-time Applications with WebSockets",
    excerpt: "Learn how to create real-time features in your web applications using WebSockets and modern JavaScript frameworks.",
    content: "Real-time communication is becoming increasingly important in web applications. This tutorial covers...",
    date: "2023-12-20",
    readTime: "7 min read",
    category: "Web Development",
    featured: false,
    tags: ["WebSockets", "Real-time", "JavaScript", "Web Development"]
  },
  {
    title: "Security Best Practices for Modern Web Applications",
    excerpt: "Essential security practices every developer should know to protect their applications from common vulnerabilities.",
    content: "Security should be a top priority in web development. This article covers authentication, authorization...",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Security",
    featured: false,
    tags: ["Security", "Authentication", "Web Security", "Best Practices"]
  }
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold mb-4">Blog</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Thoughts, tutorials, and insights on software development and technology
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                    <Clock className="w-4 h-4 ml-4 mr-1" />
                    {post.readTime}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
