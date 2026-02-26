import React from 'react';
import { Copy, Printer, Users, Library, Package, PenTool } from 'lucide-react';

export const Services: React.FC = () => {
    return (
        <div className="bg-secondary min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent uppercase tracking-widest font-semibold text-sm mb-2 block">
                        What We Offer
                    </span>
                    <h1 className="text-4xl font-heading font-extrabold text-dark sm:text-5xl mb-4">
                        Our Services
                    </h1>
                    <div className="h-1 w-24 bg-accent mx-auto rounded mb-6"></div>
                    <p className="text-lg text-gray-600 font-body">
                        Beyond just books, we provide a complete suite of educational and professional services to meet all your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            icon: Printer,
                            title: "Photocopy & Printing",
                            description: "High-quality color and black & white printing. Spiral binding, lamination, and project report formatting services.",
                            color: "bg-blue-50 text-blue-600 border-blue-100"
                        },
                        {
                            icon: Library,
                            title: "School Partnerships",
                            description: "Full supply of yearly school book sets. We offer customized packages and seamless delivery for schools and institutes.",
                            color: "bg-purple-50 text-purple-600 border-purple-100"
                        },
                        {
                            icon: Package,
                            title: "Bulk Orders",
                            description: "Special discounted rates for bulk purchases of textbooks, competitive guides, and stationery for classes and libraries.",
                            color: "bg-emerald-50 text-emerald-600 border-emerald-100"
                        },
                        {
                            icon: PenTool,
                            title: "Premium Stationery",
                            description: "Extensive collection of writing instruments, art supplies, geometry boxes, and organizers from top national brands.",
                            color: "bg-amber-50 text-amber-600 border-amber-100"
                        },
                        {
                            icon: Users,
                            title: "Seasonal Exam Kits",
                            description: "Specially curated preparation kits and mock-test bundles for board exams and peak competitive exam seasons.",
                            color: "bg-rose-50 text-rose-600 border-rose-100"
                        },
                        {
                            icon: Copy,
                            title: "Document Services",
                            description: "Fast scanning, resizing, emailing, and form-filling services for competitive exam applications and admissions.",
                            color: "bg-cyan-50 text-cyan-600 border-cyan-100"
                        }
                    ].map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className={`flex flex-col h-full bg-white rounded-2xl p-8 border hover:shadow-lg transition-all duration-300 ${service.color.split(' ')[2]}`}
                            >
                                <div className={`inline-flex p-4 rounded-xl ${service.color.split(' ').slice(0, 2).join(' ')} mb-6 w-fit`}>
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-dark mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 font-body flex-grow">
                                    {service.description}
                                </p>
                                <a
                                    href="https://wa.me/917419150418?text=Hello%20Saini%20Pustak%20Bhandar!%20I%20want%20to%20know%20more%20about%20your%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center text-primary font-semibold hover:text-dark transition-colors"
                                >
                                    Inquire Now &rarr;
                                </a>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};
