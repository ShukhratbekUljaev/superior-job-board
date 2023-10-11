import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import JobListV7 from "../../components/job-listing-pages/job-list-v7";

const index = () => {
  return (
    <>
      <Seo pageTitle="Job List V7" />
      <JobListV7 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
