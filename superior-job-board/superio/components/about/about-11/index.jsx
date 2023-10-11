import Link from "next/link";
import ImageBox from "./ImageBox";

const index = () => {
  return (
    <>
      {/* <!-- About Section --> */}
      <section className="about-section -type-2 layout-pt-120 layout-pb-120">
        <div className="auto-container">
          <div className="row justify-content-between align-items-center">
            <div className="content-column mb-0 col-xl-5 col-lg-6 col-md-12 col-sm-12">
              <div data-aos="fade-right">
                <div className="sec-title mb-0">
                  <h2 className="fw-700">
                    Get World <span className="text-orange">50.000 +</span>
                    <br /> Talented People In
                    <br /> One Place
                  </h2>
                  <div className="text mt-30">
                    To start searching for jobs, you can attend job fairs online
                    or in person, use job boards and career websites or reach
                    out directly to recruiters in a targeted company to broaden
                    your network.
                  </div>
                </div>
                <Link
                  href="/candidates-list/candidates-list-v3"
                  className="theme-btn -blue-outline mt-30"
                >
                  Explore More
                </Link>
              </div>
            </div>
            {/* <!-- Content Column --> */}

            <div className="image-group image-column -no-margin col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
              <ImageBox />
            </div>
            {/* End .image-column */}
          </div>
        </div>
      </section>
      {/* <!-- End About Section -->  */}
    </>
  );
};

export default index;
