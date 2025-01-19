import { lazy, Suspense } from "react";
const HeygenEmbed = lazy(() => import("@/components/heiygen-embed"));

export const Pulse = () => {
  return (
    <div className="w-full h-[220px] sm:h-[280px] md:h-[460px] lg:h-[500px] relative overflow-hidden ">
      <div className="pulse text-white relative" id="custom-container"></div>

      <Suspense>
        <HeygenEmbed containerId="custom-container" />
      </Suspense>
    </div>
  );
};
