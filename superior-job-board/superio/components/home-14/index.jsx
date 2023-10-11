import Header from "./Header";
import Hero14 from "../hero/hero-14";
import Footer from "./Footer";
import FeaturedBlock2 from "../block/FeaturedBlock2";
import JobCategorie8 from "../job-categories/JobCategorie8";
import About10 from "../about/About10";
import About11 from "../about/about-11";
import Testimonial from "../testimonial/Testimonial";
import Funfact from "../fun-fact-counter/Funfact";
import About12 from "../about/About12";
import CallToAction8 from "../call-to-action/CallToAction8";
import Blog5 from "../blog/Blog5";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";
import Link from "next/link";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero14 />
      {/* End Hero Section */}

      <section className="features__section">
        <div className="auto-container">
          <div className="row features__grid justify-content-between">
            <FeaturedBlock2 />
          </div>
        </div>
      </section>
      {/* <!-- End Features Section--> */}

      <section className="layout-pt-120 layout-pb-120 border-bottom-none">
        <div className="auto-container">
          <div className="row grid-base justify-content-between align-items-end">
            <div className="col-lg-6">
              <div className="sec-title mb-0">
                <h2>Explore Popular job</h2>
                <div className="text">2020 jobs live - 293 added today.</div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-auto">
              <Link href="/job-list/job-list-v9" className="button -arrow">
                Browse
                <span className="fa fa-angle-right"></span>
              </Link>
            </div>
          </div>
          {/* End .row */}

          <div className="row grid-base pt-50" data-aos="fade-up">
            <JobCategorie8 />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* <!-- End Job Categories --> */}

      <About10 />
      {/* <!-- End About Section --> */}

      <About11 />
      {/* <!-- End About Section --> */}

      <section className="testimonial-section -light-yellow">
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

      <section className="border-bottom layout-pb-60">
        <div className="auto-container">
          <div
            className="fun-fact-section layout-pt-60 pb-0"
            data-aos="fade-in"
          >
            <div className="row grid-base border-none">
              <Funfact />
            </div>
          </div>
          {/* <!-- Fun Fact Section --> */}
        </div>
      </section>
      {/* End funfact */}

      <About12 />
      {/* <!-- End About Section --> */}

      <section className="layout-pt-60 layout-pb-120 border-bottom-none">
        <div className="auto-container">
          <div className="row grid-base justify-content-between align-items-end">
            <div className="col-lg-6">
              <div className="sec-title mb-0">
                <h2>Latest News</h2>
                <div className="text">Lorem ipsum dolor sit amet elit</div>
              </div>
            </div>
            {/* End  .col*/}
            <div className="col-auto">
              <Link href="/blog-list-v1" className="button -arrow">
                Browse
                <span className="fa fa-angle-right"></span>
              </Link>
            </div>
          </div>
          {/* End .row */}

          <div className="row grid-base pt-50" data-aos="fade-up">
            <Blog5 />
          </div>
        </div>
      </section>
      {/* <!-- End Job Categories --> */}

      <CallToAction8 />
      {/* <!-- End Subscribe Section --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
