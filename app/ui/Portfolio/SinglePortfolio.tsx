import { PortfolioItems } from "@/app/lib/definition"
import { Icon } from "@iconify/react";
import Image from "next/image";

const SinglePortfolio = ({ data, getData }: { data: PortfolioItems, getData: Function }) => {
    const { imgLink, imgLinkLg, title, subTitle, effect, duration, delay } = data;
    return (
        <div className="lg:col-span-6 col-span-12"
            data-aos={effect}
            data-aos-duration={duration}
            data-aos-delay={delay}>
            <div className="st-portfolio-signle st-style1" onClick={() => getData(imgLinkLg, title, subTitle)}>
                <div className="st-portfolio-item">
                    <div className="st-portfolio st-zoom">
                        <div className="st-portfolio-img st-zoom-in">
                            <Image src={imgLink} alt="portfolio" height={370} width={300} />
                        </div>
                        <div className="st-portfolio-item-hover">
                            <Icon icon="mdi:plus-circle" />
                            <h5>{title}</h5>
                            <p>{subTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePortfolio