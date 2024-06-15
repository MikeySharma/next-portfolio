import { ReviewInformationsData } from "@/app/lib/definition"
import Image from "next/image";

const SingleReview = ({ element }: { element: ReviewInformationsData }) => {
    const { imgLink, title, designation, text } = element;
    return (
        <div className="st-testimonial st-style1"
            data--duration="0.8s"
            data--delay="0.2s">
            <div className="st-testimonial-text">
                <p>{text}</p>
                <div className="st-quote">
                    <Image src="/icon/quote.png" alt="quote" height={40} width={60} />
                </div>
            </div>
            <div className="st-testimonial-info">
                <div className="st-testimonial-img">
                    <Image src={imgLink} alt="client" height={90} width={90} />
                </div>
                <div className="st-testimonial-meta">
                    <h4 className="st-testimonial-name">{title}</h4>
                    <div className="st-testimonial-designation">{designation}</div>
                </div>
            </div>

        </div>
    )
}

export default SingleReview