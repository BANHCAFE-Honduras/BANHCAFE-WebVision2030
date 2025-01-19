import { Icons } from "@/assets/icons/Icons";
import { Logo } from "@/components/logo";

export const Header = () => {
  return (
    <header className="sticky top-0 z-999  bg-transparent z-30 w-full">
      <div className="dark:shadow-none w-full flex justify-center sm:justify-between flex-1 items-center h-[6rem] md:h-[8rem] px-6 bg-background/80 shadow-card backdrop-blur-sm transition-all duration-300 transform rounded-xl">
        <Logo className="text-primary" />
        <div className="hidden sm:flex">
          <a
            href="https://www.banhcafe.hn/"
            target="_blank"
            className="bg-primary border border-transparent py-2 px-4 rounded-lg text-white hover:bg-primary-hover hover:text-white/95 transition-colors duration-300"
          >
            Ir a BANHCAFE <Icons name="arrow-left" className="inline-block" size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};
