import Link from "next/link";
import SearchForm3 from "../../common/job-search/SearchForm3";

const index = () => {
  return (
    <section className="banner-section-eight">
      <div className="image-outer">
        <figure className="image">
          <img src="/images/resource/banner-img-9.png" alt="banner image" />
        </figure>
      </div>
      {/* End image-outer */}

      <div className="auto-container">
        <div className="row">
          <div className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <div
                className="title-box"
                data-aso-delay="500"
                data-aos="fade-up"
              >
                <h3>Find Candidate</h3>
                <div className="text">
                  Jobs & Job search. Find jobs in global. Executive jobs & work.
                  Employment
                </div>
              </div>
              {/* End title box */}

              <div
                className="job-search-form"
                data-aos-delay="700"
                data-aos="fade-up"
              >
                <SearchForm3 btnStyle="btn-style-one" />
              </div>
              {/* <!-- Job Search Form --> */}

              <div className="bottom-box wow fadeInUp" data-wow-delay="1500ms">
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
              {/* End .bottom-box */}
            </div>
            {/* End inner-column */}
          </div>
          {/* End .content-column */}
        </div>
        {/* <!-- Job Search Form --> */}
      </div>
    </section>
  );
};

export default index;
