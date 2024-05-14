import Logo from "../assets/svg/Logo";
const Home = () => {
  return (
    <section className="max-w-[1024px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="max-w-[450px]">
          <h1 className="text-[90px] sono font-bold leading-tight">
            React <br />
            <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text">
              OTP Kit
            </span>
          </h1>
          <p className="text-[20px]">
            A lightweight carousel library with fluid motion and great swipe
            precision
          </p>
          <div>
            <button>Examples</button>
            <button>Generator</button>
          </div>
        </div>
        <div className="mx-auto">
          <Logo size="300" />
        </div>
      </div>
    </section>
  );
};

export default Home;
