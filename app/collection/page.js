import dynamic from "next/dynamic";

const CollectionsTemplate = dynamic(() =>
  import("@/components/Template/Collections")
);
const Collections = () => {
  return <CollectionsTemplate />;
};

export default Collections;
