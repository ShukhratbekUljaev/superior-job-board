import Slider from "react-slick";

const HeroSliderGallery = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  // custom navigation
  function Arrow(props) {
    let className =
      props.type === "next"
        ? "slick-arrow slick-next"
        : "slick-arrow slick-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <span className="fa fa-arrow-right"></span>
        </>
      ) : (
        <>
          <span className="fa fa-arrow-left"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <div className="banner-carousel arrow-center-between arrow-rounded hide-arrow-1024">
      <Slider
        {...settings}
        arrows={true}
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
      >
        <div className="slide-item bg-image image-1"></div>
        <div className="slide-item bg-image image-2"></div>
      </Slider>
    </div>
  );
};

export default HeroSliderGallery;
