import { Container } from "@/components/container";

export const QRSkeleton = () => {
  return (
    <Container className="flex flex-col items-center justify-center mb-14">
      <div className="w-[300px] h-10 animate-pulse bg-neutral-100 mb-2"></div>
      <div className="w-[200px] h-10 animate-pulse bg-neutral-100 mb-10"></div>
      <div className="w-full max-w-[600px] h-[500px] md:h-[700px] animate-pulse bg-neutral-100 rounded-3xl"></div>
    </Container>
  );
};
