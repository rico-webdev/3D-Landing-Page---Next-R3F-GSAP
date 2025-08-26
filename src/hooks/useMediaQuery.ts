import { useEffect, useState } from "react";

export function useMediaQuery(minWidth = 768) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Setzt initial den Wert nach Mount
    const update = () => setIsDesktop(window.innerWidth >= minWidth);
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [minWidth]);

  return isDesktop;
}
