import Link from "next/link";
import jobCatContent from "../../data/job-catergories";

const JobCategorie4 = () => {
  return (
    <>
      {jobCatContent.slice(0, 3).map((item) => (
        <div
          className="feature-block-two col-lg-4 col-md-4 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <span className={`icon ${item.icon}`}></span>
            <h4>
              <Link href="/job-list/job-list-v4">{item.catTitle}</Link>
            </h4>
            <span className="count">({item.jobNumber} open positions)</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCategorie4;
