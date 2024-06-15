'use client';
import './Portfolio.scss';
import SinglePortfolio from './SinglePortfolio';
import SectionHeading from '../SectionHeading/SectionHeading';
import { useState } from 'react';
import { PortfolioData, PortfolioItems } from '@/app/lib/definition';
import { Dialog } from '@mui/material';
import Modal from '../Modal/Modal';

const PortfolioSection = ({ data }: { data: PortfolioData }) => {
  const [open, setOpen] = useState(false);
  const [tempData, setTempData] = useState([0, '', '', '']);

  const getData = (imgLink: string, title: string, subTitle: string) => {
    let tempData = [imgLink, title, subTitle];
    setTempData(() => [1, ...tempData]);
    setOpen(true);
  }
  const modalClose = () => {
    setOpen(false);
  }

  //load items
  const { portfolioItems } = data;
  const itemsPerPage = 6;
  const [visibleItems, setVisibleItems] = useState(
    portfolioItems.slice(0, itemsPerPage),
  );
  const [showLoadMore, setShowLoadMore] = useState(true);

  const loadMoreItems = () => {
    const currentLength = visibleItems.length;
    const nextChunk = portfolioItems.slice(
      currentLength,
      currentLength + itemsPerPage,
    );

    setVisibleItems(prevItems => [...prevItems, ...nextChunk]);
    if (currentLength + itemsPerPage >= portfolioItems.length) setShowLoadMore(false);
  }
  return (
    <section id="portfolio">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title='Portfolio' />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 lg:gap-12 gap-4">
          {visibleItems.map((element : PortfolioItems, index : number) => (
            <SinglePortfolio data={element} key={index} getData={getData} />
          ))}
          <div className="col-span-12 text-center">
            <div className="st-portfolio-btn">
              {showLoadMore && (
                <button className='st-btn st-style1 st-color1'
                onClick={loadMoreItems}
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
    // {open === true ? <Modal img={tempData[1]} title={tempData[2]} subTitle={tempData[3]} modalClose={modalClose} /> : ""}
  )
}

export default PortfolioSection