import Banner from "@/app/components/home/Banner";
import About from "./components/home/About";
import HowItWorks from "./components/home/HowItWorks";
import FeaturedVaults from "./components/home/FeaturedVaults";
import VaultMemories from "./components/home/VaultMemories";
import CreateVault from "./components/home/CreateVault";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Banner />
      <About />
      <HowItWorks />
      <FeaturedVaults />
      <VaultMemories />
      <CreateVault />
      <Footer />
    </main>
  );
}

