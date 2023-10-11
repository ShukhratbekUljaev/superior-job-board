import TopCompany from "../top-company/TopCompany";
import About3 from "../about/About3";
import Blog from "../blog/Blog";
import CallToAction4 from "../call-to-action/CallToAction4";
import Partner from "../common/partner/Partner";
import Hero5 from "../hero/hero-5";
import JobCategorie1 from "../job-categories/JobCategorie1";
import JobFeatured4 from "../job-featured/JobFeatured4";
import Testimonial3 from "../testimonial/Testimonial3";
import Footer from "./Footer";
import Header from "./Header";
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

      <Hero5 />
      {/* End Hero Section */}

      <section className="job-section-four">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Featured Jobs</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>
          {/* End .sec-title */}

          <div className="row">
            <JobFeatured4 />
          </div>
          {/* End .row */}

          <div className="btn-box">
            <Link href="/job-list/job-list-v7" className="theme-btn btn-style-seven">
              Load More Listing
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <section className="job-categories style-two">
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

      <section className="about-section-two style-two">
        <div className="auto-container">
          <div className="row">
            <About3 />
          </div>
        </div>
      </section>
      {/* <!-- End About Section --> */}

      <section className="news-section-two style-two">
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

      <section className="testimonial-section-three">
        <div className="auto-container">
          {/* <!-- Sec Title --> */}
          <div className="sec-title text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
          {/* End sec-title */}

          <div className="carousel-outer" data-aos="fade-up">
            {/* <!-- Testimonial Carousel --> */}
            <div className="testimonial-carousel">
              <Testimonial3 />
            </div>
          </div>
        </div>
        {/* End auto-container */}
      </section>
      {/* <!-- End Testimonial Section --> */}

      <section className="clients-section-two alternate">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>
      {/* <!-- End Clients Section--> */}

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
              <TopCompany />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Top Companies --> */}

      <CallToAction4 />
      {/* <!-- End Call To Action --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
