import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import EmployersListV4 from "../../components/employers-listing-pages/employers-list-v4";

const index = () => {
  return (
    <>
      <Seo pageTitle="Employers List V4" />
      <EmployersListV4 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
