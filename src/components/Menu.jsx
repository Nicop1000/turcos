import React, { useState } from "react";
import Hamburguesas from "./Hamburguesas";
import Sandguich from "./Sandguich";
import Parrilladas from "./Parrilladas";
import Bebidas from "./Bebidas";

const ArrowDown = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-5 w-5 inline-block"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
        />
    </svg>
);

const ArrowUp = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-5 w-5 inline-block"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
        />
    </svg>
);

const Menu = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const items = [
        {
            title: "HAMBURGUESAS",
            content: <Hamburguesas />,
        },
        {
            title: "Sandwich",
            content: <Sandguich />,
        },
        {
            title: "Parrilladas",
            content: <Parrilladas />,
        },
        {
            title: "Bebidas sin alcohol",
            content: <Bebidas />,
        },
        // Agrega más elementos según sea necesario
    ];

    return (
        <div className="max-w-md mx-auto mt-8 px-2">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border rounded mb-2 overflow-hidden"
                >
                    <button
                        className="w-full p-3 bg-gray-300 grid grid-cols-9 rounded-lg"
                        onClick={() => handleToggle(index)}
                    >
                        <span className="grid col-span-8">
                            <span className="">{item.title}</span>
                        </span>
                        <span className="grid col-span-1 justify-center">
                            {activeIndex === index ? <ArrowUp /> : <ArrowDown />}
                        </span>
                    </button>



                    {activeIndex === index && (
                        <div className="p-3 bg-gray-100">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Menu;
