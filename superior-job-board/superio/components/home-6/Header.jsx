import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "../header/HeaderNavContent";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header header-style-five ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      {/* <!-- Main box --> */}
      <div className="main-box">
        {/* <!--Nav Outer --> */}
        <div className="nav-outer">
          <HeaderNavContent />
        </div>
        {/* End .nav-outer */}

        <div className="logo-box">
          <div className="logo">
            <Link href="/">
              <img src="/images/logo.svg" alt="brand" />
            </Link>
          </div>
        </div>
        {/* End .logo-box */}

        <div className="outer-box">
          {/* <!-- Add Listing --> */}
          <Link href="/candidates-dashboard/cv-manager" className="upload-cv">
            Upload your CV
          </Link>
          {/* <!-- Login/Register --> */}
          <div className="btn-box">
            <a
              href="#"
              className="theme-btn btn-style-three call-modal"
              data-bs-toggle="modal"
              data-bs-target="#loginPopupModal"
            >
              Login / Register
            </a>
            <Link href="/job-post" className="theme-btn btn-style-one">
              Job Post
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
