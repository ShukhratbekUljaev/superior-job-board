import Link from "next/link";

const About12 = () => {
  return (
    <>
      {/* <!-- About Section --> */}
      <section className="about-section -type-2 layout-pt-120 layout-pb-60">
        <div className="auto-container">
          <div className="row justify-content-between align-items-center">
            <div className="image-group image-column -no-margin col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
              <div className="image-box -type-1">
                <figure className="main-image" data-aos="fade-left">
                  <img src="/images/index-14/images/2.png" alt="image" />
                </figure>
              </div>
            </div>
            {/* End .col */}

            <div className="content-column mb-0 col-xl-5 col-lg-6 col-md-12 col-sm-12">
              <div data-aos="fade-right">
                <div className="sec-title mb-0">
                  <h2 className="fw-700">
                    <span className="text-orange">Find</span> Your
                    <br /> Perfect Job
                  </h2>
                  <div className="text mt-30">
                    To start searching for jobs, you can attend job fairs online
                    or in person, use job boards and career websites or reach
                    out directly to recruiters in a targeted company to broaden
                    your network.
                  </div>
                </div>
                <Link
                  href="/job-list/job-list-v12"
                  className="theme-btn -blue-outline mt-30"
                >
                  Get Started
                </Link>
              </div>
            </div>
            {/* End  {/* <!-- Content Column --> */}
          </div>
        </div>
      </section>
      {/* <!-- End About Section --> */}
    </>
  );
};

export default About12;
