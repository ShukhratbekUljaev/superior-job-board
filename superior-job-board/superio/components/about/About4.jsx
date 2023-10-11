import { useState } from "react";
import ModalVideo from "react-modal-video";

const About4 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="y9j-BL5ocW8"
        onClose={() => setOpen(false)}
      />
      {/* End popup modal video */}

      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
        <div className="inner-column" data-aos="fade-left">
          <div className="sec-title">
            <h2>Millions of Jobs. Find the one that suits you.</h2>
            <div className="text">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 600,000
              companies worldwide.
            </div>
          </div>
          <ul className="list-style-two">
            <li>Creative Study Pattern</li>
            <li>Quick Crash Courses</li>
            <li>Certification Awarded</li>
            <li>Provided with Experimental Examples</li>
          </ul>
          <div
            role="button"
            onClick={() => setOpen(true)}
            className="theme-btn btn-style-one lightbox-image"
          >
            <span className="btn-title">Watch Video</span>
          </div>
        </div>
      </div>
      {/* End .col about left content */}

      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <figure className="image" data-aos="fade-right">
          <img src="/images/resource/image-5.png" alt="popup icon" />
          <div
            className="play-btn lightbox-image"
            role="button"
            onClick={() => setOpen(true)}
          >
            <span className="flaticon-play-button-2 icon"></span>
          </div>
        </figure>
      </div>
      {/* <!-- Image Column --> */}
    </>
  );
};

export default About4;
