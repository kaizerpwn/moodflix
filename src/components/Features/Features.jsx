const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black" id="features">
      <div className="mx-32 px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Features
        </h2>
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="flex flex-col space-y-2 border border-red-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold">Mood-Based Recommendations</h3>
            <p className="text-sm text-gray-300">
              Get personalized movie suggestions based on your current emotions
            </p>
          </div>
          <div className="flex flex-col space-y-2 border border-red-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold">Extensive Movie Database</h3>
            <p className="text-sm text-gray-300">
              Access a vast library of films across various genres and eras
            </p>
          </div>
          <div className="flex flex-col space-y-2 border border-red-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold">User Profiles</h3>
            <p className="text-sm text-gray-300">
              Create and customize your profile for better recommendations
            </p>
          </div>
          <div className="flex flex-col space-y-2 border border-red-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold">Rating System</h3>
            <p className="text-sm text-gray-300">
              Rate movies to improve future suggestions and track your favorites
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
