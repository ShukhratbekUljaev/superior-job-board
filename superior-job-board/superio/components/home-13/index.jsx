import About9 from "../about/About9";
import AppSection3 from "../app-section/AppSection3";
import Block6 from "../block/Block6";
import RegBanner from "../block/RegBanner";
import LoginPopup from "../common/form/login/LoginPopup";
import Partner2 from "../common/partner/Partner2";
import FooterDefault from "../footer/common-footer";
import MobileMenu from "../header/MobileMenu";
import Hero13 from "../hero/hero-13";
import JobCategorie7 from "../job-categories/JobCategorie7";
import JobFeatured9 from "../job-featured/JobFeatured9";
import Pricing3 from "../pricing/Pricing3";
import TopCompany from "../top-company/TopCompany";
import Header from "./Header";

const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero13 />
      {/* End Hero Section */}

      <section className="layout-pt-120 layout-pb-60">
        <div className="auto-container">
          <div className="row justify-content-between align-items-end">
            <div className="col-lg-6">
              <div className="sect-title">
                <h2 className="fw-700">Jobs by category</h2>
                <div className="text mt-9">
                  2020 jobs live - 293 added today.
                </div>
              </div>
            </div>
            {/* End sectitle */}
            <div className="col-auto">
              <a href="#" className="button-icon -arrow text-dark-blue">
                Browse All
                <span className="fa fa-angle-right ms-1"></span>
              </a>
            </div>
          </div>
          {/* End .row */}

          <div className="row grid-flex pt-50" data-aos="fade-up">
            <JobCategorie7 />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* <!-- End Job Categories --> */}

      <section className="layout-pt-60 layout-pb-60">
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="sec-title text-center">
                <h2>How It Works?</h2>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row grid-base" data-aos="fade-up">
            <Block6 />
          </div>
        </div>
      </section>
      {/* <!-- End Work Section --> */}

      <About9 />
      {/* <!-- End About Section --> */}

      <section className="layout-pt-60 layout-pb-60">
        <div className="auto-container">
          <div className="featured-column">
            <div className="sec-title text-center">
              <h2 className="color-blue-dark fw-700">Latest Jobs</h2>
              <div className="text">
                Know your worth and find the job that qualify your life
              </div>
            </div>
            {/* End .sec-title */}
          </div>
          {/* End .featured-column */}

          <div
            className="outer-box job-block-five-separated"
            data-aos="fade-up"
          >
            <JobFeatured9 />
          </div>
          {/* End outer-box */}
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <section className="layout-pt-60 layout-pb-60">
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            <RegBanner />
          </div>
        </div>
      </section>
      {/* <!-- End Registeration Banners --> */}

      <section className="ayout-pt-60 layout-pb-60">
        <div className="auto-container">
          <div className="row justify-content-between align-items-end">
            <div className="col-lg-6">
              <div className="sec-title mb-0">
                <h2 className="color-blue-dark fw-700">
                  Top Company Registered
                </h2>
                <div className="text">
                  Some of the companies we have helped recruit excellent
                  applicants over the years.
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <a href="#" className="button -arrow text-dark-blue">
                Browse
                <span className="fa fa-angle-right ms-1"></span>
              </a>
            </div>
          </div>
          {/* End .row */}

          <div className="carousel-outer pt-50" data-aos="fade-up">
            <div className="companies-carousel">
              <TopCompany />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Top Companies --> */}

      <section className="layout-pt-60 layout-pb-120">
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="sec-title -type-2 text-center">
                <h2>Choose a plan that’s right for you.</h2>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row grid-base pricing3_hover" data-aos="fade-up">
            <Pricing3 />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* <!-- End Pricing Section --> */}

      <AppSection3 />
      {/* <!-- End App Section --> */}

      <section className="clients-section-two alternate layout-pt-120 layout-pb-60">
        <div className="auto-container">
          <div className="sponsors-outer wow fadeInUp">
            <div className="sponsors-carousel">
              <Partner2 />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Clients Section --> */}

      <FooterDefault footerStyle="-type-13 alternate3" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
