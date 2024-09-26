import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
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
    <div className="flex flex-col min-h-screen text-white bg-black">
      <Navbar />
      <main className="flex-1">
        <Hero
          moods={moods}
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />
      </main>
      <Footer />
    </div>
  );
}
