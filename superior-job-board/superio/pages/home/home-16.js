import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Home16 from "../../components/home-16";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home-16" />
      <Home16 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
