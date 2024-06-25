import dynamic from "next/dynamic";

const HomeTemplate = dynamic(() => import("@/components/Template/home"));
export default function Home() {
  return <HomeTemplate />;
}
