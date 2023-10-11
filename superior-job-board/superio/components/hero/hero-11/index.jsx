import SearchForm from "../../common/job-search/SearchForm";
import ImageBox from "./ImageBox";
import PopularSearch from "../PopularSearch";

const index = () => {
  return (
    <section className="banner-section -type-11">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div
              className="inner-column"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div
                className="title-box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>There Are 93,178 Postings Here For you!</h3>
                <div className="text">
                  Find Jobs, Employment & Career Opportunities
                </div>
              </div>

              {/* <!-- Job Search Form --> */}
              <div
                className="job-search-form"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <SearchForm />
              </div>
              {/* <!-- Job Search Form --> */}

              {/* <!-- Popular Search --> */}
              <PopularSearch />
              {/* <!-- End Popular Search --> */}
            </div>
          </div>
          {/* End .col */}

          <div className="image-column col-xl-5 col-lg-4 col-md-12">
            <ImageBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
