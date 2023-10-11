import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import CandidatesListV2 from "../../components/candidates-listing-pages/candidates-list-v2";

const index = () => {
  return (
    <>
      <Seo pageTitle="Candidates List V2" />
      <CandidatesListV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
