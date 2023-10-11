import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import JobListV6 from "../../components/job-listing-pages/job-list-v6";

const index = () => {
  return (
    <>
      <Seo pageTitle="Job List V6" />
      <JobListV6 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
