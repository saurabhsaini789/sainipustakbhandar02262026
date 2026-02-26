import React from 'react';
import { BookOpen, Users, Clock, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <div className="bg-secondary min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-heading font-extrabold text-dark sm:text-5xl mb-4">
                        Our Story
                    </h1>
                    <div className="h-1 w-24 bg-accent mx-auto rounded mb-6"></div>
                    <p className="text-lg text-gray-600 font-body">
                        Established in 1996, Saini Pustak Bhandar is a family-owned business built on the trust of our local community.
                    </p>
                </div>

                {/* Story Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                                A Legacy of Knowledge
                            </h2>
                            <div className="space-y-4 text-gray-600 font-body leading-relaxed">
                                <p>
                                    Saini Pustak Bhandar started as a small, humble bookshop in 1996 with a simple mission: to make quality education materials accessible to every student in our community.
                                </p>
                                <p>
                                    Over the decades, we have grown into the most trusted educational supplier in the city. We have proudly served generations of families—the students who bought their first primary school books from us are now returning to buy books for their own children.
                                </p>
                                <p>
                                    We believe in honest pricing, genuine products, and building long-term relationships with schools, teachers, parents, and students.
                                </p>
                            </div>
                        </div>
                        <div className="bg-primary/5 flex items-center justify-center p-8">
                            <img
                                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2574&auto=format&fit=crop"
                                alt="Vintage style books"
                                className="rounded-xl shadow-md max-h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: Clock,
                            title: 'Decades of Experience',
                            desc: 'Since 1996, we understand exactly what students and schools need.',
                        },
                        {
                            icon: Users,
                            title: 'Family Owned',
                            desc: 'Operated with traditional values of care, respect, and community focus.',
                        },
                        {
                            icon: ShieldCheck,
                            title: 'Honest & Trusted',
                            desc: 'Transparent pricing with no hidden costs. Only genuine publisher materials.',
                        },
                        {
                            icon: BookOpen,
                            title: 'Comprehensive Range',
                            desc: 'From KG to competitive exams, we stock everything a student needs.',
                        },
                    ].map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
                                <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                                    <Icon size={24} />
                                </div>
                                <h3 className="font-heading font-bold text-dark text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};
