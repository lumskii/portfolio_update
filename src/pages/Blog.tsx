import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  CalendarIcon, 
  ClockIcon, 
  TagIcon, 
  SearchIcon,
  TrendingUpIcon,
  CodeIcon,
  ArrowRightIcon
} from 'lucide-react'
import { blogPosts } from '../data/blogData'
const categories = ["All", "Frontend", "Backend", "DevOps", "Database"]
const sortOptions = ["Latest", "Most Popular", "Most Liked"]

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("Latest")

  // Filter and sort posts
  const filteredPosts = blogPosts
    .filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "Most Popular":
          return b.views - a.views
        case "Most Liked":
          return b.likes - a.likes
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
    })

  const featuredPosts = blogPosts.filter(post => post.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-background relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-tech-grid bg-tech-grid-size opacity-[0.02]" />
        
        <div className="container mx-auto px-4 py-20 relative">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              <CodeIcon className="w-3 h-3 mr-1" />
              Technical Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Developer Insights &
              <span className="block text-primary bg-gradient-to-r from-primary to-electric-500 bg-clip-text text-transparent">
                Technical Articles
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              In-depth articles about modern software development, best practices, and emerging technologies.
            </p>
          </motion.div>

          {/* Featured Posts Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-8">
              <TrendingUpIcon className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Featured Articles</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => {
                const IconComponent = post.icon
                return (
                  <Link key={post.id} to={`/blog/${post.id}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 bg-card/60 backdrop-blur border-border/50 overflow-hidden cursor-pointer">
                      <div className="relative">
                        <div className="absolute top-4 right-4 z-10">
                          <Badge className="bg-electric-500 text-white">Featured</Badge>
                        </div>
                        <div className="h-48 relative overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <IconComponent className="w-12 h-12 text-white/80" />
                          </div>
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="w-3 h-3" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <ClockIcon className="w-3 h-3" />
                              {post.readTime}
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                            Read More <ArrowRightIcon className="w-3 h-3 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </motion.section>

          <Separator className="mb-12" />

          {/* Filters and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="transition-all duration-200"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="flex gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>

          {/* All Posts Grid */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => {
                const IconComponent = post.icon
                return (
                  <motion.div key={post.id} variants={itemVariants}>
                    <Link to={`/blog/${post.id}`}>
                      <Card className="h-full group hover:shadow-lg transition-all duration-300 bg-card/40 backdrop-blur border-border/50 cursor-pointer">
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute top-3 left-3">
                            <Badge variant="secondary" className="text-xs bg-white/90 text-gray-800">
                              {post.category}
                            </Badge>
                          </div>
                          <div className="absolute bottom-3 right-3">
                            <IconComponent className="w-5 h-5 text-white/80" />
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors mb-2">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-1 mb-4">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                <TagIcon className="w-2 h-2 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="w-3 h-3" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <ClockIcon className="w-3 h-3" />
                              {post.readTime}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span>👁 {post.views}</span>
                              <span>❤️ {post.likes}</span>
                            </div>
                            <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                              Read <ArrowRightIcon className="w-3 h-3 ml-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>

          {/* Newsletter Subscription */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20"
          >
            <Card className="bg-gradient-to-r from-tech-500 to-electric-600 border-0 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-tech-grid bg-tech-grid-size opacity-20" />
              <CardContent className="p-8 relative">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                  <p className="text-white/80 mb-6">
                    Get the latest articles and insights delivered to your inbox
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <Input
                      placeholder="Enter your email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <Button variant="secondary" className="bg-white text-tech-600 hover:bg-white/90">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
  )
} 