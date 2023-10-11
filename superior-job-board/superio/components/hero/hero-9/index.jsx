import SearchForm4 from "../../common/job-search/SearchForm4";
import Funfact2 from "../../fun-fact-counter/Funfact2";

const index = () => {
  return (
    <section
      className="banner-section-nine"
      style={{ backgroundImage: "url(/images/background/7.jpg)" }}
    >
      <div className="auto-container">
        <div className="cotnent-box">
          <div className="title-box" data-aso-delay="300" data-aos="fade-up">
            <h3>15,000+ Browse Jobs</h3>
            <div className="text">
              Find Jobs, Employment & Career Opportunities
            </div>
          </div>

          {/* <!-- Job Search Form --> */}
          <div
            className="job-search-form"
            data-aos-delay="500"
            data-aos="fade-up"
          >
            <SearchForm4 />
          </div>
        </div>
        {/* <!-- Job Search Form --> */}

        <div className="fun-fact-section">
          <div className="row">
            <Funfact2 />
          </div>
        </div>
        {/* <!-- Fun Fact Section --> */}
      </div>
    </section>
  );
};

export default index;
