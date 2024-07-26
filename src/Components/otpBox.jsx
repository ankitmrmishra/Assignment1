import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
const OtpBoxCom = ({ className, length, onsub = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill());

  const refotp = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);

    setOtp(newOtp);

    const combotp = newOtp.join("");
    if (combotp.length === length) onsub(combotp);
    const a = onsub(combotp);

    // automatic moving of the box focus

    if (value && index < length - 1 && refotp.current[index + 1]) {
      refotp.current[index + 1].focus();
    }
  };
  const handleClick = (index) => {
    refotp.current[index].setSelectionRange(1, 1);
  };

  const handlekey = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      refotp.current[index - 1]
    ) {
      refotp.current[index - 1].focus();
    }

    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      refotp.current[index - 1].focus();
    }

    if (e.key === "ArrowRight" && index < length - 1) {
      e.preventDefault();
      refotp.current[index + 1].focus();
    }
  };

  useEffect(() => {
    if (refotp.current[0]) {
      refotp.current[0].focus();
    }
  }, []);
  return (
    <div className='flex gap-4'>
      {otp.map((value, index) => {
        return (
          <input
            type='text'
            key={index}
            ref={(input) => (refotp.current[index] = input)}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handlekey(index, e)}
            className={twMerge(
              "box1 w-[90px] h-[100px] bg-[#DBE2EF] text-black rounded-[12px] resize-none  text-6xl text-center  p-4 ",
              className
            )}
          />
        );
      })}
    </div>
  );
};

export default OtpBoxCom;
