import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  CalendarIcon, 
  ClockIcon, 
  TagIcon, 
  ArrowLeftIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
  BookmarkIcon
} from 'lucide-react'

// Blog posts data (same as in Blog.tsx - you might want to extract this to a separate file)
import { blogPosts } from '../data/blogData'

export const BlogPost = () => {
  const { id } = useParams<{ id: string }>()
  const post = blogPosts.find(p => p.id === parseInt(id || '1'))

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">← Back to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  const IconComponent = post.icon

  // Mock full content for demonstration
  const fullContent = `
${post.content}

## Introduction

Modern software development requires a deep understanding of scalable architectures and best practices. In this comprehensive guide, we'll explore the fundamental concepts that every professional developer should master.

## Key Concepts

### 1. Architecture Patterns

When building enterprise applications, choosing the right architecture pattern is crucial for long-term maintainability and scalability. Here are some proven approaches:

\`\`\`typescript
// Example: Clean Architecture implementation
interface UserRepository {
  findById(id: string): Promise<User | null>
  save(user: User): Promise<void>
}

class UserService {
  constructor(private userRepo: UserRepository) {}
  
  async updateUser(id: string, data: Partial<User>): Promise<User> {
    const user = await this.userRepo.findById(id)
    if (!user) throw new Error('User not found')
    
    const updatedUser = { ...user, ...data }
    await this.userRepo.save(updatedUser)
    return updatedUser
  }
}
\`\`\`

### 2. Performance Optimization

Performance is not just about making things fast - it's about creating predictable, reliable systems that scale with your business needs.

### 3. Testing Strategy

A comprehensive testing strategy includes unit tests, integration tests, and end-to-end tests. Each serves a specific purpose in ensuring code quality.

## Implementation Details

Let's dive into the practical implementation of these concepts with real-world examples and best practices.

### Code Example

\`\`\`javascript
// Advanced error handling pattern
class ApiError extends Error {
  constructor(message, statusCode = 500, isOperational = true) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = isOperational
    Error.captureStackTrace(this, this.constructor)
  }
}

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}
\`\`\`

## Best Practices

1. **Code Quality**: Always prioritize readable, maintainable code over clever solutions
2. **Documentation**: Write code that tells a story - comments should explain why, not what
3. **Testing**: Test behavior, not implementation details
4. **Performance**: Measure before optimizing, optimize for the common case

## Conclusion

Building professional software requires a combination of technical skills, architectural thinking, and attention to detail. By following these patterns and practices, you'll be well-equipped to tackle complex development challenges.

The key is to continuously learn, adapt, and stay current with evolving technologies while maintaining a solid foundation in fundamental principles.

---

*This article is part of our ongoing series on professional software development. Stay tuned for more in-depth technical content.*
`

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-tech-grid bg-tech-grid-size opacity-[0.01]" />
      
      <div className="container mx-auto px-4 pt-24 pb-12 relative max-w-4xl">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
            <Link to="/blog">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Header Image */}
          <div className="h-64 md:h-80 bg-gradient-to-br from-tech-500 to-electric-600 relative overflow-hidden rounded-xl mb-8">
            <div className="absolute inset-0 bg-tech-grid bg-tech-grid-size opacity-20" />
            <div className="absolute bottom-6 left-6">
              <IconComponent className="w-16 h-16 text-white/80" />
            </div>
            <div className="absolute top-6 left-6">
              <Badge className="bg-white/20 text-white border-white/30">
                {post.category}
              </Badge>
            </div>
            {post.featured && (
              <div className="absolute top-6 right-6">
                <Badge className="bg-electric-500 text-white">Featured</Badge>
              </div>
            )}
          </div>

          {/* Title and Meta */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="w-4 h-4" />
                {post.views} views
              </div>
              <div className="flex items-center gap-2">
                <HeartIcon className="w-4 h-4" />
                {post.likes} likes
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  <TagIcon className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <Button size="sm" className="bg-electric-500 hover:bg-electric-600 text-white">
                <HeartIcon className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <BookmarkIcon className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <ShareIcon className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </motion.div>

        <Separator className="mb-12" />

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-card/40 backdrop-blur border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <div className="whitespace-pre-line text-foreground leading-relaxed">
                  {fullContent.split('```').map((section, index) => {
                    if (index % 2 === 1) {
                      // Code block
                      return (
                        <pre key={index} className="bg-muted rounded-lg p-4 overflow-x-auto my-6">
                          <code className="text-sm font-mono text-foreground">{section}</code>
                        </pre>
                      )
                    }
                    // Regular text
                    return (
                      <div key={index} className="space-y-4">
                        {section.split('\n\n').map((paragraph, pIndex) => {
                          if (paragraph.startsWith('## ')) {
                            return (
                              <h2 key={pIndex} className="text-2xl font-bold text-foreground mt-8 mb-4">
                                {paragraph.replace('## ', '')}
                              </h2>
                            )
                          }
                          if (paragraph.startsWith('### ')) {
                            return (
                              <h3 key={pIndex} className="text-xl font-semibold text-foreground mt-6 mb-3">
                                {paragraph.replace('### ', '')}
                              </h3>
                            )
                          }
                          if (paragraph.trim().match(/^\d+\./)) {
                            return (
                              <div key={pIndex} className="my-4">
                                <p className="text-foreground">{paragraph}</p>
                              </div>
                            )
                          }
                          if (paragraph.trim()) {
                            return (
                              <p key={pIndex} className="text-foreground mb-4">
                                {paragraph}
                              </p>
                            )
                          }
                          return null
                        })}
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Related Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => {
                const RelatedIcon = relatedPost.icon
                return (
                  <Card key={relatedPost.id} className="group hover:shadow-lg transition-all duration-300 bg-card/40 backdrop-blur border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {relatedPost.category}
                        </Badge>
                        <RelatedIcon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        <Link to={`/blog/${relatedPost.id}`}>
                          {relatedPost.title}
                        </Link>
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </motion.section>
      </div>
    </div>
  )
} 