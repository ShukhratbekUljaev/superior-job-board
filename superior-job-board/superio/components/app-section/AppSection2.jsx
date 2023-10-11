const AppSection2 = () => {
  const featureList = [
    {
      id: 1,
      icon: "icon-case",
      title: "Job Search",
      text: `Search through millions of jobs and find the right fit. Simply swipe right to apply.`,
    },
    {
      id: 2,
      icon: "icon-contact",
      title: "Search on the go",
      text: `Search through millions of jobs and find the right fit. Simply swipe right to apply.`,
    },
    {
      id: 3,
      icon: "icon-doc",
      title: "Instant Notifications",
      text: `Search through millions of jobs and find the right fit. Simply swipe right to apply.`,
    },
  ];

  return (
    <section className="app-section layout-pt-120">
      <div className="bg-shape -top -right js-rellax">
        <img src="/images/index-11/shapes/3.png" alt="image" />
      </div>
      {/* End bg-shape */}

      <div className="auto-container">
        <div className="row justify-content-between align-items-center">
          {/* <!-- Image Column --> */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12 order-1">
            <div className="bg-shape"></div>
            <figure className="image" data-aos="fade-right">
              <img src="/images/index-11/download/1.png" alt="hero" />
            </figure>
          </div>

          <div className="content-column col-lg-5 col-md-12 col-sm-12 order-2">
            <div
              className="text-left inner-column pt-0 pb-0"
              data-aos="fade-left"
            >
              <div className="sec-title">
                <span className="sub-title">DOWNLOAD & ENJOY</span>
                <h2>Get the Superio Job Search App</h2>
              </div>

              <div className="content-icons">
                {featureList.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="icon-wrap">
                      <span className={`icon ${item.icon}`}></span>
                    </div>
                    <div className="content">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="download-btn content-icons-btn">
                <a href="#">
                  <img src="/images/icons/apple.png" alt="icons" />
                </a>
                <a href="#">
                  <img src="/images/icons/google.png" alt="icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection2;
