import "./IconBox.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import Image from "next/image";
import { ServiceData, Services } from "@/app/lib/definition";

const IconBox = ({ data }: { data: ServiceData }) => {
    const { services } = data;
    return (
        <section>
            <div className="st-height-b100 st-height-lg-b80"></div>
            <SectionHeading title="Service" />
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 mx-12">
                    {
                        services.map((element: Services, index: number) => (
                            <div className="lg:col-span-1 md:col-span-1 mx-4" key={index} data-aos={element.effect ? element.effect : 'zoom-out-up'} data-aos-duration={element.duration ? element.duration : "800"} data-aos-delay={element.delay ? element.delay : "200"}>
                                <div className="st-iconbox st-style1">
                                    <div className="st-iconbox-icon">
                                        <Image src={element.imgLink} alt="icon" height="200" width="200" />
                                    </div>
                                    <h2 className="st-iconbox-title">{element.title}</h2>
                                    <div className="st-iconbox-text">{element.text}</div>
                                </div>
                                <div className="st-height-b30 st-height-lg-b30"></div>

                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="st-height-b70 st-height-lg-b50"></div>
        </section>
    )
}

export default IconBox