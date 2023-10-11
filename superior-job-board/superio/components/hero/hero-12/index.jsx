import PopularSearch from "../PopularSearch";
import SearchForm2 from "../../common/job-search/SearchForm2";

const index = () => {
  return (
    <section className="banner-section-three -type-12">
      <div className="bg-image">
        <img src="/images/index-12/header/bg.png" alt="image" />
        <figure
          className="main-image"
          data-aos-delay="1500"
          data-aos="fade-left"
        >
          <img src="/images/index-12/header/image.png" alt="index" />
        </figure>
      </div>
      {/* End bg-image */}

      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="title-box" data-aos="fade-up">
                <h3>
                  Join us & Explore
                  <br /> Thousands of Jobs
                </h3>
                <div className="text">
                  Find Jobs, Employment & Career Opportunities
                </div>
              </div>

              {/* <!-- Job Search Form --> */}
              <div
                className="job-search-form-two"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <SearchForm2 />
              </div>
              {/* <!-- Job Search Form --> */}

              {/* <!-- Popular Search --> */}
              <PopularSearch />
              {/* <!-- End Popular Search --> */}
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default index;
