import { cx } from "class-variance-authority";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cx("mx-6 md:mx-10 flex  max-w-full", className)}>{children}</div>;
}
