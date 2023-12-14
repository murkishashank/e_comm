/**
 *
 * MainCarousel
 *
 */
import { mainCarouselData } from 'app/pages/Home/HomeCarousel';
import React, { memo } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  items: any[];
  disableButtonsControls?: boolean;
  disableDotsControls?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  infinite?: boolean;
}

export const MainCarousel = memo(
  ({
    items,
    disableButtonsControls = false,
    disableDotsControls = false,
    autoPlay = false,
    autoPlayInterval = 1000,
    infinite = false,
  }: Props) => {
    return (
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls={disableButtonsControls}
        disableDotsControls={disableDotsControls}
        autoPlay={autoPlay}
        autoPlayInterval={autoPlayInterval}
        infinite={infinite}
        // responsive={responsive}
        controlsStrategy="alternate"
      />
    );
  },
);
