import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Book, Search, Filter, Star, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";

interface BookData {
  id: number;
  cat_id: number;
  sub_cat_id: number;
  author_ids?: string;
  book_access: string;
  title: string;
  description: string;
  image: string;
  url_type: string;
  url: string;
  file_version: number;
  download_enable: number;
  book_on_rent: number;
  book_rent_price?: number;
  book_rent_time?: number;
  featured: number;
  status: number;
}

interface SubCategory {
  id: number;
  cat_id: number;
  sub_category_name: string;
  sub_category_image: string;
  status: number;
  books: BookData[];
}

interface Category {
  id: number;
  category_name: string;
  category_image: string;
  status: number;
  subcategories: SubCategory[];
}

export default function PDFLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");

  
  // Fetch data from API
  const { data: apiData, isLoading, error } = useQuery<Category[]>({
    queryKey: ['/api/landing-page'],
    queryFn: async (): Promise<Category[]> => {
      const response = await fetch('https://server.samadhangs.com/api/landing-page');
      if (!response.ok) {
        throw new Error('Failed to fetch PDF library data');
      }
      return await response.json();
    }
  });

  // Process the data for display
  const cleanCategoryName = (name: string) => {
    return name.replace(/^\d+\.\s*/, '').trim();
  };

  // Format names with "|" symbol - split English and Hindi on separate lines
  const formatNameWithTranslation = (name: string): JSX.Element => {
    const cleanName = cleanCategoryName(name);
    if (cleanName.includes('|')) {
      const parts = cleanName.split('|').map(part => part.trim());
      return (
        <span>
          {parts[0]}
          {parts[1] && (
            <>
              <br />
              <span className="text-xs opacity-80">{parts[1]}</span>
            </>
          )}
        </span>
      );
    }
    return <span>{cleanName}</span>;
  };
  
  const categories = ["All Categories", ...(apiData?.map(cat => cleanCategoryName(cat.category_name)) || [])];
  
  const getSubCategories = (categoryName: string) => {
    if (!apiData || categoryName === "All Categories") return ["All"];
    const category = apiData.find(cat => cleanCategoryName(cat.category_name) === categoryName);
    return ["All", ...(category?.subcategories?.map(sub => cleanCategoryName(sub.sub_category_name)) || [])];
  };

  const getAllBooks = () => {
    if (!apiData) return [];
    const allBooks: BookData[] = [];
    apiData.forEach(category => {
      category.subcategories.forEach(subCategory => {
        subCategory.books.forEach(book => {
          allBooks.push(book);
        });
      });
    });
    return allBooks;
  };

  const getFilteredBooks = () => {
    const allBooks = getAllBooks();
    return allBooks.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (selectedCategory === "All Categories") {
        return matchesSearch;
      }
      
      const category = apiData?.find(cat => cleanCategoryName(cat.category_name) === selectedCategory);
      if (!category) return false;
      
      // Check if book belongs to this category by finding its subcategory
      const matchesCategory = category.subcategories.some(sub => sub.id === book.sub_cat_id);
      
      if (selectedSubCategory === "All") {
        return matchesSearch && matchesCategory;
      }
      
      const subCategory = category.subcategories.find(sub => cleanCategoryName(sub.sub_category_name) === selectedSubCategory);
      const matchesSubCategory = book.sub_cat_id === subCategory?.id;
      
      return matchesSearch && matchesCategory && matchesSubCategory;
    });
  };

  const filteredBooks = getFilteredBooks();

  useEffect(() => {
    if (selectedCategory !== "All Categories") {
      setSelectedSubCategory("All");
    }
  }, [selectedCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-white">Loading PDF Library...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">Failed to load PDF library data</p>
          <p className="text-slate-400">Please check your internet connection and try again</p>
        </div>
      </div>
    );
  }





  const getBookImageUrl = (book: BookData) => {
    if (book.image.startsWith('upload/')) {
      return `https://server.samadhangs.com/${book.image}`;
    }
    return book.image;
  };

  const getCategoryImageUrl = (category: Category) => {
    return `https://server.samadhangs.com/upload/categories/${category.category_image}`;
  };

  const getSubCategoryImageUrl = (subcategory: SubCategory) => {
    return `https://server.samadhangs.com/upload/subcategories/${subcategory.sub_category_image}`;
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <motion.header 
        className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <motion.button 
                  className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="w-6 h-6" />
                  <span>Back to Home</span>
                </motion.button>
              </Link>
              <div className="h-6 w-px bg-slate-600"></div>
              <div className="flex items-center space-x-2">
                <Book className="w-6 h-6 text-primary" />
                <h1 className="text-xl font-bold text-white">PDF Library</h1>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Search and Filters */}
      <motion.section 
        className="bg-slate-800 border-b border-slate-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for books"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-primary"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-700 border border-slate-600 text-white px-4 py-2 rounded-lg focus:border-primary min-w-[200px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* Sub-category Filter */}
              <select
                value={selectedSubCategory}
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                className="bg-slate-700 border border-slate-600 text-white px-4 py-2 rounded-lg focus:border-primary min-w-[200px]"
                disabled={selectedCategory === "All Categories"}
              >
                {getSubCategories(selectedCategory).map(subCat => (
                  <option key={subCat} value={subCat}>
                    {subCat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4">
            <p className="text-slate-400">
              Found {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''}
              {searchTerm && (
                <span> matching "{searchTerm}"</span>
              )}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {selectedCategory === "All Categories" ? (
            /* Show Categories Grid */
            <motion.div 
              key="categories"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {apiData?.map((category, index) => (
                <motion.div
                  key={category.id}
                  className="glass-effect border border-slate-700 rounded-xl hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => setSelectedCategory(cleanCategoryName(category.category_name))}
                >
                  {/* Category Image */}
                  <div className="relative aspect-[4/3] bg-slate-800 overflow-hidden">
                    <img
                      src={getCategoryImageUrl(category)}
                      alt={category.category_name}
                      className="w-full h-full object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Category Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-2 group-hover:text-primary transition-colors text-center whitespace-normal break-words">
                      {formatNameWithTranslation(category.category_name)}
                    </h3>
                    <p className="text-sm text-slate-400 text-center">
                      {category.subcategories.reduce((total, sub) => total + sub.books.length, 0)} book{category.subcategories.reduce((total, sub) => total + sub.books.length, 0) !== 1 ? 's' : ''}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : selectedCategory !== "All Categories" && selectedSubCategory === "All" ? (
            /* Show Subcategories Grid */
            <motion.div 
              key="subcategories"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {(() => {
                const selectedCategoryData = apiData?.find(cat => cleanCategoryName(cat.category_name) === selectedCategory);
                return selectedCategoryData?.subcategories.map((subcategory, index) => (
                  <motion.div
                    key={subcategory.id}
                    className="glass-effect border border-slate-700 rounded-xl hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => setSelectedSubCategory(cleanCategoryName(subcategory.sub_category_name))}
                  >
                    {/* Subcategory Image */}
                    <div className="relative aspect-[4/3] bg-slate-800 overflow-hidden">
                      <img
                        src={getSubCategoryImageUrl(subcategory)}
                        alt={subcategory.sub_category_name}
                        className="w-full h-full object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    </div>

                    {/* Subcategory Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-white mb-2 group-hover:text-primary transition-colors text-center whitespace-normal break-words">
                        {formatNameWithTranslation(subcategory.sub_category_name)}
                      </h3>
                      <p className="text-sm text-slate-400 text-center">
                        {subcategory.books.length} book{subcategory.books.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </motion.div>
                )) || [];
              })()}
            </motion.div>
          ) : filteredBooks.length === 0 ? (
            <motion.div 
              key="no-results"
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Book className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-400 mb-2">No books found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <motion.div 
              key="results"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredBooks.map((book, index) => {
                // Books only have sub_cat_id, not cat_id - find category through subcategory
                let category = null;
                let subcategory = null;
                
                // Find the category that contains this book's subcategory
                for (const cat of apiData || []) {
                  const foundSubcat = cat.subcategories.find(sub => sub.id === book.sub_cat_id);
                  if (foundSubcat) {
                    category = cat;
                    subcategory = foundSubcat;
                    break;
                  }
                }
                

                
                return (
                  <motion.div
                    key={book.id}
                    className="glass-effect border border-slate-700 rounded-xl hover:border-primary/50 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Book Cover */}
                    <div className="relative aspect-[4/3] bg-slate-800 overflow-hidden">
                      <img
                        src={getBookImageUrl(book)}
                        alt={book.title}
                        className="w-full h-full object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                      {/* Free/Premium Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge 
                          variant={book.book_access === 'Free' ? 'secondary' : 'default'}
                          className={book.book_access === 'Free' ? 'bg-green-600' : 'bg-purple-600'}
                        >
                          {book.book_access}
                        </Badge>
                      </div>

                      {/* Featured Badge */}
                      {book.featured === 1 && (
                        <div className="absolute top-12 left-3">
                          <Badge className="bg-yellow-600">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Book Info */}
                    <div className="p-4">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs text-white border-slate-600 block mb-1">
                          {category?.category_name ? formatNameWithTranslation(category.category_name) : 'General'}
                        </Badge>
                        {subcategory && (
                          <Badge variant="outline" className="text-xs text-white border-slate-600 block">
                            {formatNameWithTranslation(subcategory.sub_category_name)}
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="font-semibold text-white mb-2 group-hover:text-primary transition-colors text-center whitespace-normal break-words">
                        {formatNameWithTranslation(book.title)}
                      </h3>
                      
                      {book.description && (
                        <p className="text-sm text-slate-400 mb-3">
                          {book.description}
                        </p>
                      )}

                      <div className="flex items-center justify-end">
                        <div className="flex items-center space-x-2 text-xs text-slate-400">
                          <span>{book.book_access}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
