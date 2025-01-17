import IconArrowLeft from "@/assets/icons/IconArrowLeft";
import IconSpinBold from "@/assets/icons/IconSpinBold";

export type IconName = "spin-bold" | "arrow-left";
export interface IIcon {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
}

export const Icons = ({ name, size, className }: IIcon) => {
  switch (name) {
    case "spin-bold":
      return <IconSpinBold size={size} className={className} />;

    case "arrow-left":
      return <IconArrowLeft size={size} className={className} />;

    default:
      return null;
  }
};
