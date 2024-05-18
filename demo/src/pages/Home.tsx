import { useNavigate } from "react-router-dom";
import Logo from "../assets/svg/Logo";
const Home = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="flex md:flex-row flex-col-reverse items-center justify-between">
        <div className="max-w-[450px]">
          <h1 className="lg:text-[90px] text-[60px] sono font-bold text-accent-4 leading-none md:text-left text-center">
            React <br />
            <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text">
              OTP Kit
            </span>
          </h1>
          <p className="text-[20px] pt-6 pb-10 md:text-left text-center">
            A lightweight react library for easy implementation of secure
            one-time passwords (OTPs).
          </p>
          <div className="flex items-center md:justify-start justify-center space-x-5">
            <button
              onClick={() => navigate("/get-started")}
              className="border-2 border-purple-600 bg-purple-600 text-[#fafafa] px-8 py-2 rounded-[20px] focus:ring-4 focus:ring-teal-300"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/examples")}
              className="border-2 border-purple-500 px-8 py-2 rounded-[20px] focus:ring-4 focus:ring-teal-300 bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text"
            >
              Examples
            </button>
          </div>
        </div>
        <div className="mx-auto md:w-full max-w-[200px]">
          <span className="md:block hidden">
            <Logo size="300" />
          </span>
          <span className="md:hidden block">
            <Logo size="160" />
          </span>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between md:space-x-5 md:space-y-0 space-y-5 md:py-20 py-10">
        <div className="bg-accent-1 rounded-[10px] pt-4 pb-6 px-6 w-full">
          <h3 className="lato font-semibold pb-2 text-[20px]">
            Easy Integration
          </h3>
          <p>
            Comprehensive documentation, for quick setup and integration with
            existing systems.
          </p>
        </div>
        <div className="bg-accent-1 rounded-[10px] pt-4 pb-6 px-6 w-full">
          <h3 className="lato font-semibold pb-2 text-[20px]">Treeshakeable</h3>
          <p>
            Necessary parts of the code in your final bundle, for file size /
            performance optimization
          </p>
        </div>
        <div className="bg-accent-1 rounded-[10px] pt-4 pb-6 px-6 w-full">
          <h3 className="lato font-semibold pb-2 text-[20px]">Modifiable</h3>
          <p>
            Modular component, easy to modify and customize according to your
            project's needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
