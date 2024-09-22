import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

const Hero = ({ moods, selectedMood, setSelectedMood }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="px-4 md:px-6">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
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
          {selectedMood && (
            <button className="mt-6 bg-red-600 text-white hover:bg-red-700 rounded-lg px-4 py-4 flex items-center">
              Find Movies for &apos;{selectedMood}&apos; Mood
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          )}
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
