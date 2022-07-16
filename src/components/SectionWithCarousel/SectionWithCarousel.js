import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionWithCarousel.module.css';

import testImage from './images/test.jpeg';
import Image1 from './images/Tani-Taco-Bell.jpeg';
import Image2 from './images/beth-cashier.jpeg';
import Image3 from './images/Patrick-barista.jpeg';
import Image4 from './images/Margaret-panera.jpeg';
import Image5 from './images/Jared-cook.jpeg';
import Image6 from './images/Jen-server.jpeg';
import Image7 from './images/Deb-BK.jpeg';

const SliderItem = ({ image, description, name, experience, rate }) => {
  return (
    <div className={css.sliderItem}>
      <img src={image} className={css.sliderItem__img}></img>
      <p className={css.sliderItem__description}>{description}</p>
      <span className={css.sliderItem__name}>{name}</span>
      <span className={css.sliderItem__experience}>{experience}</span>
      <span className={css.sliderItem__rate}>{rate}</span>
    </div>
  )
}


const SETTINGS = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: '20px',
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
      }
    },
  ]
}

const SectionWithCarousel = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionWithCarousel.title" />
      </div>

      <Slider
        className={css.slider}
        {...SETTINGS}
      >
        <SliderItem
          image={Image1}
          description={<FormattedMessage id="SectionWithCarousel.sliderItem1Description" />}
          name={<FormattedMessage id="SectionWithCarousel.sliderItem1Name" />}
          experience={<FormattedMessage id="SectionWithCarousel.sliderItem1Experience" />}
          rate={<FormattedMessage id="SectionWithCarousel.sliderItem1Rate" />}
        />
        <SliderItem
          image={Image2}
          description={<FormattedMessage id="SectionWithCarousel.sliderItem2Description" />}
          name={<FormattedMessage id="SectionWithCarousel.sliderItem2Name" />}
          experience={<FormattedMessage id="SectionWithCarousel.sliderItem2Experience" />}
          rate={<FormattedMessage id="SectionWithCarousel.sliderItem2Rate" />}
        />
        <SliderItem
          image={Image3}
          description={<FormattedMessage id="SectionWithCarousel.sliderItem3Description" />}
          name={<FormattedMessage id="SectionWithCarousel.sliderItem3Name" />}
          experience={<FormattedMessage id="SectionWithCarousel.sliderItem3Experience" />}
          rate={<FormattedMessage id="SectionWithCarousel.sliderItem3Rate" />}
        />
        <SliderItem
          image={Image4}
          description={<FormattedMessage id="SectionWithCarousel.sliderItem4Description" />}
          name={<FormattedMessage id="SectionWithCarousel.sliderItem4Name" />}
          experience={<FormattedMessage id="SectionWithCarousel.sliderItem4Experience" />}
          rate={<FormattedMessage id="SectionWithCarousel.sliderItem4Rate" />}
        />
        <SliderItem
          image={Image5}
          description={<FormattedMessage id="SectionWithCarousel.sliderItem5Description" />}
          name={<FormattedMessage id="SectionWithCarousel.sliderItem5Name" />}
          experience={<FormattedMessage id="SectionWithCarousel.sliderItem5Experience" />}
          rate={<FormattedMessage id="SectionWithCarousel.sliderItem5Rate" />}
        />
        <SliderItem
          image={Image6}
          description={<FormattedMessage id="SectionWithCarousel.sliderItem6Description" />}
          name={<FormattedMessage id="SectionWithCarousel.sliderItem6Name" />}
          experience={<FormattedMessage id="SectionWithCarousel.sliderItem6Experience" />}
          rate={<FormattedMessage id="SectionWithCarousel.sliderItem6Rate" />}
        />
        <SliderItem
          image={Image7}
          description={<FormattedMessage id="SectionWithCarousel.sliderItem7Description" />}
          name={<FormattedMessage id="SectionWithCarousel.sliderItem7Name" />}
          experience={<FormattedMessage id="SectionWithCarousel.sliderItem7Experience" />}
          rate={<FormattedMessage id="SectionWithCarousel.sliderItem7Rate" />}
        />
      </Slider>
    </div>
  );
};

SectionWithCarousel.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionWithCarousel.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionWithCarousel;
