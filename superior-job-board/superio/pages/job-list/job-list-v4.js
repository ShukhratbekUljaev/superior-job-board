import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import JobListV4 from "../../components/job-listing-pages/job-list-v4";

const index = () => {
  return (
    <>
      <Seo pageTitle="Job List V4" />
      <JobListV4 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
