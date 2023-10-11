import Header from "./Header";
import Hero2 from "../hero/hero-2";
import Block1 from "../block/Block1";
import JobFeatured2 from "../job-featured/JobFeatured2";
import FeaturedBlock from "../block/FeaturedBlock";
import CallToAction2 from "../call-to-action/CallToAction2";
import Candidates from "../candidates/Candidates";
import Blog from "../blog/Blog";
import CallToAction3 from "../call-to-action/CallToAction3";
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

      <Hero2 />
      {/* <!-- End Hero Section --> */}

      <section className="work-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>How It Works?</h2>
            <div className="text">Job for anyone, anywhere</div>
          </div>
          {/* End sec-title */}

          <div className="row" data-aos="fade-up">
            <Block1 />
          </div>
        </div>
      </section>
      {/* <!-- End Work Section --> */}

      <section className="job-section-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Featured Jobs</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>

          <div className="row" data-aos="fade-up">
            <JobFeatured2 />
          </div>

          <div className="btn-box">
            <Link
              href="/job-list/job-list-v2"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Load More Listing</span>
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <section className="features-section">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Featured Cities</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>

          <div className="row" data-aos="fade-up">
            <FeaturedBlock />
          </div>
        </div>
      </section>
      {/* <!-- End Features Section --> */}

      <CallToAction2 />
      {/* <!-- End Call To Action --> */}

      <section className="candidates-section">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Featured Candidates</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>

          <div className="carousel-outer" data-aos="fade-up">
            <div className="candidates-carousel default-dots">
              <Candidates />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Candidates Section --> */}

      <section className="news-section-two">
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

      <CallToAction3 />
      {/* <!-- End Call To Action --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
