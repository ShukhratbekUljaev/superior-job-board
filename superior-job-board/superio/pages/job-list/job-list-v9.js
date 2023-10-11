import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import JobListV9 from "../../components/job-listing-pages/job-list-v9";

const index = () => {
  return (
    <>
      <Seo pageTitle="Job List V9" />
      <JobListV9 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
