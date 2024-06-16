import "./Review.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import Carousel from "../Slider/Carousel";
import { BlogData } from "@/app/lib/definition";

const ReviewSection = ({ data }: { data: BlogData }) => {
  return (
    <section className="st-dark-bg" id="review">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Review" />
      <div className="container mx-auto px-4"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="50">
        <Carousel data={data} />
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  )
}

export default ReviewSection