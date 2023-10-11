const ImageBox = () => {
  return (
    <div className="image-box">
      <div className="row">
        <div
          className="column col-lg-6 col-md-6 col-sm-12"
          data-aos-delay="1500"
          data-aos="fade-right"
        >
          <figure className="image">
            <img src="/images/resource/banner-img-4.png" alt="resource" />
          </figure>
        </div>
        <div
          className="column col-lg-6 col-md-6 col-sm-12"
          data-aos-delay="2000"
          data-aos="fade-left"
        >
          <figure className="image">
            <img src="/images/resource/banner-img-5.png" alt="resource" />
          </figure>
          <figure className="image">
            <img src="/images/resource/banner-img-6.png" alt="resource" />
          </figure>
        </div>
      </div>

      {/* <!-- Info BLock One --> */}
      <div className="info_block" data-aos-delay="2500" data-aos="fade-in">
        <span className="icon flaticon-email-3"></span>
        <p>
          Work Inquiry From <br />
          Ali Tufan
        </p>
      </div>

      {/* <!-- Info BLock Two --> */}
      <div className="info_block_two" data-aos-delay="3000" data-aos="fade-in">
        <p>10k+ Candidates</p>
        <div className="image">
          <img src="/images/resource/multi-peoples.png" alt="resource" />
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
