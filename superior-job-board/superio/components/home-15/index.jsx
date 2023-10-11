import Hero15 from "../hero/hero-15";
import Header from "./Header";
import Block7 from "../block/Block7";
import JobFeatured10 from "../job-featured/JobFeatured10";
import CallToAction9 from "../call-to-action/CallToAction9";
import TopCompany from "../top-company/TopCompany";
import FeaturedBlock3 from "../block/FeaturedBlock3";
import Testimonial6 from "../testimonial/Testimonial6";
import Subscribe2 from "../call-to-action/subcribe-box/Subscribe2";
import AppSection4 from "../app-section/AppSection4";
import Footer from "./Footer";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";
import Link from "next/link";

const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero15 />
      {/* End Hero Section */}

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
            <Block7 />
          </div>
        </div>
      </section>
      {/* <!-- End Work Section --> */}

      <section className="layout-pt-60 layout-pb-120">
        <div className="auto-container">
          <div className="sec-title text-center mb-0">
            <h2>Jobs of the day</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>
          {/* End sec-title */}
          <JobFeatured10 />
        </div>
      </section>
      {/* End Job Featured Section */}

      <CallToAction9 />
      {/* <!-- End Call To Action --> */}

      <section className="layout-pt-120 layout-pb-60">
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
              <Link
                href="/employers-list/candidates-list-v3"
                className="button -arrow text-dark-blue"
              >
                Browse
                <span className="fa fa-angle-right ms-1"></span>
              </Link>
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

      <section className="layout-pt-60 layout-pb-60">
        <div className="auto-container">
          <div className="sec-title-outer">
            <div className="sec-title">
              <h2>Featured Cities</h2>
              <div className="text">
                Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
              </div>
            </div>
            {/* End sec-title */}
            <Link href="/job-list/job-list-v13" className="link text-green">
              Browse All Locations <span className="fa fa-angle-right"></span>
            </Link>
          </div>
          {/* End .sec-title-outer */}

          <div className="row" data-aos="fade-up">
            <FeaturedBlock3 />
          </div>
          {/* End .row */}
        </div>
        {/* End auto-container */}
      </section>
      {/* <!-- End Features Section --> */}

      <section className="layout-pt-60 layout-pb-120">
        <div className="auto-container">
          <div className="row justify-content-center text-center">
            <div className="col-auto">
              <div className="">
                <h2 className="fw-700">What people are saying</h2>
                <div className="text mt-9">
                  Consectetur adipisicing elit, sed do eiusmod temp
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="job-carousel pt-50" data-aos="fade-up">
            <Testimonial6 />
          </div>
          {/* End .job-carousel pt-50 */}
        </div>
      </section>
      {/* <!-- End Testimonials Section --> */}

      <Subscribe2 />
      {/* <!-- End Subscribe Section --> */}

      <AppSection4 />
      {/* <!-- End App Section --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
