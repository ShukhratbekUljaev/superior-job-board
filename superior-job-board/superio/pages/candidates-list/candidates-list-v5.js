import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import CandidatesListV5 from "../../components/candidates-listing-pages/candidates-list-v5";

const index = () => {
  return (
    <>
      <Seo pageTitle="Candidates List V5" />
      <CandidatesListV5 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
