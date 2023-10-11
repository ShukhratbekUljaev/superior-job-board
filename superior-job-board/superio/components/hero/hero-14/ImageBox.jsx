const ImageBox = () => {
  return (
    <div className="image-box">
      <figure className="main-image" data-aos="fade-in" data-aos-delay="800">
        <img src="/images/index-14/header/1.png" alt="" />
      </figure>
      {/* End large image */}

      <div
        className="image-part -type-1"
        data-aos="fade-in"
        data-aos-delay="900"
      >
        <img src="/images/index-14/header/2.png" alt="image" />
      </div>

      <div
        className="image-part -type-2 "
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        <img src="/images/index-14/header/3.png" alt="image" />
      </div>

      <div
        className="image-part -type-3"
        data-aos="fade-in"
        data-aos-delay="1100"
      >
        <img src="/images/index-14/header/4.png" alt="image" />
      </div>
    </div>
  );
};

export default ImageBox;
