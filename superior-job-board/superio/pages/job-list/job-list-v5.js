import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import JobListV5 from "../../components/job-listing-pages/job-list-v5";

const index = () => {
  return (
    <>
      <Seo pageTitle="Job List V5" />
      <JobListV5 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
