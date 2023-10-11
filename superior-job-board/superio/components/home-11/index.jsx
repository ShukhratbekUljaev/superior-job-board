import Header from "./Header";
import Hero11 from "../hero/hero-11";
import Footer from "./Footer";
import JobCategorie5 from "../job-categories/JobCategorie5";
import StepsBlock from "../block/StepsBlock";
import About5 from "../about/About5";
import JobFilterTab2 from "../job-featured/JobFilterTab2";
import AppSection2 from "../app-section/AppSection2";
import Pricing2 from "../pricing/Pricing2";
import Partner2 from "../common/partner/Partner2";
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

      <Hero11 />
      {/* <!-- End Hero Section --> */}

      <section className="layout-pt-120 layout-pb-60 border-bottom-none">
        <div className="bg-shape -bottom -right js-rellax">
          <img src="/images/index-11/shapes/1.png" alt="image" />
        </div>
        {/* End bg-shape */}

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
            <JobCategorie5 />
          </div>
        </div>
      </section>
      {/* End Job Categorie Section */}

      <StepsBlock />
      {/* <!-- End Steps Section --> */}

      <About5 />
      {/* <!-- End About Section --> */}

      <section className="job-section bg-light-blue layout-pt-120 layout-pb-120">
        <div className="bg-shape -top -left js-rellax">
          <img src="/images/index-11/shapes/2.png" alt="image" />
        </div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Featured Jobs</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>
          {/* End .sec-title */}

          <div className="row" data-aos="fade-up">
            <JobFilterTab2 />
          </div>
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <AppSection2 />
      {/* <!-- End App Section --> */}

      <section className="pricing-section pb-0">
        <div className="auto-container">
          <div className="sec-title -type-2 text-center">
            <h2>Pricing Packages</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor.
            </div>
          </div>

          <div className="row grid-base" data-aos="fade-up">
            <Pricing2 />
          </div>
        </div>
      </section>
      {/* <!-- End Pricing Section --> */}

      <section className="clients-section-two alternate layout-pt-40">
        <div className="auto-container">
          <div className="sponsors-outer wow fadeInUp">
            {/* <!--Sponsors Carousel--> */}
            <ul className="sponsors-carousel">
              <Partner2 />
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- End Clients Section --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
