import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ui/ProductCard';

// Dummy data for products by category
const categoryProducts: Record<string, { title: string, description: string, products: any[] }> = {
    'school-books': {
        title: 'School Books',
        description: 'Find all NCERT, CBSE, and State Board textbooks for every class level. We supply complete and genuine sets directly from publishers.',
        products: [
            { id: 'sb1', name: 'Class 10 CBSE Math Textbook - Latest Edition', price: 350, originalPrice: 400, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2787&auto=format&fit=crop', category: 'School Books' },
            { id: 'sb2', name: 'Class 12 Physics Vol 1 & 2 Setup', price: 650, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2798&auto=format&fit=crop', category: 'School Books' },
            { id: 'sb3', name: 'NCERT Class 8 Science Guide', price: 180, image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2787&auto=format&fit=crop', category: 'School Books' },
            { id: 'sb4', name: 'ICSE Class 9 History & Civics', price: 420, originalPrice: 450, image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2873&auto=format&fit=crop', category: 'School Books' },
        ]
    },
    'competitive-exams': {
        title: 'Competitive Exams',
        description: 'Comprehensive guides for SSC, Banking, UPSC, NDA, and State-level examinations. Latest editions and mock-test booklets available.',
        products: [
            { id: 'ce1', name: 'SSC CGL Complete Preparation Kit', price: 850, originalPrice: 1200, image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2787&auto=format&fit=crop', category: 'Competitive Exams' },
            { id: 'ce2', name: 'UPSC General Studies Paper 1 Manual', price: 1100, originalPrice: 1400, image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2874&auto=format&fit=crop', category: 'Competitive Exams' },
            { id: 'ce3', name: 'Banking PO Quantitative Aptitude', price: 550, image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2712&auto=format&fit=crop', category: 'Competitive Exams' },
            { id: 'ce4', name: 'Current Affairs Yearly Compilation', price: 250, originalPrice: 300, image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2940&auto=format&fit=crop', category: 'Competitive Exams' },
        ]
    },
    'stationery': {
        title: 'Stationery & Supplies',
        description: 'Premium notebooks, pens, art materials, geometry boxes, and everyday school or office supplies from trusted brands.',
        products: [
            { id: 'st1', name: 'Premium Leather Notebook - Ruled, 200 Pages', price: 250, originalPrice: 300, image: 'https://images.unsplash.com/photo-1531346878377-a5eb9bc14c81?q=80&w=2787&auto=format&fit=crop', category: 'Stationery' },
            { id: 'st2', name: 'Parker Classic Gold Ball Pen', price: 450, originalPrice: 500, image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=2940&auto=format&fit=crop', category: 'Stationery' },
            { id: 'st3', name: 'Camlin Artist Acrylic Colors - 12 Shades', price: 380, image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2942&auto=format&fit=crop', category: 'Stationery' },
            { id: 'st4', name: 'A4 Copier Paper Bundle (500 Sheets)', price: 320, originalPrice: 350, image: 'https://images.unsplash.com/photo-1629828552607-ad4640ef72b5?q=80&w=2835&auto=format&fit=crop', category: 'Office Supplies' },
        ]
    }
};

export const CategoryPage: React.FC = () => {
    const { categoryId } = useParams<{ categoryId: string }>();

    const categoryData = categoryId && categoryProducts[categoryId]
        ? categoryProducts[categoryId]
        : {
            title: 'Collection',
            description: 'Browse our extensive collection of books and supplies.',
            products: []
        };

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Category Header */}
            <div className="bg-white border-b border-gray-200 pt-16 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-heading font-extrabold text-dark sm:text-5xl mb-4 capitalize">
                        {categoryData.title}
                    </h1>
                    <div className="h-1 w-20 bg-accent mx-auto rounded mb-6"></div>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 font-body">
                        {categoryData.description}
                    </p>
                </div>
            </div>

            {/* Filters and Products Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar Filters (Static for template) */}
                    <div className="w-full md:w-64 shrink-0">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 sticky top-28">
                            <h3 className="font-heading font-bold text-lg mb-4 text-dark border-b border-gray-100 pb-2">Filters</h3>

                            <div className="mb-6">
                                <h4 className="font-medium text-sm text-gray-700 mb-3">Availability</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                                        <input type="checkbox" className="mr-2 rounded text-primary focus:ring-primary h-4 w-4" defaultChecked />
                                        In Stock
                                    </label>
                                    <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                                        <input type="checkbox" className="mr-2 rounded text-primary focus:ring-primary h-4 w-4" />
                                        Pre-order (New Session)
                                    </label>
                                </div>
                            </div>

                            {categoryId === 'school-books' && (
                                <div className="mb-6">
                                    <h4 className="font-medium text-sm text-gray-700 mb-3">Class Level</h4>
                                    <div className="space-y-2">
                                        {['Class 12', 'Class 11', 'Class 10', 'Class 9', 'Primary Level'].map(level => (
                                            <label key={level} className="flex items-center text-sm text-gray-600 cursor-pointer">
                                                <input type="checkbox" className="mr-2 rounded text-primary focus:ring-primary h-4 w-4" />
                                                {level}
                                            </label>
                                        ))}
                                    </div>
                                    <h4 className="font-medium text-sm text-gray-700 mt-4 mb-3">Board</h4>
                                    <div className="space-y-2">
                                        {['CBSE', 'NCERT', 'State Board', 'ICSE'].map(board => (
                                            <label key={board} className="flex items-center text-sm text-gray-600 cursor-pointer">
                                                <input type="checkbox" className="mr-2 rounded text-primary focus:ring-primary h-4 w-4" />
                                                {board}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {categoryId === 'competitive-exams' && (
                                <div className="mb-6">
                                    <h4 className="font-medium text-sm text-gray-700 mb-3">Exam Type</h4>
                                    <div className="space-y-2">
                                        {['UPSC', 'SSC', 'Banking', 'State Level', 'Railway'].map(exam => (
                                            <label key={exam} className="flex items-center text-sm text-gray-600 cursor-pointer">
                                                <input type="checkbox" className="mr-2 rounded text-primary focus:ring-primary h-4 w-4" />
                                                {exam}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {categoryId === 'stationery' && (
                                <div className="mb-6">
                                    <h4 className="font-medium text-sm text-gray-700 mb-3">Item Type</h4>
                                    <div className="space-y-2">
                                        {['Notebooks & Diaries', 'Pens & Writing', 'Art Supplies', 'Office Equipment'].map(item => (
                                            <label key={item} className="flex items-center text-sm text-gray-600 cursor-pointer">
                                                <input type="checkbox" className="mr-2 rounded text-primary focus:ring-primary h-4 w-4" />
                                                {item}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div>
                                <h4 className="font-medium text-sm text-gray-700 mb-3">Price Range</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                                        <input type="radio" name="price" className="mr-2 text-primary focus:ring-primary h-4 w-4" />
                                        Under ₹500
                                    </label>
                                    <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                                        <input type="radio" name="price" className="mr-2 text-primary focus:ring-primary h-4 w-4" />
                                        ₹500 - ₹1000
                                    </label>
                                    <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                                        <input type="radio" name="price" className="mr-2 text-primary focus:ring-primary h-4 w-4" />
                                        Above ₹1000
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-grow">
                        {categoryData.products.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categoryData.products.map((product) => (
                                    <ProductCard key={product.id} {...product} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white p-12 text-center rounded-xl border border-gray-200">
                                <h3 className="text-xl font-heading font-bold text-dark mb-2">Category Not Found</h3>
                                <p className="text-gray-500 mb-6">We couldn't find items for this category online.</p>
                                <a
                                    href="https://wa.me/917419150418"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors"
                                >
                                    Contact Store for Catalog
                                </a>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};
