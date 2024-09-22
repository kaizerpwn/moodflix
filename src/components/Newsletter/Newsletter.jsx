import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-red-600"
      id="newsletter"
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Find Your Perfect Movie?
            </h2>
            <p className="mx-auto max-w-[600px] md:text-xl">
              Sign up now and start discovering films that resonate with your
              emotions.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <input
                className="max-w-lg flex-1 h-12 px-4 outline-none rounded-lg bg-white text-black"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="bg-black text-white hover:bg-gray-800 rounded-lg px-5 py-1"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <p className="text-xs">
              By signing up, you agree to our{" "}
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
