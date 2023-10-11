import Hero17 from "../hero/hero-17";
import Footer from "./Footer";
import Header from "./Header";
import Partner2 from "../common/partner/Partner2";
import JobCategorie6 from "../job-categories/JobCategorie6";
import About6 from "../about/About6";
import About7 from "../about/About7";
import About8 from "../about/About8";
import JobFeatured8 from "../job-featured/JobFeatured8";
import Blog4 from "../../components/blog/Blog4";
import CallToAction11 from "../call-to-action/CallToAction11";
import Pricing3 from "../pricing/Pricing3";
import Funfact from "../fun-fact-counter/Funfact";
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

      <Hero17 />
      {/* End Hero Section */}

      <section className="clients-section-two layout-pt-40 layout-pb-60">
        <div className="auto-container">
          <div className="sponsors-outer wow fadeInUp">
            <div className="sponsors-carousel">
              <Partner2 />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Clients Section--> */}

      <section className="layout-pt-60 layout-pb-60 border-bottom-none">
        <div className="auto-container">
          <div className="row justify-content-between align-items-end ">
            <div className="col-lg-6">
              <div className="">
                <h2 className="fw-700">Popular Job Categories</h2>
                <div className="text mt-9">
                  2020 jobs live - 293 added today.
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-auto md:mt-16">
              <Link href="/job-list/job-list-v6" className="button-icon -arrow">
                Browse All
                <span className="fa fa-angle-right ms-1"></span>
              </Link>
            </div>
          </div>
          {/* End .row */}

          <div className="row mt-50" data-aos="fade-up">
            <JobCategorie6 />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* <!-- End Job Categories --> */}

      <About6 />
      {/* <!-- End About Section -->  */}

      <About7 />
      {/* <!-- End About Section -->  */}

      <About8 />
      {/* <!-- End About Section -->  */}

      <section className="job-section-four section-bg-color -image">
        <div
          className="section-bg-color__item -image md:d-none"
          style={{ backgroundImage: "url(/images/index-17/jobs/bg.png)" }}
        ></div>

        <div className="auto-container">
          <div className="row justify-content-between align-items-end position-relative">
            <div className="col-lg-6">
              <h2 className="fw-700">Featured Jobs</h2>
              <div className="text mt-9">
                Know your worth and find the job that qualify your life
              </div>
            </div>
            {/* End .col */}
            <div className="col-auto">
              <Link href="/job-list/job-list-v9" className="button-icon -arrow">
                Featured
                <span className="fa fa-angle-right ms-1"></span>
              </Link>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}

          <div className="row mt-50" data-aos="fade-up">
            <JobFeatured8 />
          </div>
          {/* End .row */}
        </div>
        {/* End auto-container */}
      </section>
      {/* <!-- End Job Section --> */}

      <section className="layout-pb-60">
        <div className="auto-container">
          {/* <!-- Fun Fact Section --> */}
          <div className="fun-fact-section layout-pt-60 md:pt-0 pb-0 wow fadeInUp">
            <div className="row grid-base">
              <Funfact />
            </div>
          </div>
          {/* <!-- Fun Fact Section --> */}
        </div>
      </section>
      {/* <!-- End Section --> */}

      <section className="layout-pt-60 layout-pb-60">
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

      <section className="layout-pt-60 layout-pb-60">
        <div className="auto-container">
          <div className="row justify-content-between align-items-end">
            <div className="col-lg-6">
              <div className="">
                <h2 className="fw-700">Latest news</h2>
                <div className="text mt-9">
                  Consectetur adipisicing elit, sed do eiusmod temp
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link href="/blog-list-v3" className="button-icon -arrow">
                Browse All
                <span className="fa fa-angle-right ms-1"></span>
              </Link>
            </div>
          </div>
          {/* End .col */}

          <div className="row grid-base pt-50" data-aos="fade-up">
            <Blog4 />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}

      <CallToAction11 />
      {/* <!-- End CallToAction Section --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
