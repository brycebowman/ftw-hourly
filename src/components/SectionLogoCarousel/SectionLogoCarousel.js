import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionLogoCarousel.module.css';

import Image1 from './images/logo-burger-king.png';
import Image2 from './images/logo-caterers.png';
import Image3 from './images/logo-mcdonalds.png'
import Image4 from './images/logo-festival.png';
import Image5 from './images/logo-panera.png';
import Image6 from './images/logo-american.gif';
import Image7 from './images/logo-taco-bell.png';
import Image8 from './images/logo-wendys.png';

const SliderItem = ({ image }) => {
  return (
    <div className={css.sliderItem}>
      <img src={image} className={css.sliderItem__img}></img>
    </div>
  )
}


const SETTINGS = {
  dots: false,
  lazyLoad: true,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerPadding: '20px',
  responsive: [
    {
      breakpoint: 600,
      settings: {
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 1500,
      }
    },
  ]
}

const SectionLogoCarousel = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>

      <Slider
        className={css.slider}
        {...SETTINGS}
      >
        <SliderItem
          image={Image1}
        />
        <SliderItem
          image={Image2}
        />
        <SliderItem
          image={Image3}
        />
        <SliderItem
          image={Image4}
        />
        <SliderItem
          image={Image5}
        />
        <SliderItem
          image={Image6}
        />
        <SliderItem
          image={Image7}
        />
        <SliderItem
          image={Image8}
        />
      </Slider>
    </div>
  );
};

SectionLogoCarousel.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLogoCarousel.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLogoCarousel;
