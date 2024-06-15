'use client';
import Slider from 'react-slick';
import './Carousel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleReview from '../Review/SingleReview';
import { ReviewData, ReviewInformationsData } from '@/app/lib/definition';

const Carousel = ({ data }: { data: ReviewData }) => {
  const { useFor, informations, sliderSetting } = data;
  if (useFor === 'review') {
    return (
      <Slider {...sliderSetting}>
        {
          informations.map((element: ReviewInformationsData, index: number) => (
            <SingleReview element={element} key={index} />
          ))
        }
      </Slider>
    )
  }else{
    <Slider {...sliderSetting}></Slider>
  }
}

export default Carousel