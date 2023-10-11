import Header from "./Header";
import Footer from "./Footer";
import Hero10 from "../hero/hero-10";
import JobFeatured7 from "../job-featured/JobFeatured7";
import RecentJobs from "../job-featured/RecentJobs";
import BrowseUsaJobs from "../job-categories/BrowseUsaJobs";
import Blog3 from "../blog/Blog3";
import Candidates from "../candidates/Candidates";
import TopsJobs from "../job-featured/TopsJobs";
import FunFact from "../fun-fact-counter/Funfact";
import Testimonial5 from "../testimonial/Testimonial5";
import RegBanner2 from "../block/RegBanner2";
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

      <Hero10 />
      {/* <!-- End Banner Section--> */}

      <section className="registeration-banners">
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            <RegBanner2 />
          </div>
        </div>
      </section>
      {/* <!-- End Registeration Banners --> */}

      <section className="job-section-five style-two">
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            <div className="featured-column col-xl-9 col-lg-12 col-md-12 col-sm-12">
              <div className="sec-title">
                <h2>Featured Jobs</h2>
                <div className="text">
                  Know your worth and find the job that qualify your life
                </div>
              </div>
              {/* En .sect-title */}

              <div className="outer-box">
                <JobFeatured7 />
              </div>
              {/* En outer box */}
            </div>
            {/* End .featured-column */}

            <div className="recent-column col-xl-3 col-lg-12 col-md-12 col-sm-12">
              <div className="sec-title">
                <h2>Recent Jobs</h2>
                <div className="text">Know your worth and find the job</div>
              </div>
              {/* En .sect-title */}

              <RecentJobs />
            </div>
            {/* End .recent-column */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <section
        className="testimonial-section-four"
        style={{ backgroundImage: "url(/images/background/11.png)" }}
      >
        <div className="container-fluid">
          {/* <!-- Sec Title --> */}
          <div className="sec-title text-center light">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
          {/* End sec-title */}

          <div className="carousel-outer" data-aos="fade-up">
            <div className="testimonial-carousel">
              <Testimonial5 />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Section --> */}

      <div className="fun-fact-section">
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            <FunFact />
          </div>
        </div>
      </div>
      {/* <!-- Fun Fact Section --> */}

      <section className="job-section-six">
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            {/* <!-- Image Column --> */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <figure className="image">
                <img src="/images/resource/image-5.png" alt="resource" />
              </figure>
            </div>

            {/* <!-- content Column --> */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>Top Jobs For You</h2>
                  <div className="text">
                    Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt. Labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation.
                  </div>
                </div>
                {/* End .sec-title */}
                <TopsJobs />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <section className="candidates-section alternate">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Featured Candidates</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
          {/* End .sec-title */}

          <div className="carousel-outer" data-aos="fade-up">
            <div className="candidates-carousel home10">
              <Candidates />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Candidates Section --> */}

      <section className="news-section style-three">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
            <div className="text">
              Fresh job related news content posted each day.
            </div>
          </div>
          {/* End .sec-title */}

          <div className="row" data-aos="fade-up">
            <Blog3 />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}

      <section className="browse-jobs">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Browse USA Jobs</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
          {/* End sec-title */}

          <div className="row" data-aos="fade-up">
            <BrowseUsaJobs />
          </div>
        </div>
        {/* End auto-container */}
      </section>
      {/* <!-- End Browse Jobs --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
