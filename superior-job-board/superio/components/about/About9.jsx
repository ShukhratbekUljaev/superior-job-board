import Link from "next/link";

const About9 = () => {
  return (
    <>
      {/* <!-- About Section --> */}
      <section className="about-section-two style-two layout-pt-60 layout-pb-60">
        <div className="auto-container">
          <div className="row justify-content-between align-items-center">
            {/* <!-- Image Column --> */}
            <div className="image-column -no-margin col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
              <div className="image-box -type-1">
                <figure
                  className="main-image"
                  data-aos-delay="500"
                  data-aos="fade-in"
                >
                  <img src="/images/index-13/images/1.png" alt="resource" />
                </figure>

                {/* <!-- Info BLock One --> */}
                <div
                  className="info_block"
                  data-wow-delay="800"
                  data-aos="fade-in"
                >
                  <span className="icon flaticon-email-3"></span>
                  <p>
                    Work Inquiry From <br />
                    Ali Tufan
                  </p>
                </div>

                {/* <!-- Info BLock Two --> */}
                <div
                  className="info_block_two"
                  data-aos-delay="1100"
                  data-aos="fade-in"
                >
                  <p>10k+ Candidates</p>
                  <div className="image">
                    <img
                      src="/images/resource/multi-peoples.png"
                      alt="resource"
                    />
                  </div>
                </div>

                {/* <!-- Info BLock Four --> */}
                <div
                  className="info_block_four"
                  data-aos-delay="1300"
                  data-aos="fade-in"
                >
                  <span className="icon flaticon-file"></span>
                  <div className="inner">
                    <p>Upload Your CV</p>
                    <span className="sub-text">
                      It only takes a few seconds
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* End img-column */}

            {/* <!-- Content Column --> */}
            <div className="content-column mb-0 col-xl-5 col-lg-6 col-md-12 col-sm-12">
              <div data-aos="fade-right">
                <div className="sec-title">
                  <h2 className="fw-700">
                    Professional CV is your ticket to the dream job
                  </h2>
                  <div className="text mt-30">
                    To start searching for jobs, you can attend job fairs online
                    or in person, use job boards and career websites or reach
                    out directly to recruiters in a targeted company to broaden
                    your network.
                  </div>
                </div>
                <Link
                  href="/candidates-dashboard/cv-manager"
                  className="theme-btn btn-style-one"
                >
                  Post Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section -->  */}
    </>
  );
};

export default About9;
