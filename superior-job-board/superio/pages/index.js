import dynamic from "next/dynamic";
import Wrapper from "../layout/Wrapper";
import Home1 from "./home/home-1";

const index = () => {
  return (
    <>
      <Wrapper>
        <Home1 />
      </Wrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
