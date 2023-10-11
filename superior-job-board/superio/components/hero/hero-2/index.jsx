import Link from "next/link";
import SearchForm from "../../common/job-search/SearchForm";
import PopularSearch from "../PopularSearch";
import ImageBox from "./ImageBox";

const index = () => {
  return (
    <section className="banner-section-two">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInUp" data-aos="fade-up">
              <div className="title-box">
                <h3>
                  Find Your Perfect Job <br />
                  Match
                </h3>
                <div className="text">
                  Find Jobs, Employment & Career Opportunities
                </div>
              </div>

              {/* <!-- Job Search Form --> */}
              <div className="job-search-form">
                <SearchForm />
              </div>
              {/* <!-- Job Search Form --> */}

              {/* <!-- Popular Search --> */}
              <PopularSearch />
              {/* <!-- End Popular Search --> */}

              <div className="bottom-box">
                <div className="count-employers">
                  <span className="title">10k+ Candidates</span>
                  <img src="/images/resource/multi-peoples.png" alt="" />
                </div>
                <Link
                  href="/candidates-dashboard/cv-manager"
                  className="upload-cv"
                >
                  <span className="icon flaticon-file"></span> Upload your CV
                </Link>
              </div>
            </div>
          </div>
          {/* End content-column */}

          <div className="image-column col-lg-5 col-md-12">
            <ImageBox />
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End auto-container */}
    </section>
  );
};

export default index;
