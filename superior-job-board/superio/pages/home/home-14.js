import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Home14 from "../../components/home-14";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home-14" />
      <Home14 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
