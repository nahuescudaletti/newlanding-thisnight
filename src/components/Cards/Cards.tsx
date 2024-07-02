"use client"
import { useRef, useState } from 'react';
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import Image from "next/image";
import { Reveal } from "../Reveal";
import { getBasePath } from "@/utils/utils";

export function Cards() {
    const [isHovering, setIsHovering] = useState(false);
    const cardItemRef = useRef<HTMLDivElement>(null);

    const startRotate = (e: React.MouseEvent<HTMLDivElement>) => {
        const cardItem = cardItemRef.current;
        if (!cardItem) return;

        const cardRect = cardItem.getBoundingClientRect();
        const offsetX = e.clientX - cardRect.left;
        const offsetY = e.clientY - cardRect.top;
        
        const rotateX = `rotateX(${-(offsetY - cardRect.height / 2) / 8}deg)`;
        const rotateY = `rotateY(${(offsetX - cardRect.width / 2) / 8}deg)`;
        
        cardItem.style.transform = `${rotateX} ${rotateY} translateZ(30px)`;
        setIsHovering(true);
    };

    const stopRotate = () => {
        const cardItem = cardItemRef.current;
        if (!cardItem) return;

        cardItem.style.transform = '';
        setIsHovering(false);
    };

    return (
        <div className="relative p-4 md:py-40">
            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h1 className="text-5xl font-semibold">
                            Diseña tu propia <br />
                            tarjeta con
                            <span className="block degradedBlue bg-blueLight">
                                This Night
                            </span>
                        </h1>
                    </Reveal>
                </div>
                <div 
                    ref={cardItemRef}
                    className="card-itemtn h-auto w-72 md:w-full overflow-hidden relative"
                    onMouseMove={startRotate}
                    onMouseLeave={stopRotate}
                    style={{
                        transition: 'transform 0.3s ease',
                        transform: isHovering ? 'translateZ(30px)' : ''
                    }}
                >
                    <Image 
                        src={`${getBasePath()}/assets/cardthisnight.png`} 
                        alt="Card" 
                        width={450} 
                        height={450} 
                        className="transition-transform duration-300 ease-in-out transform-gpu"
                    />
                </div>
            </div>
        </div>
    );
}
