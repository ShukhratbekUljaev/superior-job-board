import CopyrightFooter from "../footer/common-footer/CopyrightFooter";
import FooterContent4 from "../footer/FooterContent4";

const Footer = () => {
  return (
    <footer className="main-footer style-six alternate -type-11">
      <div className="footer-bg-image">
        <img src="/images/index-11/footer/1.png" alt="image" />
      </div>
      {/* End footer-bg-image */}

      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="footer-title text-center">
              <h3>Got a question?</h3>
              <div>
                We are here to help. Check out our FAQs, send us an email or
                call us at 2 600 7777 9999
              </div>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End auto Container */}

      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="row">
            <div className="big-column col-xl-3 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <a href="#">
                    <img src="/images/logo-2.svg" alt="brand" />
                  </a>
                </div>
                <p className="phone-num">
                  <span>Call us </span>
                  <a href="thebeehost@support.com">123 456 7890</a>
                </p>
                <p className="address">
                  329 Queensberry Street, North Melbourne VIC
                  <br /> 3051, Australia. <br />
                  <a href="mailto:support@superio.com" className="email">
                    support@superio.com
                  </a>
                </p>
              </div>
            </div>
            {/* End footer left widget */}

            <div className="big-column col-xl-9 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent4 />
              </div>
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
  );
};

export default Footer;
