import { Container } from "@/components/container";
import { Pulse } from "@/components/pulse";

export const SectionIa = () => {
  return (
    <div className="flex flex-col">
      <Container>
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-balance text-h4 font-black tracking-tighter sm:text-h3 md:text-h1 xl:text-9xl py-10 text-center">
            BANHCAFE IA: Tu Asistente Bancario Inteligente
          </h2>
          <p className="text-md sm:text-xxl md:max-w-[50rem] text-center">
            BANHCAFE presenta su avanzada Inteligencia Artificial Interactiva, diseñada para ofrecer una experiencia
            personalizada y ágil para sus clientes.
          </p>
        </div>
      </Container>

      <Pulse />

      <Container className="flex flex-col items-center justify-center mb-14">
        <h2 className="text-balance text-h4 font-black tracking-tighter sm:text-h3 md:text-h1 xl:text-9xl py-10 text-center">
          Escanea el QR y Llévanos Contigo en tu Teléfono
        </h2>
        <img src="/qr.png" alt="ia" className=" w-full max-w-[600px] h-auto" />
      </Container>
    </div>
  );
};
