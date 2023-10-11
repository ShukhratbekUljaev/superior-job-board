import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import EmployersListV1 from "../../components/employers-listing-pages/employers-list-v1";

const index = () => {
  return (
    <>
      <Seo pageTitle="Employers List V1" />
      <EmployersListV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
