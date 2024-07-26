import React, { useState } from "react";
import OtpBoxCom from "./otpBox";
import ChaiandCode from "./ChaiandCode";
const Otppage = () => {
  const [otpStatus, setOtpStatus] = useState("initial");

  const otpSubmit = (otp) => {
    console.log(otp);
    if (otp.length === 4) {
      if (otp === "1234") {
        setOtpStatus("valid");
      } else {
        setOtpStatus("invalid");
      }
    } else {
      setOtpStatus("initial");
    }
  };

  const getBorderClass = () => {
    switch (otpStatus) {
      case "valid":
        return "border-2 border-green-500 outline-none";
      case "invalid":
        return "border-2 border-red-500 outline-none";
      default:
        return "";
    }
  };

  const getButtonClass = () => {
    switch (otpStatus) {
      case "valid":
        return "bg-green-500 outline-none";
      case "invalid":
        return "bg-red-500 outline-none";
      default:
        return "bg-[#112D4E]";
    }
  };
  const getViewClass = () => {
    switch (otpStatus) {
      case "valid":
        return "hidden bg-red-900";
    }
  };

  return (
    <div className='bg-[#3F72AF] flex flex-col pt-7 gap-10 items-center  align-middle h-[100vh] w-[100vw]'>
      <h1 className='text-[80px] font-bold text-white'>Chai and Code </h1>
      <div className='otpSection bg-[#F9F7F7] rounded-[18px] w-[706px] h-[450px] flex flex-col justify-start pt-10 gap-3 align-middle items-center  text-center'>
        <div className='text_of_otp_section font-bold text-[40px]'>
          Mobile Phone Verification
        </div>
        <div className='otp_box text-[25px] text-[#BFBFBF] w-[585px]'>
          Enter the 4-digit verification code that was sent to your phone
          number.
        </div>
        <div className=' '>
          <OtpBoxCom
            className={getBorderClass()}
            length={4}
            onsub={otpSubmit}
          />
        </div>
        <button
          className={`w-[417px] h-[64px] rounded-[8px] text-[25px] text-white ${getButtonClass()}`}
          type='submit'>
          Verify Account
        </button>
        <div className={`action_text block text-[25px] ${getViewClass()}'`}>
          <span className='text-[#BFBFBF] '>
            Didn't receive code?
            {}
          </span>
          <span>Resend</span>
        </div>
      </div>
      <div className='fixed bottom-5 right-3'>
        <ChaiandCode />
      </div>
    </div>
  );
};

export default Otppage;
