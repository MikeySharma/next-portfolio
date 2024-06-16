'use client';
import Slider from 'react-slick';
import './Carousel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleReview from '../Review/SingleReview';
import { BlogData, BlogInformationsData } from '@/app/lib/definition';
import SignleBlog from '../Blog/SignleBlog';

const Carousel = ({ data }: { data: BlogData }) => {
  const { useFor, informations, sliderSetting } = data;
  if (useFor === 'review') {
    return (
      <Slider {...sliderSetting}>
        {
          informations.map((element: BlogInformationsData, index: number) => (
            <SingleReview element={element} key={index} />
          ))
        }
      </Slider>
    )
  } else if (useFor === 'blog') {
    return (
      <Slider {...sliderSetting}>
        {
          informations.map((element: BlogInformationsData, index: number) => (
            <SignleBlog element={element} key={index} />
          ))
        }
      </Slider>
    )
  } else {
    <Slider {...sliderSetting}></Slider>
  }
}

export default Carousel