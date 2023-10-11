import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import JobListV2 from "../../components/job-listing-pages/job-list-v2";

const index = () => {
  return (
    <>
      <Seo pageTitle="Job List V2" />
      <JobListV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
