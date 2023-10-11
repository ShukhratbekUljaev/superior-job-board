import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import CandidatesListV4 from "../../components/candidates-listing-pages/candidates-list-v4";

const index = () => {
  return (
    <>
      <Seo pageTitle="Candidates List V4" />
      <CandidatesListV4 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
