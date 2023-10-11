import Link from "next/link";
import jobCatContent from "../../data/job-catergories";

const JobCategorie3 = () => {
  return (
    <>
      {jobCatContent.slice(0, 8).map((item) => (
        <div
          className="category-block-three col-lg-3 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <div className="content">
              <span className={`icon ${item.icon}`}></span>
              <h4>
                <Link href="/job-list/job-list-v3">{item.catTitle}</Link>
              </h4>
              <p>({item.jobNumber} open positions)</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCategorie3;
