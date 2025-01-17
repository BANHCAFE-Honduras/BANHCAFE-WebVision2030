import { Container } from "@/components/container";

export const Hero = () => {
  return (
    <Container>
      <div className="w-full h-full md:h-[780px] flex bg-cover bg-center bg-no-repeat justify-center items-center !gap-[6rem] bg-[url('/background.png')] rounded-3xl p-6 md:p-10">
        <img src="/banner.png" alt="banner" className="w-full md:w-[900px]  h-auto  " />
      </div>
    </Container>
  );
};
