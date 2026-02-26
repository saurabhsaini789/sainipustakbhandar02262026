import React from 'react';
import { ProductCard } from '../ui/ProductCard';

const featuredProducts = [
    {
        id: '1',
        name: 'Class 10 CBSE Math Textbook - Latest Edition',
        price: 350,
        originalPrice: 400,
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2787&auto=format&fit=crop',
        category: 'School Books'
    },
    {
        id: '2',
        name: 'SSC CGL Complete Preparation Kit',
        price: 850,
        originalPrice: 1200,
        image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2787&auto=format&fit=crop',
        category: 'Competitive Exams'
    },
    {
        id: '3',
        name: 'Premium Leather Notebook - Ruled, 200 Pages',
        price: 250,
        originalPrice: 300,
        image: 'https://images.unsplash.com/photo-1531346878377-a5eb9bc14c81?q=80&w=2787&auto=format&fit=crop',
        category: 'Stationery'
    },
    {
        id: '4',
        name: 'Class 12 Physics Vol 1 & 2 Setup',
        price: 650,
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2798&auto=format&fit=crop',
        category: 'School Books'
    }
];

export const FeaturedProducts: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-200 pb-6">
                    <div>
                        <span className="text-secondary/60 uppercase tracking-widest font-semibold text-sm mb-2 block">
                            Trending
                        </span>
                        <h2 className="text-3xl font-heading font-bold text-dark sm:text-4xl relative inline-block">
                            Featured Products
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
                        </h2>
                    </div>
                    <a
                        href="https://wa.me/917419150418"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-dark font-medium underline underline-offset-4 decoration-primary/30 mt-4 md:mt-0 transition-colors"
                    >
                        Request Full Catalog &rarr;
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};
