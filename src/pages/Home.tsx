import React from 'react';
import { Hero } from '../components/home/Hero';
import { CategoriesSection } from '../components/home/CategoriesSection';
import { TrustSection } from '../components/home/TrustSection';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { Testimonials } from '../components/home/Testimonials';

export const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <CategoriesSection />
            <TrustSection />
            <FeaturedProducts />
            <Testimonials />
        </div>
    );
};
