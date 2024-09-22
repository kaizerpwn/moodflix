import { Heart, Smile, Star } from "lucide-react";

const About = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-red-600" id="about">
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          How It Works
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white text-black">
            <Smile className="h-8 w-8 text-red-600" />
            <h3 className="text-xl font-bold">Tell Us Your Mood</h3>
            <p className="text-sm text-gray-600 text-center">
              Share how you are feeling right now
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white text-black">
            <Star className="h-8 w-8 text-red-600" />
            <h3 className="text-xl font-bold">Get Recommendations</h3>
            <p className="text-sm text-gray-600 text-center">
              Our AI suggests movies that match your mood
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white text-black">
            <Heart className="h-8 w-8 text-red-600" />
            <h3 className="text-xl font-bold">Enjoy Your Movie</h3>
            <p className="text-sm text-gray-600 text-center">
              Watch and rate to improve future recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
