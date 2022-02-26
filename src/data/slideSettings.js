export const slideSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidestoscroll: 1,
};

export const newSlideSetting = {
  ...slideSetting,
  slidesToShow: 5,
  dots: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1026,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        speed: 400,
      },
    },
    {
      breakpoint: 400,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 400,
      },
    },
  ],
};
