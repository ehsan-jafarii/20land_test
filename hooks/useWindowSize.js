import { isClient } from "@/config";
import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    if (isClient) {
      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      isClient && handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount

  return {
    ...windowSize,
    xxs: (windowSize.width ?? 0) < 360,
    xs: (windowSize.width ?? 0) >= 360,
    sm: (windowSize.width ?? 0) >= 640,
    md: (windowSize.width ?? 0) >= 768,
    lg: (windowSize.width ?? 0) >= 1024,
    xl: (windowSize.width ?? 0) >= 1280,
    xxl: (windowSize.width ?? 0) >= 1536
  };
}
