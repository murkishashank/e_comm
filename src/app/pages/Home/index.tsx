/**
 *
 * Home
 *
 */
import { MainCarousel } from 'app/components/MainCarousel';
import React, { memo } from 'react';
import { mainCarouselData } from './HomeCarousel';
import { useNavigate } from 'react-router-dom';

interface Props {}

export const Home = memo((props: Props) => {
  const navigate = useNavigate();
  const items = mainCarouselData.map(({ image, path }) => (
    <img
      className="cursor-pointer"
      src={image}
      alt={image}
      role="presentation"
      onClick={() => navigate(image)}
    />
  ));
  return (
    <div>
      <MainCarousel
        items={items}
        disableButtonsControls={true}
        infinite={true}
        autoPlay={true}
        autoPlayInterval={1000}
      />
    </div>
  );
});
