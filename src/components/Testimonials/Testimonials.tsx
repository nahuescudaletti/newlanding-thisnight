import { BackgroundRadialLeft } from "../BackgroundRadialLeft"; // Importa BackgroundRadialLeft aquí
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { testimonialsData } from "./Testimonials.data";

export default function Testimonials() {
    return (
        <div className="relative px-6 pt-20 md:pt-40" id="experiencias">
            <BackgroundRadialLeft />
            <BackgroundRadialRight />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl md:text-4xl font-semibold text-center mb-10 font-montserrat">Experiencias</h1>
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-[1200px]">
                        {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="mb-4 break-inside-avoid">
                            <img
                            src={testimonial.imageUrl}
                            alt={`Testimonial ${testimonial.id}`}
                            className="w-full rounded-lg shadow-illuminated"
                            />
                        </div>
                        ))}
                    </div>
            </div>
        </div>
    );
}

