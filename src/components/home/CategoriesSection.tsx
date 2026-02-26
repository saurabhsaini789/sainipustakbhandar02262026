import React from 'react';
import { Link } from 'react-router-dom';
import { Book, GraduationCap, PenTool, Briefcase, Printer } from 'lucide-react';

const categories = [
    {
        id: 'school-books',
        name: 'School Books',
        description: 'NCERT, CBSE & State Board textbooks for all classes.',
        icon: Book,
        color: 'bg-blue-50 text-blue-600',
        path: '/category/school-books'
    },
    {
        id: 'competitive-exams',
        name: 'Competitive Exams',
        description: 'Preparation guides for SSC, Banking, UPSC & more.',
        icon: GraduationCap,
        color: 'bg-primary/10 text-primary',
        path: '/category/competitive-exams'
    },
    {
        id: 'stationery',
        name: 'Stationery',
        description: 'Premium pens, notebooks, and art supplies.',
        icon: PenTool,
        color: 'bg-green-50 text-green-600',
        path: '/category/stationery'
    },
    {
        id: 'office-products',
        name: 'Office Products',
        description: 'Files, folders, and essential office organization.',
        icon: Briefcase,
        color: 'bg-amber-50 text-amber-600',
        path: '/services'
    },
    {
        id: 'printing-photocopy',
        name: 'Printing & Photocopy',
        description: 'High-quality color, B&W printing and binding services.',
        icon: Printer,
        color: 'bg-purple-50 text-purple-600',
        path: '/services'
    }
];

export const CategoriesSection: React.FC = () => {
    return (
        <section id="categories" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-heading font-bold text-dark sm:text-4xl text-center">
                        Shop by Category
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-accent mx-auto rounded"></div>
                    <p className="mt-4 text-gray-500 font-body max-w-2xl mx-auto">
                        Find everything you need for your educational journey, all in one trusted place.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <Link
                                key={category.id}
                                to={category.path}
                                className="group flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 text-center"
                            >
                                <div className={`p-4 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon size={32} />
                                </div>
                                <h3 className="font-heading font-bold text-dark mb-2 text-lg group-hover:text-primary transition-colors">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-gray-500 line-clamp-2">
                                    {category.description}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};
