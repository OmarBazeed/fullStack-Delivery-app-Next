import BestSeller from "./_components/BestSeller/BestSeller";
import Hero from "./_components/Hero/Hero";

export default function Home() {
  return (
    <main className="container m-auto p-2">
      <Hero />
      <BestSeller />
    </main>
  );
}
