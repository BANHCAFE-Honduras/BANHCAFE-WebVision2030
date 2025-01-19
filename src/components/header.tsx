import { Icons } from "@/assets/icons/Icons";
import { Logo } from "@/components/logo";

export const Header = () => {
  return (
    <header className="sticky top-0 z-999  px-6 md:px-14 py-4 bg-transparent z-30 w-full">
      <div className="dark:shadow-none flex justify-center sm:justify-between flex-1 items-center h-[7rem]  px-6 bg-background/80 shadow-card backdrop-blur-sm transition-all duration-300 transform rounded-xl">
        <Logo className="text-primary" />
        <div className="hidden sm:flex">
          <a
            href="https://www.banhcafe.hn/"
            target="_blank"
            className="bg-primary border border-transparent py-3 px-4 rounded-lg text-white hover:bg-primary-hover hover:text-white/95 transition-colors duration-300"
          >
            Ir a BANHCAFE <Icons name="arrow-left" className="inline-block" size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};
