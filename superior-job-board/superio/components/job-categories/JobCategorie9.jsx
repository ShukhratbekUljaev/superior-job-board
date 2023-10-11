import Link from "next/link";
import jobCatContent from "../../data/job-catergories";

const JobCategorie9 = () => {
  return (
    <>
      {jobCatContent.slice(0, 6).map((item) => (
        <div className="item" key={item.id}>
          <Link href="/job-list/job-list-v1">
            <div className="icon-wrap">
              <div className={`icon ${item.icon}`}></div>
            </div>

            <div className="title">{item.catTitle}</div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default JobCategorie9;
