import SearchForm from "../../common/job-search/SearchForm";
import PopularSearch from "../PopularSearch";
import Partner from "../../common/partner/Partner";

const index = () => {
  return (
    <section className="banner-section-seven">
      <div className="image-outer" data-aos="fade-in" data-aos-delay="300">
        <figure className="image">
          <img src="/images/resource/banner-img-8.png" alt="hero banner" />
        </figure>
      </div>
      {/* End image-outer */}

      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column">
              <div
                className="title-box"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h3>
                  There Are <span className="colored">93,178</span> <br />{" "}
                  Postings Here For you!
                </h3>
                <div className="text">
                  Find Jobs, Employment & Career Opportunities
                </div>
              </div>

              {/* <!-- Job Search Form --> */}
              <div
                className="job-search-form"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <SearchForm />
              </div>
              {/* <!-- Job Search Form --> */}

              {/* <!-- Popular Search --> */}
              <PopularSearch />
              {/* <!-- End Popular Search --> */}

              <div
                className="clients-section-two"
                data-aos="fade-up"
                data-aos-delay="1300"
              >
                <Partner />
              </div>

              {/* <!-- End Partner --> */}
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default index;
