import { Container } from "@/components/container";

const QR = () => {
  return (
    <Container className="flex flex-col items-center justify-center mb-14">
      <h2 className="text-balance text-h4 font-black tracking-tighter sm:text-h3 md:text-h1 xl:text-9xl py-10 text-center">
        Escanea el QR y Llévanos Contigo en tu Teléfono
      </h2>
      <img src="/qr.webp" alt="ia" className="w-full max-w-[600px] h-auto" />
    </Container>
  );
};

export default QR;

export const QRSkeleton = () => {
  return (
    <Container className="flex flex-col items-center justify-center mb-14">
      <div className="w-[300px] h-10 animate-pulse bg-neutral-100 mb-2"></div>
      <div className="w-[200px] h-10 animate-pulse bg-neutral-100 mb-10"></div>
      <div className="w-full max-w-[600px] h-[500px] md:h-[700px] animate-pulse bg-neutral-100 rounded-3xl"></div>
    </Container>
  );
};
