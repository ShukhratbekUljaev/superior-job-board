import Link from "next/link";
import Slider from "react-slick";
import jobFeatured from "../../data/job-featured";

const JobFeatured12 = () => {
  const settings = {
    dots: true,
    speed: 1400,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
        {jobFeatured.slice(11, 20).map((item) => (
          <div className="job-block-three mb-0" key={item.id}>
            <div className="inner-box">
              <div className="content">
                <span className="company-logo">
                  <img src={item.logo} alt="brand" />
                </span>
                <h4>
                  <Link href={`/job-single-v4/${item.id}`}>
                    {item.jobTitle}
                  </Link>
                </h4>

                <ul className="job-info">
                  <li>
                    <span className="icon flaticon-briefcase"></span>
                    {item.company}
                  </li>
                  {/* compnay info */}
                  <li>
                    <span className="icon flaticon-map-locator"></span>
                    {item.location}
                  </li>
                  {/* location info */}
                </ul>
                {/* End .job-info */}
              </div>
              {/* End content */}

              <ul className="job-other-info">
                {item.jobType.map((val, i) => (
                  <li key={i} className={`${val.styleClass}`}>
                    {val.type}
                  </li>
                ))}
              </ul>
              {/* End .job-other-info */}

              <button className="bookmark-btn">
                <span className="flaticon-bookmark"></span>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default JobFeatured12;
