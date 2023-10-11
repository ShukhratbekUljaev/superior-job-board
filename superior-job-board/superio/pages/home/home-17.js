import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Home17 from "../../components/home-17";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home-17" />
      <Home17 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
