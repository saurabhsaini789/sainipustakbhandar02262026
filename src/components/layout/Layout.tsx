import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { StickyWhatsApp } from '../ui/StickyWhatsApp';

export const Layout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <StickyWhatsApp />
        </div>
    );
};
