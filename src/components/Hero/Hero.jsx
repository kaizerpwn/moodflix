import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Hero = ({ moods, selectedMood, setSelectedMood }) => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('./background.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              How are you feeling today?
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Select your mood and let Moodflix recommend the perfect movie for
              you.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-3">
            {moods.map((mood) => (
              <button
                key={mood.name}
                className={`text-2xl p-6 rounded-lg ${
                  selectedMood === mood.name
                    ? "bg-red-600 text-white"
                    : "text-red-600 hover:bg-red-600 hover:text-white bg-white"
                }`}
                onClick={() => setSelectedMood(mood.name)}
              >
                <span className="mr-2">{mood.emoji}</span>
                {mood.name}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center h-16 mt-6">
            {selectedMood && (
              <Link to={`/movies/${selectedMood}`}>
                <button className="flex items-center px-4 py-4 text-white bg-red-600 rounded-lg hover:bg-red-700">
                  Find Movies for &apos;{selectedMood}&apos; Mood
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

Hero.propTypes = {
  moods: PropTypes.array,
  selectedMood: PropTypes.string,
  setSelectedMood: PropTypes.func,
};
