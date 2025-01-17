import { Container } from "@/components/container";

const QR = () => {
  return (
    <Container className="flex flex-col items-center justify-center mb-14">
      <div className="py-10">
        <h2 className="text-balance text-h4 font-black tracking-tighter sm:text-h3 md:text-h1 xl:text-9xl py-10 text-center">
          ESCANÉAME
        </h2>
        <p className="text-md sm:text-xxl md:max-w-[50rem] text-center">Puedo conversar contigo desde tu celular.</p>
      </div>
      <img src="/qr.webp" alt="ia" className="w-full max-w-[600px] h-auto" />
    </Container>
  );
};

export default QR;
