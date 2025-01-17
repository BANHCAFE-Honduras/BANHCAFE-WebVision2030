import { Container } from "@/components/container";

export const HeroSkeleton = () => {
  return (
    <Container>
      <div className="w-full h-[400px] md:h-[780px] animate-pulse bg-neutral-100 rounded-3xl"></div>
    </Container>
  );
};
