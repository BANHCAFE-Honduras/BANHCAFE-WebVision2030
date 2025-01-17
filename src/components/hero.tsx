import { Container } from "@/components/container";

const Hero = () => {
  return (
    <Container>
      <div className="w-full h-[400px] md:h-[780px] flex bg-cover bg-center bg-no-repeat justify-center items-center !gap-[6rem] bg-[url('/hero-background.webp')] rounded-3xl p-6 md:p-10">
        <img src="/banner.webp" alt="banner" className="w-full md:w-[900px] h-auto" />
      </div>
    </Container>
  );
};

export default Hero;

export const HeroSkeleton = () => {
  return (
    <Container>
      <div className="w-full h-[400px] md:h-[780px] animate-pulse bg-neutral-100 rounded-3xl"></div>
    </Container>
  );
};
