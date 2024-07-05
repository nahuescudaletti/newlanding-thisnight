"use client";
import { BackgroundRadialLeft } from '@/components/BackgroundRadialLeft';
import { Reveal } from '@/components/Reveal';
import { getBasePath } from '@/utils/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

interface Feature {
    beneficios: string;
    descriptionBeneficios: string;
}

export default function FormProducts() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    let features: Feature[] = [];

    try {
        const encodedFeatures = searchParams.get('features');
        if (encodedFeatures) {
            const decodedFeatures = decodeURIComponent(encodedFeatures);
            console.log('Decoded features:', decodedFeatures);
            features = JSON.parse(decodedFeatures);
        }
    } catch (error) {
        console.error('Error parsing features:', error);
        // Opcional: mostrar algún mensaje de error o manejo de errores en la UI
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900 text-white bg-cover bg-center" style={{ backgroundImage: `url(${getBasePath()}/assets/finalhero.png)` }}>
            <BackgroundRadialLeft />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2 gap-8">
                <div>
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                            <span className="block degradedBlue bg-OrangeLight">{title}</span>
                            Lorem, ipsum <br />
                            Loreris.
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsum consequatur vel iusto nisi, pariatur in repellendus numquam consequuntur molestias. Voluptas explicabo ut fugiat, deleniti quibusdam cumque eaque nobis excepturi!</p>
                    </Reveal>
                </div>
                <div className="grid gap-4">
                    {features.length > 0 ? (
                        features.map((feature: Feature, index: number) => (
                            <Reveal key={index}>
                                <div className="p-4 rounded-3xl group hover:bg-radialBlack bg-white bg-opacity-10">
                                    <h4 className="text-lg font-semibold text-primary">{feature.beneficios}</h4>
                                    <p className="text-sm text-primaryDark">{feature.descriptionBeneficios}</p>
                                </div>
                            </Reveal>
                        ))
                    ) : (
                        <p className="text-sm">No features available</p>
                    )}
                </div>
            </div>
            <button
                onClick={() => router.back()}
                className="absolute top-4 left-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
            >
                <FaArrowLeft className="mr-2" /> Back
            </button>
        </div>
    );
}
