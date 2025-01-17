import HeygenEmbed from "@/components/heiygen-embed";

export const Pulse = () => {
  return (
    <div className="w-full h-[800px] relative overflow-hidden ">
      <div className="pulse text-white relative" id="custom-container"></div>
      <HeygenEmbed containerId="custom-container" />
    </div>
  );
};
