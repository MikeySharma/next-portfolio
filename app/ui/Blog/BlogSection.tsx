import "./Blog.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import Carousel from "../Slider/Carousel";
import { BlogData } from "@/app/lib/definition";

const BlogSection = ({ data }: { data: BlogData }) => {
    return (
        <section id="blog">
            <div className="st-height-b100 st-height-b80"></div>
            <SectionHeading title="Blogs" />
            <div className="container mx-auto px-4"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100">
                <Carousel data={data} />
            </div>
            <div className="st-height-b95 st-height-lg-b75"></div>
        </section>
    )
}

export default BlogSection