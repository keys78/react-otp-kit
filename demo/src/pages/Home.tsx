import { useNavigate } from 'react-router-dom'
import Logo from '../assets/svg/Logo'
const Home = () => {
  const navigate = useNavigate()

  return (
    <section className="max-w-[1024px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="max-w-[450px]">
          <h1 className="text-[90px] sono font-bold text-accent-4 leading-none">
            React <br />
            <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text">
              OTP Kit
            </span>
          </h1>
          <p className="text-[20px] pt-6 pb-10">
            A lightweight react library for easy implementation of secure
            one-time passwords (OTPs).
          </p>
          <div className="flex items-center space-x-5">
            <button className="border-2 border-purple-600 bg-purple-600 text-[#fafafa] px-8 py-2 rounded-[20px] focus:ring-4 focus:ring-teal-300">
              Get Started
            </button>
            <button
              onClick={() => navigate('/get-started')}
              className="border-2 border-purple-500 px-8 py-2 rounded-[20px] focus:ring-4 focus:ring-teal-300 bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text"
            >
              Examples
            </button>
          </div>
        </div>
        <div className="mx-auto">
          <Logo size="300" />
        </div>
      </div>
      <div className="flex items-center justify-between space-x-10 py-20">
        <div className="bg-accent-1 text-accent-4 rounded-[10px] pt-6 pb-10 px-6 w-full">
          <h3 className="lato font-semibold pb-3 text-[20px]">
            Easy Integration
          </h3>
          <p>
            Comprehensive documentation, for quick setup and integration with
            existing systems.
          </p>
        </div>
        <div className="bg-accent-1 text-accent-4 rounded-[10px] pt-6 pb-10 px-6 w-full">
          <h3 className="lato font-semibold pb-3 text-[20px]">Treeshakeable</h3>
          <p>
            Necessary parts of the code in your final bundle, for file size /
            performance optimization
          </p>
        </div>
        <div className="bg-accent-1 text-accent-4 rounded-[10px] pt-6 pb-10 px-6 w-full">
          <h3 className="lato font-semibold pb-3 text-[20px]">Modifiable</h3>
          <p>
            Modular component, easy to modify and customize according to your
            project's needs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home
