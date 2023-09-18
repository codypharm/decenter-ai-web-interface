import Image from "next/image";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Demo from "./components/home/Demo";
import Features from "./components/home/Features";

export default function Home() {
  return (
    <main className="bg-primary_13">
      <Hero />
      <About />
      <Demo />
      <Features />
    </main>
  );
}
