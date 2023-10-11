import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Home8 from "../../components/home-8";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home-8" />
      <Home8 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
