import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Home3 from "../../components/home-3";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home-3" />
      <Home3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
