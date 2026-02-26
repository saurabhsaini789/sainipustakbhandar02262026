import React from 'react';
import { MessageCircle } from 'lucide-react';

export const StickyWhatsApp: React.FC = () => {
    const phoneNumber = "917419150418";
    const defaultMessage = "Hello Saini Pustak Bhandar! I have an inquiry.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20bd5a] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center animate-[bounce_2s_infinite]"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={28} />
        </a>
    );
};
