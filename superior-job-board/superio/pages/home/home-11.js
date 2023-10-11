import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Home11 from "../../components/home-11";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home-11" />
      <Home11 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
