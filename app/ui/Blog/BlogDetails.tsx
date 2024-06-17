'use client';
import "./BlogDetails.scss";
import "./Blog.scss";
import "./Comment.scss";
import "../Contact/Contact.scss";
import Carousel from "../Slider/Carousel";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import BlogForm from "./BlogForm";


const BlogDetails = () => {
    const blogDetails = {
        heroBg: '/images/hero-bg17.jpg',
        useFor: 'image-slider',
        sliderSetting: {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        },
        sliderImages: [
            {
                imgLink: '/images/hero-bg3.jpg',
            },
            {
                imgLink: '/images/hero-bg4.jpg',
            },
        ],
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className="st-content">
            <div className="st-page-heading st-bg"
                style={{ backgroundImage: `url(${blogDetails.heroBg})` }}>
                <div className="container mx-auto px-4">
                    <div className="st-page-heading-in text-center">
                        <h1 className="st-page-heading-title">
                            Dynamically procrastinate B2C users <br />
                            after installed base benefits..
                        </h1>
                        <div className="st-post-label">
                            <span>
                                By <Link href="" >Mary Neo</Link>
                            </span>
                            <span>Mar 15, 2020</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* .st-page-heading */}
            <div className="st-height-b100 st-height-lg-b80"></div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 gap-4 mx-auto">
                    <div className="lg:col-span-10 col-span-12 lg:col-start-2 offset-md-1">
                        <div className="st-post-details st-style1">
                            <p>
                                Bring to the table win-win survival strategies to ensure
                                proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.

                            </p>
                            <p>
                                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.
                            </p>
                            <Image className="st-zoom-in" src="/images/hero-bg3.jpg" alt="blog" height={1600} width={870} />
                            <h2>Collaboratively administrate empowered.</h2>
                            <div className="st-post-info">
                                <div className="st-post-text">
                                    <p>
                                        Podcasting operational change management inside of workflows to establish a framework.
                                        Taking seamless key performance indicators offfline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.
                                    </p>
                                    <p>
                                        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.
                                    </p>
                                    <p>
                                        Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.
                                    </p>
                                    <h2>Blog video post can also added.</h2>
                                    {/* For Youtube */}
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe src="https://www.youtube.com/embed/vGOL7ZvuGMc"
                                            className="embed-responsive-item"
                                            height={459}
                                            width={'100%'}
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <p>
                                        Completely synergize resource taxing relationships via premiew niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
                                    </p>
                                    <blockquote>
                                        Integer accumsan arcu ligula, eget dictum augue egestas sed.
                                        Curabitur bibendum, lorem ac dapibus pellentesque, justo lectus bibendum enim.
                                        <small>
                                            by: <span>Mark Parker</span>
                                        </small>
                                    </blockquote>
                                    <p>
                                        Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.
                                    </p>
                                    <Carousel data={blogDetails} />
                                    <div className="st-height-b20 st-height-lg-b20" />
                                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing soleley on the bottom line.</p>
                                    <div className="st-height-b35 st-height-lg-b35"></div>
                                    <div className="st-post-meta">
                                        <div className="st-post-tages">
                                            <h4 className="st-post-tage-title">Tags:</h4>
                                            <ul className="st-post-tage-list st-mp0">
                                                <li>
                                                    <Link href="#">App</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">PHP</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Web</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Business</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Agency</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Development</Link>
                                                </li>
                                            </ul>
                                        </div>
                                   
                                    <div className="st-post-share">
                                        <h4 className="st-post-share-title">Share:</h4>
                                        <div className="st-post-share-btn-list items-center">
                                            <Link href="#">
                                                <Icon icon="fa6-brands:facebook-f" />
                                            </Link>
                                            <Link href="#">
                                                <Icon icon="fa6-brands:twitter" />
                                            </Link>
                                            <Link href="#">
                                                <Icon icon="fa6-brands:behance" />
                                            </Link>
                                            <Link href="#">
                                                <Icon icon="fa6-brands:instagram" />
                                            </Link>
                                            <Link href="#">
                                                <Icon icon="fa6-brands:pinterest-p" />
                                            </Link>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="st-height-b60 st-height-lg-b60"></div>
                                </div>
                                <div className="st-post-btn-gropu">
                                    <Link href="#"
                                        className="st-btn st-style2 st-color1 st-size-medium text-center rounded-2xl hover:shadow-md transition-all duration-500 hover:shadow-yellow-600 bg-transparent border-[#8e6301] hover:!bg-yellow-600 hover:!text-white text-yellow-600" >
                                        Previous Post
                                    </Link>
                                    <Link href="#"
                                        className="st-btn st-style2 st-color1 st-size-medium bg-transparent text-center rounded-2xl hover:shadow-md transition-all duration-500 hover:shadow-yellow-600 border-[#8e6301] text-yellow-600 hover:!text-white hover:!bg-yellow-600" >
                                        Next Post
                                    </Link>
                                    
                                </div>
                            </div>
                            <div className="st-height-b60 st-height-lg-b60"></div>
                            <div className="comments-area">
                                <div className="comment-list-outer">
                                    <h2 className="comments-title">Comments(3)</h2>
                                </div>
                                <ol className="comment-list">
                                    <li className="comment">
                                        <div className="comment-body">
                                            <div className="comment-meta">
                                                <div className="comment-author">
                                                    <Image src="/images/comment1.jpg"
                                                        alt="comment"
                                                        height={70}
                                                        width={70}
                                                        className="avatar" />
                                                    <Link href="#" className="nm">
                                                        Smith Jhon
                                                    </Link>
                                                </div>
                                                <div className="comment-metadata">
                                                    <Link href="#">
                                                        <span>
                                                            15 Jan, 2020
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="comment-content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, minima?
                                                    </p>
                                                </div>
                                                <div className="reply">
                                                    <Link href="#" className="comment-reply-link">
                                                        Reply
                                                    </Link>
                                                </div>
                                            </div>
                                            <ol className="children">
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <div className="comment-meta">
                                                            <div className="comment-author">
                                                                <Image
                                                                    src="/images/comment2.jpg"
                                                                    alt="comment1"
                                                                    className="avatar"
                                                                    height={70}
                                                                    width={70}
                                                                />
                                                                <span className="nm">
                                                                    <Link href="#">Robat Newman</Link>
                                                                </span>
                                                            </div>
                                                            <div className="comment-metadata">
                                                                <Link href="#">
                                                                    <span>
                                                                        15 Jan, 2020
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="comment-content">
                                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                        </div>
                                                        <div className="reply">
                                                            <Link href="#" className="comment-reply-link">
                                                                Reply
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </div>
                                    </li>
                                    <li className="comment">
                                        <div className="comment-body">
                                            <div className="comment-meta">
                                                <div className="comment-author">
                                                    <Image src="/images/comment1.jpg"
                                                        alt="comment1"
                                                        className="avatar"
                                                        height={70}
                                                        width={70}
                                                    />
                                                    <span className="nm">
                                                        <Link href="#">Hannibal Lecter</Link>
                                                    </span>
                                                </div>
                                                <div className="comment-metadata">
                                                    <Link href="#">
                                                        <span>26 Jan, 2016</span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="comment-content">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                            </div>
                                            <div className="reply">
                                                <Link href="#" className="comment-reply-link">
                                                    Reply
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <div className="comment-respond">
                                <h2 className="comment-reply-title">Add your comment</h2>
                                <BlogForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="st-height-b100 st-height-lg-b80"></div>
        </section>
    )
}

export default BlogDetails