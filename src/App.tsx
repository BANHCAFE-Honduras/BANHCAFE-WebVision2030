import { lazy, Suspense } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSkeleton } from "@/components/hero";
import { QRSkeleton } from "@/components/qr";
import { SectionIa } from "@/components/section-ia";

const Hero = lazy(() => import("@/components/hero"));
const QR = lazy(() => import("@/components/qr"));

function App() {
  return (
    <div className="w-full min-h-screen flex-col bg-background">
      <Header />

      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>

      <SectionIa />

      <Suspense fallback={<QRSkeleton />}>
        <QR />
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
