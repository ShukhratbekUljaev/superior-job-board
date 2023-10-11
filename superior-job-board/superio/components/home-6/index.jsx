import Subscribe from "../call-to-action/subcribe-box/Subscribe";
import Header from "./Header";
import Candidates from "../candidates/Candidates";
import Blog2 from "../blog/Blog2";
import Partner from "../common/partner/Partner";
import Testimonia4 from "../testimonial/Testimonial4";
import CallToAction5 from "../call-to-action/CallToAction5";
import JobFeatured5 from "../job-featured/JobFeatured5";
import JobCategorie3 from "../job-categories/JobCategorie3";
import Hero6 from "../hero/hero-6";
import CopyrightFooter2 from "../footer/CopyrightFooter2";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";

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

      <Hero6 />

      <section className="job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Popular Job Categories</h2>
            <div className="text">2020 jobs live - 293 added today.</div>
          </div>
          {/* End sec-title */}
          <div className="row" data-aos="fade-up">
            <JobCategorie3 />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* <!-- End Job Categories --> */}

      <section className="job-section-five">
        <div className="auto-container">
          <div className="sec-title-outer">
            <div className="sec-title">
              <h2>Featured Jobs</h2>
              <div className="text">
                Know your worth and find the job that qualify your life
              </div>
            </div>
            <a href="#" className="link">
              Browse All <span className="icon fa fa-angle-right"></span>
            </a>
          </div>

          <div className="outer-box" data-aos="fade-up">
            <JobFeatured5 />
          </div>
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <CallToAction5 />
      {/* <!--Call To Action --> */}

      <section className="testimonial-section style-two">
        <div className="auto-container">
          {/* <!-- Sec Title --> */}
          <div className="sec-title text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>

          <div className="carousel-outer" data-aos="fade-up">
            {/* <!-- Testimonial Carousel --> */}
            <div className="testimonial-carousel-three gap-x25">
              <Testimonia4 />
            </div>
          </div>
          {/* End .carousel-outer */}
        </div>
        {/* End auto-container */}
      </section>
      {/* <!-- End Testimonial Section --> */}

      <section className="clients-section alternate2">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>
      {/* <!-- End Clients Section--> */}

      <section className="news-section style_2">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
            <div className="text">
              Fresh job related news content posted each day.
            </div>
          </div>
          {/* End ."sec-title */}
          <div className="row" data-aos="fade-up">
            <Blog2 />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}

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

      <section className="subscribe-section-two">
        <div
          className="background-image"
          style={{ backgroundImage: "url(/images/background/5.png)" }}
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

      <footer className="main-footer alternate4">
        <CopyrightFooter2 />
      </footer>
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
