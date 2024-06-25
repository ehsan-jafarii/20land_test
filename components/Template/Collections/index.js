"use client";
import { Button } from "@/components";
import { useRouter } from "next/navigation";

const CollectionsTemplate = () => {
  const router = useRouter();
  return (
    <div className="w-full h-[100dvh] flex justify-center items-center">
      <Button
        onClick={() => router.back()}
        className="bg-orange-500 p-4 rounded-lg text-white"
      >
        back
      </Button>
    </div>
  );
};

export default CollectionsTemplate;
