import { lazy, Suspense } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import { SectionIa } from "@/components/section-ia";
import { HeroSkeleton } from "@/components/skeletons/hero-skeleton";
import { QRSkeleton } from "@/components/skeletons/qr-skeleton";

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
