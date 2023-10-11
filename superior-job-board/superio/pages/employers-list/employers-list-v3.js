import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import EmployersListV3 from "../../components/employers-listing-pages/employers-list-v3";

const index = () => {
  return (
    <>
      <Seo pageTitle="Employers List V3" />
      <EmployersListV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
