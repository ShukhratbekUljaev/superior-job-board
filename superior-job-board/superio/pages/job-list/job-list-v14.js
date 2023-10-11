import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import JobListV14 from "../../components/job-listing-pages/job-list-v14";

const index = () => {
  return (
    <>
      <Seo pageTitle="Job List V14" />
      <JobListV14 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
