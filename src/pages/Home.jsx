import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Features from "../components/Features/Features";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { emoji: "😊", name: "Happy" },
    { emoji: "😢", name: "Sad" },
    { emoji: "😎", name: "Excited" },
    { emoji: "😴", name: "Relaxed" },
    { emoji: "😡", name: "Angry" },
    { emoji: "🤔", name: "Thoughtful" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <Hero
          moods={moods}
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />
        <About />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
