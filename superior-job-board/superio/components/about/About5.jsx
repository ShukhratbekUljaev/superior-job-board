import Link from "next/link";
import ApplicantsList from "./ApplicantsList";

const About5 = () => {
  return (
    <section className="about-section-two style-two layout-pt-60 layout-pb-120">
      <div className="auto-container">
        <div className="row grid-base">
          {/* <!-- Content Column --> */}
          <div className="content-column mb-0 col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column " data-aos="fade-right">
              <div className="sec-title">
                <h2>
                  Getting Applied by an <br />
                  Expert Talent
                </h2>
                <div className="text">
                  Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt. Labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation.Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop
                  publishing.
                </div>
                <div className="text">
                  Software like Aldus PageMaker including versions of Lorem
                  Ipsum. There are many variations of passages
                </div>
              </div>
              <Link href="/candidates-list/candidates-list-v3" className="theme-btn -blue">
                Search Candidate
              </Link>
            </div>
          </div>
          {/* End .content-column */}

          {/* <!-- Image Column --> */}
          <div
            className="image-column mb-30 md:mt-0 col-lg-6 col-md-12 col-sm-12"
            data-aos="fade-left"
          >
            <figure className="image-box">
              <img src="/images/index-11/text/image-2.png" alt="about" />
            </figure>

            {/* <!-- Count Employers --> */}
            <div className="applicants-list -pos-2">
              <div className="title-box bg-purple">
                <h4>Applicants List</h4>
              </div>
              {/* End title */}
              <ul className="applicants">
                <ApplicantsList />
              </ul>
            </div>
            {/* End .applicants-list */}
          </div>
          {/* End .image-column */}
        </div>
      </div>
    </section>
  );
};

export default About5;
