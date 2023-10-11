import Link from "next/link";
import CopyrightFooter from "../footer/common-footer/CopyrightFooter";
import FooterApps2 from "../footer/FooterApps2";
import FooterContent3 from "../footer/FooterContent3";
import SearchForm2 from "../footer/SearchForm2";

const Footer = () => {
  return (
    <footer className="main-footer style-five">
      <div className="newsletter-form" data-aos="fade-up">
        <div className="sec-title text-center">
          <h2>Subscribe Our Newsletter</h2>
          <div className="text">We don’t send spam so don’t worry.</div>
        </div>
        <SearchForm2 />
      </div>
      {/* End .newsletter-form */}

      <div className="auto-container">
        <div className="widgets-section" data-aos="fade-up">
          <div className="row">
            <div className="big-column col-xl-3 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo.svg" alt="brand" />
                  </Link>
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
            {/* End footer address left widget */}

            <div className="big-column col-xl-9 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent3 />

                <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget">
                    <h4 className="widget-title">Mobile Apps</h4>
                    <FooterApps2 />
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
        {/* <!--Widgets Section--> */}
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
  );
};

export default Footer;
