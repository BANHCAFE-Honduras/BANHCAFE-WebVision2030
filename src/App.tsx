import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SectionIa } from "@/components/section-ia";

function App() {
  return (
    <div className="w-full min-h-screen flex-col bg-background">
      <Header />
      <Hero />
      <SectionIa />
      <Footer />
    </div>
  );
}

export default App;
