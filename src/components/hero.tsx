import { Container } from "@/components/container";

const Hero = () => {
  return (
    <Container>
      <div className="w-full h-[350px] md:h-[340px] flex bg-cover bg-center bg-no-repeat justify-center items-center !gap-[6rem] bg-[url('/hero-background.webp')] rounded-3xl p-6 md:p-10">
        <img src="/banner.webp" alt="banner" className="w-full md:w-[700px] h-auto" />
      </div>
    </Container>
  );
};

export default Hero;
