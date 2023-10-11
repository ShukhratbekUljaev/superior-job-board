import CallToAction10 from "../call-to-action/CallToAction10";
import Hero16 from "../hero/hero-16";
import JobFeatured11 from "../job-featured/JobFeatured11";
import Footer from "./Footer";
import Header from "./Header";
import Block8 from "../block/Block8";
import Candidates from "../candidates/Candidates";
import Testimonial from "../testimonial/Testimonial";
import LoginRegBanner from "../block/LoginRegBanner";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";

const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero16 />
      {/* End Hero Section */}

      <section className="layout-pt-120 layout-pb-120">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recommended Jobs</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>
          {/* End sec-title */}

          <div className="tabs-box">
            <JobFeatured11 />
          </div>
        </div>
        {/* End auto-container */}
      </section>
      {/* <!-- End Job Section --> */}

      <CallToAction10 />
      {/*   <!-- End Call To Action --> */}

      <section className="layout-pt-120 layout-pb-120">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>How It Works</h2>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </div>
          </div>
          {/* End sec-title */}

          <div className="row grid-base pt-50" data-aos="fade-up">
            <Block8 />
            {/* <!-- Work Block --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Work Section --> */}

      <section className="layout-pt-120 layout-pb-120 section-bg-color">
        <div className="section-bg-color__item -full -very-light-blue"></div>

        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Featured Candidates</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
          {/* End sec-title */}

          <div className="carousel-outer" data-aos="fade-up">
            <div className="candidates-carousel default-dots">
              <Candidates />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Candidates Section --> */}

      <section className="testimonial-section -type-2 layout-pt-120 layout-pb-120">
        <div className="container-fluid">
          {/* <!-- Sec Title --> */}
          <div className="sec-title text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
        </div>
        <div className="carousel-outer" data-aos="fade-up">
          {/* <!-- Testimonial Carousel --> */}
          <div className="testimonial-carousel gap-x25 center-item-active slick-list-visible">
            <Testimonial />
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Section --> */}

      <LoginRegBanner />
      {/* <!-- End Login/Register Block --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
