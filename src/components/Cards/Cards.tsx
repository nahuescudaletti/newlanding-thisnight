"use client";
import { useRef, useState } from 'react';
import { Reveal } from "../Reveal";
import { getBasePath } from "@/utils/utils";
import { BackgroundRadialLeft } from '../BackgroundRadialLeft';

export function Cards() {
    const [isHovering, setIsHovering] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState(`${getBasePath()}/assets/cardthisnight.png`);
    const [logoImage, setLogoImage] = useState<string | null>(null);
    const cardItemRef = useRef<HTMLDivElement>(null);
    const backgroundInputRef = useRef<HTMLInputElement>(null);
    const logoInputRef = useRef<HTMLInputElement>(null);

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

    const handleBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    setBackgroundImage(reader.result.toString());
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    setLogoImage(reader.result.toString());
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBackgroundButtonClick = () => {
        if (backgroundInputRef.current) {
            backgroundInputRef.current.click();
        }
    };

    const handleLogoButtonClick = () => {
        if (logoInputRef.current) {
            logoInputRef.current.click();
        }
    };

    return (
        <div className="relative p-4 md:py-20 flex flex-col items-center">
            <BackgroundRadialLeft />
            <div className="grid grid-cols-1 md:grid-cols-2 justify-around w-full max-w-5xl mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <Reveal>
                        <div className="flex flex-col items-center sm:items-start gap-4 text-center md:text-left">
                            <h1 className="text-1xl sm:text-3xl lg:text-4xl font-semibold tracking-wider">DISEÑA TU PROPIA</h1>
                            <h1 className="text-1xl sm:text-3xl lg:text-4xl font-semibold tracking-wider">TARJETA CON</h1>
                            <h1 className="text-2xl sm:text-4xl lg:text-6xl degradedBlue bg-OrangeLight font-extrabold tracking-wider mb-4 p-0">THIS NIGHT</h1>
                        </div>
                    </Reveal>
                </div>
                <div className="flex flex-col items-center">
                    <div
                        ref={cardItemRef}
                        className="card-itemtn overflow-hidden relative flex items-center justify-center rounded-3xl w-250 md:w-300 lg:w-350 xl:w-400 h-156 md:h-187 lg:h-218 xl:h-250"
                        onMouseMove={startRotate}
                        onMouseLeave={stopRotate}
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transition: 'transform 0.3s ease',
                            transform: isHovering ? 'translateZ(30px)' : '',
                        }}
                    >
                        {logoImage && (
                            <img
                                src={logoImage}
                                alt="Logo"
                                style={{
                                    maxWidth: '50%',
                                    maxHeight: '50%',
                                    objectFit: 'contain'
                                }}
                            />
                        )}
                    </div>
                    <div className="mt-5 md:mt-10 flex items-center space-x-4">
                        <button
                            type='button'
                            onClick={handleBackgroundButtonClick}
                            className='relative inline-block p-px font-semibold leading-6 text-white no-underline bg-slate-950 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900 text-xs md:text-base' // Reducido tamaño de texto para móvil
                        >
                            <span className="absolute inset-0 overflow-hidden rounded-xl">
                                <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(54,31,117,0.6)_0%,rgba(54,31,117,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                </span>
                            </span>
                            <div className="relative z-10 flex items-center px-3 md:px-6 py-2 md:py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10">
                                <span>Seleccionar tu Fondo</span>
                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                        </button>

                        <input
                            type="file"
                            ref={backgroundInputRef}
                            style={{ display: 'none' }}
                            onChange={handleBackgroundChange}
                        />

                        <button
                            type='button'
                            onClick={handleLogoButtonClick}
                            className='relative inline-block p-px font-semibold leading-6 text-white no-underline bg-slate-950 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900 text-xs md:text-base' // Reducido tamaño de texto para móvil
                        >
                            <span className="absolute inset-0 overflow-hidden rounded-xl">
                                <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(54,31,117,0.6)_0%,rgba(54,31,117,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                </span>
                            </span>
                            <div className="relative z-10 flex items-center px-3 md:px-6 py-2 md:py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10">
                                <span>Seleccionar tu Logo</span>
                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                        </button>

                        <input
                            type="file"
                            ref={logoInputRef}
                            style={{ display: 'none' }}
                            onChange={handleLogoChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
