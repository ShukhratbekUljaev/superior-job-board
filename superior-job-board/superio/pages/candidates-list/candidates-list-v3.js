import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import CandidatesListV3 from "../../components/candidates-listing-pages/candidates-list-v3";

const index = () => {
  return (
    <>
      <Seo pageTitle="Candidates List V3" />
      <CandidatesListV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
