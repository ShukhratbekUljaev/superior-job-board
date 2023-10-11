import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import JobListV8 from "../../components/job-listing-pages/job-list-v8";

const index = () => {
  return (
    <>
      <Seo pageTitle="Job List V8" />
      <JobListV8 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
