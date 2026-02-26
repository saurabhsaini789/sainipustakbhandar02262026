import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative bg-secondary overflow-hidden py-16 sm:py-24 lg:py-32">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--color-secondary)_0%,_transparent_100%)] opacity-70"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 font-medium text-sm">
                            <BookOpen size={16} className="mr-2" />
                            Serving the community since 1996
                        </div>

                        <h1 className="text-4xl tracking-tight font-extrabold text-dark sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl mb-6">
                            <span className="block font-heading">Your Trusted</span>
                            <span className="block text-primary font-heading mt-2">Learning Partner</span>
                        </h1>

                        <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-body">
                            Discover quality school books, competitive exam guides, and premium stationery. Trusted by thousands of students, parents, and government teachers for over two decades.
                        </p>

                        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/917419150418?text=Hello%20Saini%20Pustak%20Bhandar!%20I%20would%20like%20to%20place%20an%20order."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-lg text-white bg-primary hover:bg-primary/90 hover:shadow-lg transition-all duration-300 md:text-lg"
                            >
                                Order on WhatsApp
                            </a>
                            <a
                                href="#categories"
                                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary text-base font-semibold rounded-lg text-primary bg-transparent hover:bg-primary/5 transition-all duration-300 md:text-lg"
                            >
                                Browse Categories
                                <ArrowRight size={18} className="ml-2" />
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                        <div className="relative mx-auto w-full rounded-2xl shadow-xl lg:max-w-md overflow-hidden bg-white/50 backdrop-blur-sm border border-white/20 p-4">
                            <img
                                className="w-full rounded-xl object-cover h-64 sm:h-72 md:h-96"
                                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2790&auto=format&fit=crop"
                                alt="Modern bookstore layout with shelves of books"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4 animate-bounce hover:animate-none transition-all">
                                <div className="bg-accent/20 p-3 rounded-full text-accent">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-dark mb-0">10,000+</p>
                                    <p className="text-xs text-gray-500 font-medium">Students Served</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
