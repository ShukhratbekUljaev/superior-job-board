import Header from "./Header";
import Hero12 from "../hero/hero-12";
import Footer from "./Footer";
import Subscribe from "../call-to-action/subcribe-box/Subscribe";
import Blog4 from "../../components/blog/Blog4";
import Testimonial6 from "../testimonial/Testimonial6";
import Candidates3 from "../candidates/Candidates3";
import Block9 from "../block/Block9";
import JobFeatured8 from "../job-featured/JobFeatured8";
import About6 from "../about/About6";
import About7 from "../about/About7";
import About8 from "../about/About8";
import JobCategorie6 from "../job-categories/JobCategorie6";
import Partner2 from "../common/partner/Partner2";
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

      <Hero12 />
      {/* End Hero Section */}

      <section className="clients-section-two alternate layout-pt-40">
        <div className="auto-container">
          <div className="sponsors-outer" data-aos="fade-up">
            <ul className="sponsors-carousel">
              <Partner2 />
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- End Clients Section --> */}

      <section className="job-categories layout-pt-60 layout-pb-60 border-bottom-none">
        <div className="auto-container">
          <div className="row justify-content-between align-items-end">
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

      <section className="job-section-four layout-pt-120 layout-pb-120 section-bg-color">
        <div className="section-bg-color__item"></div>

        <div className="auto-container position-relative">
          <div className="row justify-content-between align-items-end">
            <div className="col-lg-6">
              <h2 className="fw-700">Featured Jobs</h2>
              <div className="text mt-9">
                Know your worth and find the job that qualify your life
              </div>
            </div>
            {/* End .col */}
            <div className="col-auto">
              <Link href="/job-list/job-list-v6" className="button-icon -arrow">
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

      <section className="layout-pt-120 layout-pb-60 testimonial-section style-two">
        <div className="auto-container">
          {/* <!-- Sec Title --> */}
          <div className="sec-title text-center">
            <h2 className="fw-700">Few Simple Steps for Successful Business</h2>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor
            </div>
          </div>

          <div className="row grid-base">
            <Block9 />
          </div>
        </div>
      </section>
      {/* <!-- End Business Block --> */}

      <section className="layout-pt-60 layout-pb-120">
        <div className="auto-container">
          <div className="row justify-content-between align-items-end">
            <div className="col-lg-6">
              <h2 className="fw-700">Featured Candidates</h2>
              <div className="text mt-9">
                Consectetur adipisicing elit, sed do eiusmod temp
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link href="/candidates-list/candidates-list-v3" className="button-icon -arrow">
                Browse All
                <span className="fa fa-angle-right ms-1"></span>
              </Link>
            </div>
            {/* End .col-auto */}
          </div>
          {/* End .row */}

          <div className="row grid-base pt-50" data-aos="fade-up">
            <Candidates3 />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* <!-- End Featured Canditates --> */}

      <section className="layout-pt-120 layout-pb-120 section-bg-color -light">
        <div className="section-bg-color__item -light"></div>

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

      <section className="layout-pt-120 layout-pb-120">
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
              <a href="#" className="button-icon -arrow">
                Browse All
                <span className="fa fa-angle-right ms-1"></span>
              </a>
            </div>
          </div>
          {/* End .col */}

          <div className="row grid-base pt-50" data-aos="fade-up">
            <Blog4 />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}

      <section className="subscribe-section-two -type-2">
        <div
          className="background-image"
          style={{ backgroundImage: "url(/images/index-12/subs/bg.png)" }}
        ></div>
        <div className="auto-container wow fadeInUp">
          <div className="sec-title text-center light">
            <h2>Subscribe Our Newsletter</h2>
            <div className="text">
              Advertise your jobs to millions of monthly users and search 15.8
              million
              <br /> CVs in our database.
            </div>
          </div>

          <div className="subscribe-form">
            <Subscribe btnStyle="btn-style-one" />
          </div>
        </div>
      </section>
      {/* <!-- End Subscribe Section --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
