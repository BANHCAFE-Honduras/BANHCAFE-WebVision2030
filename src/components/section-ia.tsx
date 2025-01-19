import { Container } from "@/components/container";
import { Pulse } from "@/components/pulse";

export const SectionIa = () => {
  return (
    <div className="flex flex-col">
      <Container>
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-balance text-h4 font-black tracking-tighter sm:text-h3 md:text-h1 xl:text-9xl py-3 text-center">
            BANHCAFE IA
          </h2>
          <p className="text-md sm:text-xxl md:max-w-[50rem] text-center">
            Estoy aquí para ayudarte a comprender y fortalecer la VISION BANHCAFE 2030.
          </p>
          <p className="text-md sm:text-xxl md:max-w-[50rem] text-center">Utiliza los audífonos disponibles.</p>
        </div>
      </Container>

      <Pulse />
    </div>
  );
};
