/* eslint-disable prettier/prettier */
import { useState } from "react";
import OtpKit, { OtpKitResendCode } from "./CustomOtpKit";

const Testing = () => {
  const [otp, setOtp] = useState("");
  // const handleResponseData = (data: any) => {
  //   console.log('responseFataOTP', data)
  // }
  const generateRandomDigits = () => {
    let result = "";
    const characters = "0123456789";
    const length = 6;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  return (
    <>
      <OtpKit
        value={otp}
        onChange={setOtp}
        placeholder=""
        numOfInputs={6}
        type="number"
        // separator={{
        //   show: true,
        //   value: '+',
        //   intervals: 1,
        //   className: 'default__styles',
        // }}
        inputStyles={{
          generalStyles: "rok__input--variant1",
          onFill: "onfill__type1",
        }}
        autoFocus={true}
        // submitOtpButton={{
        //   show: true,
        //   text: 'Submit OTP',
        //   className: '',
        // }}
        clearOtpButton={{
          show: true,
          text: "Clear",
          className: "rado",
        }}
        // autoSubmit={true}
      />
      <OtpKitResendCode
        resendOtpButton={{
          localFunctions: generateRandomDigits,
          apiURL: "https://jsonplaceholder.typicode.com/posts",
          initialCountdown: 2,
          // responseData: handleResponseData, // Pass the function to handle response data
        }}
      />
    </>
  );
};

export default Testing;

{
  /* <OtpKitResendCode
        resendOtpButton={{
          // localFunctions: generateRandomDigits,
          // apiURL: 'https://jsonplaceholder.typicode.com/posts',
          initialCountdown: 2,
          text: 'Get code',
          className: 'resendbutton_styles',
          responseData: handleResponseData, // Pass the function to handle response data
        }}
      />
      <p>Generated OTP: {otp}</p>
    </div> */
}


// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );




// import { useState } from "react";
// import OtpKit from "./components/CustomOTP";

// const App = () => {
//   const [otp, setOtp] = useState("");

//   const handleChange = (newOtp: string) => {
//     setOtp(newOtp);
//     console.log("myOTP", newOtp); // Logging the OTP here
//   };

//   return (
//     <div>
//       <OtpKit
//         value={otp}
//         numOfInputs={4}
//         onChange={handleChange}
//         inputStyles={{
//           generalStyles: "rok__input--variant1",
//           onFill: "onfill__type1",
//         }}
//         type={"text"}
//         autoSubmit={true}
//       />
//     </div>
//   );
// };

// export default App;
