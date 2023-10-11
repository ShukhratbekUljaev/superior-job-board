import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Home12 from "../../components/home-12";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home-12" />
      <Home12 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
