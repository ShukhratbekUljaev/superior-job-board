import About4 from "../about/About4";
import AddBlock from "../block/AddBlock";
import Candidates2 from "../candidates/Candidates2";
import FooterDefault from "../footer/common-footer";
import Funfact from "../fun-fact-counter/Funfact";
import JobCategorie1 from "../job-categories/JobCategorie1";
import Filter from "../job-featured/filter-dropdown/Filter";
import JobFeatured12 from "../job-featured/JobFeatured12";
import JobFeatured1 from "../job-featured/JobFeatured1";
import Testimonial2 from "../testimonial/Testimonial2";
import TopCompany2 from "../top-company/TopCompany2";
import Header from "./Header";
import Hero7 from "../hero/hero-7";
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

      <Hero7 />
      {/* End Hero Section */}

      <section className="job-section">
        <div className="auto-container">
          <div className="sec-title-outer">
            <div className="sec-title">
              <h2>Featured Jobs</h2>
              <div className="text">
                Know your worth and find the job that qualify your life
              </div>
            </div>

            <div className="select-box-outer">
              <span className="icon fa fa-angle-down"></span>
              <Filter />
            </div>
          </div>
          {/* End sec-title-outer */}

          <div className="row " data-aos="fade-up">
            <JobFeatured1 />
          </div>

          <div className="btn-box">
            <Link
              href="/job-list/job-list-v5"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Load More Listing</span>
            </Link>
          </div>
        </div>
      </section>
      {/* End Job Featured Section */}

      <section className="about-section style-two">
        <div className="auto-container">
          <div className="row">
            <About4 />
          </div>

          {/* <!-- Fun Fact Section --> */}
          <div className="fun-fact-section">
            <div className="row">
              <Funfact />
            </div>
          </div>
          {/* <!-- Fun Fact Section --> */}
        </div>
      </section>
      {/* <!-- End About Section --> */}

      <section className="top-companies">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Top Company Registered</h2>
            <div className="text">
              Some of the companies we have helped recruit excellent applicants
              over the years.
            </div>
          </div>

          <div className="carousel-outer" data-aos="fade-up">
            <div className="companies-carousel">
              <TopCompany2 />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Top Companies --> */}

      <section className="testimonial-section-two style-two">
        <div className="container-fluid">
          <div className="testimonial-left">
            <img src="/images/resource/testimonial-left.png" alt="testimonial" />
          </div>
          {/* End left img group */}

          <div className="testimonial-right">
            <img
              src="/images/resource/testimonial-right.png"
              alt="testimonial"
            />
          </div>
          {/* End right img group */}

          <div className="sec-title text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
          {/* <!-- Sec Title --> */}

          <div className="carousel-outer" data-aos="fade-up">
            <div className="testimonial-carousel">
              <Testimonial2 />
            </div>
            {/* <!-- Testimonial Carousel --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Section --> */}

      <section className="job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Popular Job Categories</h2>
            <div className="text">2020 jobs live - 293 added today.</div>
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <!-- Category Block --> */}
            <JobCategorie1 />
          </div>
        </div>
      </section>
      {/* End Job Categorie Section */}

      <section className="job-section style-two">
        <div className="auto-container wow fadeInUp">
          <div className="sec-title text-center">
            <h2>Recent Jobs</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>
          <div className="job-carousel gap-x25">
            <JobFeatured12 />
          </div>
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <section className="candidates-section-two">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Featured Candidates</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>

          <div className="row" data-aos="fade-up">
            <Candidates2 />
          </div>
        </div>
      </section>
      {/* <!-- End Candidates Section --> */}

      <section className="ads-section">
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            <AddBlock />
            {/* <!-- Ads Block --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Ads Section --> */}

      <FooterDefault footerStyle="alternate3" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
