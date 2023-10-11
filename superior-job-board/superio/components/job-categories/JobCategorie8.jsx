import Link from "next/link";

const JobCategorie8 = () => {
  const categorieContent = [
    {
      id: 1,
      icon: "flaticon-money-1",
      catName: (
        <>
          Accounting
          <br /> Finance Jobs
        </>
      ),
      logo: "/images/index-14/jobs/logos.png",
      jobNumber: "874",
      text: `Achieve virtually any design and layout from within the one template.`,
    },
    {
      id: 2,
      icon: "flaticon-promotion",
      catName: "Marketing",
      logo: "/images/index-14/jobs/logos.png",
      jobNumber: "221",
      text: `Achieve virtually any design and layout from within the one template.`,
    },
    {
      id: 3,
      icon: "flaticon-web-programming",
      catName: "Development",
      logo: "/images/index-14/jobs/logos.png",
      jobNumber: "234",
      text: `Achieve virtually any design and layout from within the one template.`,
    },
    {
      id: 4,
      icon: "flaticon-money-1",
      catName: (
        <>
          Accounting
          <br /> Finance Jobs
        </>
      ),
      logo: "/images/index-14/jobs/logos.png",
      jobNumber: "345",
      text: `Achieve virtually any design and layout from within the one template.`,
    },
    {
      id: 5,
      icon: "flaticon-promotion",
      catName: "Marketing",
      logo: "/images/index-14/jobs/logos.png",
      jobNumber: "124",
      text: `Achieve virtually any design and layout from within the one template.`,
    },
    {
      id: 6,
      icon: "flaticon-web-programming",
      catName: "Development",
      logo: "/images/index-14/jobs/logos.png",
      jobNumber: "267",
      text: `Achieve virtually any design and layout from within the one template.`,
    },
  ];
  return (
    <>
      {categorieContent.map((item) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
          <div className="category-block -type-1">
            <div className="inner-box">
              <div className="cat-header">
                <div className="left">
                  <div className="icon-wrap -blue">
                    <span className={`icon ${item.icon}`}></span>
                  </div>
                  <h4>
                    <Link href="/job-list/job-list-v9">{item.catName}</Link>
                  </h4>
                </div>

                <div className="right">
                  <img src={item.logo} alt="image" />
                </div>
              </div>

              <div className="cat-content">
                <Link href="/job-list/job-list-v9" className="title">
                  {item.jobNumber} Jobs
                </Link>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCategorie8;
