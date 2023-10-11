import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import EmployersListV2 from "../../components/employers-listing-pages/employers-list-v2";

const index = () => {
  return (
    <>
      <Seo pageTitle="Employers List V2" />
      <EmployersListV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
