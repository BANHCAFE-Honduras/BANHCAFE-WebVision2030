import { Icons } from "@/assets/icons/Icons";

export const Footer = () => {
  return (
    <footer className="flex md:fixed md:w-full md:bottom-0 flex-col md:flex-row justify-between items-center bg-home-background background-texture bg-primary bg-cover py-6 sm:py-8 text-white bg-blend-multiply gap-4 px-8 md:px-16">
      <p className="text-lg text-center">© 2025 Banco Hondureño del Café S.A.</p>
      <a
        href="https://www.banhcafe.hn/"
        target="_blank"
        className="flex justify-center items-center group text-lg text-center hover:text-white/85 transition-colors duration-300"
      >
        <Icons name="spin-bold" className="inline-block group-hover:animate-spin mr-1" /> BANHCAFE
      </a>
    </footer>
  );
};
