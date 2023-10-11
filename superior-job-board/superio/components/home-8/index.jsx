import Link from "next/link";
import Block3 from "../block/Block3";
import Block4 from "../block/Block4";
import FeaturedBlock from "../block/FeaturedBlock";
import Blog from "../blog/Blog";
import LoginPopup from "../common/form/login/LoginPopup";
import Partner from "../common/partner/Partner";
import MobileMenu from "../header/MobileMenu";
import Hero8 from "../hero/hero-8";
import JobFeatured6 from "../job-featured/JobFeatured6";
import TopCompany3 from "../top-company/TopCompany3";
import Footer from "./Footer";
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

      <Hero8 />
      {/* End Hero Section */}

      <section className="clients-section-two alternate">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Top Companies Hiring at Superio Now</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
          {/* End .sec-title */}

          <div className="sponsors-outer" data-aos="fade">
            {/* <!--Sponsors Carousel--> */}
            <ul className="sponsors-carousel">
              <Partner />
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- End Clients Section--> */}

      <Block3 />
      {/* <!-- End Recruiter Section --> */}

      <section className="job-section-four alternate">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Featured Jobs</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>
          {/* End .sec-title */}

          <div className="row" data-aos="fade-up">
            <JobFeatured6 />
          </div>
          {/* End .row */}

          <div className="btn-box">
            <Link href="/job-list/job-list-v8" className="theme-btn btn-style-one">
              Load More Listing
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <Block4 />
      {/* <!-- End Jobseeker Section --> */}

      <section className="top-companies">
        <div className="auto-container">
          <div className="sec-title-outer">
            <div className="sec-title">
              <h2>Top Company Registered</h2>
              <div className="text">
                Some of the companies we have helped recruit excellent
                applicants over the years.
              </div>
            </div>
            <a href="#" className="link">
              Browse All <span className="fa fa-angle-right"></span>
            </a>
          </div>
          {/* End .sec-title-outer */}

          <div className="carousel-outer" data-aos="fade-up">
            <div className="row">
              <TopCompany3 />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Top Companies --> */}

      <section className="features-section pt-0">
        <div className="auto-container">
          <div className="sec-title-outer">
            <div className="sec-title">
              <h2>Featured Cities</h2>
              <div className="text">
                Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
              </div>
            </div>
            <a href="#" className="link">
              Browse All Locations <span className="fa fa-angle-right"></span>
            </a>
          </div>
          {/* End .sec-title-outer */}

          <div className="row" data-aos="fade-up">
            <FeaturedBlock />
          </div>
        </div>
      </section>
      {/* <!-- End Features Section --> */}

      <section className="news-section style-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
            <div className="text">
              Fresh job related news content posted each day.
            </div>
          </div>
          {/* End ."sec-title */}
          <div className="row" data-aos="fade-up">
            <Blog />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
