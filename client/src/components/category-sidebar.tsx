import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/lib/sanity';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import type { Category } from '@shared/sanity-schemas';

interface CategorySidebarProps {
  onSelectCategory: (slug?: string) => void;
  selectedCategorySlug?: string;
}

export default function CategorySidebar({ onSelectCategory, selectedCategorySlug }: CategorySidebarProps) {
  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  if (isLoading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 dark:text-red-400">Error loading categories.</div>;
  }

  if (!categories || categories.length === 0) {
    return <div className="text-gray-500 dark:text-gray-400">No categories found.</div>;
  }

  const topLevelCategories = categories.filter((cat: Category) => !cat.parentCategory);
  const subCategories = categories.filter((cat: Category) => cat.parentCategory);

  const getSubCategories = (parentId: string) => {
    return subCategories.filter((subCat: Category) => subCat.parentCategory?._id === parentId);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Categories</h2>
      <Button
        variant="ghost"
        className={`w-full justify-start mb-2 ${!selectedCategorySlug ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' : ''}`}
        onClick={() => onSelectCategory(undefined)}
      >
        All Blogs
      </Button>
      <Accordion type="multiple" className="w-full">
        {topLevelCategories.map((category: Category) => (
          <AccordionItem key={category._id} value={category._id}>
            <AccordionTrigger
              className={`text-lg font-medium ${selectedCategorySlug === category.slug?.current ? 'text-blue-600 dark:text-blue-400' : ''}`}
              onClick={(e) => {
                // Prevent accordion from toggling if clicking the category itself
                if (selectedCategorySlug !== category.slug?.current) {
                  onSelectCategory(category.slug?.current);
                }
              }}
            >
              {category.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4 border-l border-gray-200 dark:border-gray-700">
                <Button
                  variant="ghost"
                  className={`w-full justify-start mb-1 ${selectedCategorySlug === category.slug?.current ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' : ''}`}
                  onClick={() => onSelectCategory(category.slug?.current)}
                >
                  All {category.title}
                </Button>
                {getSubCategories(category._id).map((subCategory: Category) => (
                  <Button
                    key={subCategory._id}
                    variant="ghost"
                    className={`w-full justify-start pl-6 ${selectedCategorySlug === subCategory.slug?.current ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' : ''}`}
                    onClick={() => onSelectCategory(subCategory.slug?.current)}
                  >
                    {subCategory.title}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
