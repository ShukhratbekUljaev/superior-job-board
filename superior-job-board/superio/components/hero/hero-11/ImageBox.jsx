import HeroJobFeatured from "../../job-featured/HeroJobFeatured";

const ImageBox = () => {
  return (
    <div className="image-box">
      <figure
        className="main-image"
        data-aos="fade-in"
        data-aos-delay="1200"
        data-aos-offset="-250"
      >
        <img src="/images/index-11/header/image.png" alt="hero image" />{" "}
      </figure>
      {/* hero image */}

      <HeroJobFeatured />

      <div
        className="info_block_three wow fadeIn anm"
        data-aos="fade-in"
        data-aos-offset="-250"
        data-aos-delay="2100"
      >
        <span className="icon flaticon-briefcase"></span>
        <p>Creative Agency</p>
        <span className="sub-text">Startup</span>
        <span className="right_icon fa fa-check"></span>
      </div>
      {/* <!-- Info BLock Three --> */}

      {/* <!-- Info BLock Four --> */}
      <div
        className="info_block_four wow fadeIn anm"
        data-aos="fade-in"
        data-aos-offset="-250"
        data-aos-delay="2400"
      >
        <span className="icon flaticon-file"></span>
        <div className="inner">
          <p>Upload Your CV</p>
          <span className="sub-text">It only takes a few seconds</span>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
