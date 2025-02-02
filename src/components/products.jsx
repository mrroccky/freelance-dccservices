import React, { useState } from "react";

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState("DCCMS");

    const products = [
        {
            id: "DCCMS",
            title: "DCC Maid Services",
            image: "/domestic/maid.png",
            description:
                "An end-to-end maid service that helps you leverage your time efficiently.",
            points: [
                "Cleaning/Dusting",
                "Laundry and dishwashing",
                "Mopping and sweeping",
                "Ironing",
            ],
        },
        {
            id: "DCCCS",
            title: "DCC Cook Services",
            image: "/domestic/cook.png",
            description:
                "Professional cooking services tailored to meet your culinary needs.",
            points: [
                "Cooking all varieties of food",
                "Cleaning gas counter",
            ],
        },
        {
            id: "DCCPCS",
            title: "DCC Patient Care Services",
            image: "/domestic/patient-care.png",
            description:
                "Compassionate care services for patients in need.",
            points: [
                "Diaper changing",
                "Sponging/Bathing",
                "Patient feed",
                "Taking medicines on time",
                "Exercises and walking",
            ],
        },
        {
            id: "DCCECS",
            title: "DCC Elderly Care Services",
            image: "/domestic/elderly-care.png",
            description:
                "Comprehensive elderly care services for comfort and well-being.",
            points: [
                "Experienced caregivers",
                "Health monitoring",
                "Companionship",
                "Daily assistance",
                "Customized plans",
            ],
        },
        {
            id: "HN",
            title: "DCC Home Nurse Services",
            image: "/domestic/home-nurce.png",
            description:
                "Professional home nursing services for personalized medical care.",
            points: [
                "Basic nursing care",
                "Critical nursing care",
                "Tracheostomy nursing",
                "Palliative nursing",
                "Mother and baby care nursing",
                "Travel abroad nursing",
                "Geriatric nursing",
            ],
        },
    ];

    return (
        <div className="bg-white">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 px-4">
                See Your Service Requirement
            </h2>
            <div className="flex flex-col md:flex-row bg-gray-50 border border-gray-100 rounded-lg shadow-lg mx-4 lg:mx-32">
                {/* Sidebar */}
                <div className="md:w-1/4 bg-white border-b md:border-b-0 md:border-r border-gray-200">
                    <ul className="space-y-4 p-4 text-center md:text-left">
                        {products.map((product) => (
                            <li
                                key={product.id}
                                className={`cursor-pointer p-3 rounded-md ${
                                    selectedProduct === product.id
                                        ? "bg-green-100 text-green-600 font-bold"
                                        : "text-gray-700"
                                }`}
                                onClick={() => setSelectedProduct(product.id)}
                            >
                                {product.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content Section */}
                <div className="md:w-3/4 p-4 sm:p-6 flex flex-col items-center md:items-start bg-white">
                    {/* Product Details */}
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                        {/* Image */}
                        <img
                            src={
                                products.find((product) => product.id === selectedProduct).image
                            }
                            alt={products.find((product) => product.id === selectedProduct).title}
                            className="w-36 h-36 sm:w-48 sm:h-48 object-cover rounded-md"
                        />
                        {/* Text Content */}
                        <div className="text-center md:text-left">
                            <h3 className="text-green-600 font-bold text-lg mb-2">
                                {products.find((product) => product.id === selectedProduct).title}
                            </h3>
                            <p className="text-gray-700 mb-3 text-left">
                                {products.find((product) => product.id === selectedProduct).description}
                            </p>
                            <ul className="list-disc pl-4 text-gray-600 text-left">
                                {products
                                    .find((product) => product.id === selectedProduct)
                                    .points.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
