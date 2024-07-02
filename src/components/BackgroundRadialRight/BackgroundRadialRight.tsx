import { getBasePath } from "@/utils/utils";
import Image from "next/image";

export function BackgroundRadialRight() {
    return (
        <div className="right-0 absolute -z-50 top-0">
            <Image src={`${getBasePath()}/assets/background-floated-right-purple.png`} width={850} height={650} alt="Circle Right" />
        </div>
    )
}
