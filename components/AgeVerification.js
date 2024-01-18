"use client";
import { useState, useEffect } from "react";

const AgeVerification = ({ children }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [answerNo, setAnswerNo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAgeVerification = () => {
      const ageVerified = localStorage.getItem("ageVerified");
      setIsVerified(ageVerified === "true");
      setIsLoading(false);
    };
    checkAgeVerification();
  }, []);

  const handleVerification = (isOver21) => {
    if (!isOver21) {
      setAnswerNo(true);
    }
    localStorage.setItem("ageVerified", isOver21);
    setIsVerified(isOver21);
  };
  if (isLoading) {
    return null; // Or return a minimal component that doesn't include the Age Verification
  }
  if (!isVerified) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-purp-dark text-white">
        {!answerNo && (
          <>
            <h2 className="mb-4 text-7xl font-clone text-center font-bold uppercase">
              Are you over 21?
            </h2>
            <div className="w-full flex flex-row mx-auto justify-center gap-8 my-4">
              <button
                onClick={() => handleVerification(true)}
                className="px-4 py-2 bg-none border-green border text-green text-2xl font-clone rounded w-28 hover:scale-105 duration-200"
              >
                Yes
              </button>
              <button
                onClick={() => handleVerification(false)}
                className="px-4 py-2 bg-none border border-red-500 text-red-500 text-2xl font-clone rounded w-28 hover:scale-105 duration-200"
              >
                No
              </button>
            </div>
          </>
        )}
        {answerNo && (
          <h2 className="mb-4 text-7xl font-clone text-center font-bold uppercase w-3/4">
            Sorry, you must be 21 or older to enter.
          </h2>
        )}
      </div>
    );
  }

  return <>{children}</>;
};

export default AgeVerification;
