import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import JobListV10 from "../../components/job-listing-pages/job-list-v10";

const index = () => {
  return (
    <>
      <Seo pageTitle="Job List V10" />
      <JobListV10 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
