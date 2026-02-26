import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    name,
    price,
    originalPrice,
    image,
    category,
}) => {
    const discount = originalPrice
        ? Math.round(((originalPrice - price) / originalPrice) * 100)
        : 0;

    const whatsappMessage = `Hello Saini Pustak Bhandar! I want to order "${name}" from the ${category} category. My location is ____.`;
    const whatsappUrl = `https://wa.me/917419150418?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full group">
            <div className="relative pt-[100%] overflow-hidden bg-gray-50">
                <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                {discount > 0 && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {discount}% OFF
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs text-primary font-medium mb-1 uppercase tracking-wider">
                    {category}
                </span>
                <h3 className="font-heading text-lg font-semibold text-dark mb-2 line-clamp-2 title-font">
                    {name}
                </h3>

                <div className="mt-auto pt-4 flex items-center justify-between">
                    <div>
                        <span className="text-xl font-bold text-dark">₹{price}</span>
                        {originalPrice && (
                            <span className="text-sm text-gray-400 line-through ml-2">
                                ₹{originalPrice}
                            </span>
                        )}
                    </div>
                </div>

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full flex items-center justify-center bg-primary hover:bg-primary/90 text-white py-2.5 rounded-lg font-medium transition-colors gap-2"
                >
                    <ShoppingBag size={18} />
                    Order via WhatsApp
                </a>
            </div>
        </div>
    );
};
