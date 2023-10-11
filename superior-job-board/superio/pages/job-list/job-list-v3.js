import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import JobListV3 from "../../components/job-listing-pages/job-list-v3";

const index = () => {
  return (
    <>
      <Seo pageTitle="Job List V3" />
      <JobListV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
