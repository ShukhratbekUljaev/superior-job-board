import Link from "next/link";
import topCompany from "../../data/topCompany";

const TopCompany3 = () => {
  return (
    <>
      {topCompany.slice(0, 6).map((company) => (
        <div
          className="company-block-two col-lg-6 col-md-12 col-sm-12"
          key={company.id}
        >
          <div className="inner-box">
            <div className="content">
              <figure className="image">
                <img src={company.img} alt="top company" />
              </figure>
              <h4 className="name">{company.name}</h4>
              <div className="location">
                <i className="flaticon-map-locator"></i> {company.location}
              </div>
            </div>
            {/* End .content */}
            <Link
              href="/employers-list/employers-list-v1"
              className="theme-btn btn-style-three"
            >
              {company.jobNumber} Open Position
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopCompany3;
