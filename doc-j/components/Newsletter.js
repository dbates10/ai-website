"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { storyblokEditable } from "@storyblok/react/rsc";

const Newsletter = ({ blok }) => {
  const { headline, subtext, button_text } = blok;
  const [isSubscribed, setIsSubscribed] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("submitted data", data);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          ...(data.receiveTextUpdates && { phone: data.phoneNumber }),
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setIsSubscribed(true);
        reset();
      } else {
        console.error("Subscription failed:", result);
        alert(`Subscription failed: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };

  const handleAddAnotherEmail = () => {
    setIsSubscribed(false);
  };

  // Watch the checkbox field
  const receiveTextUpdates = watch("receiveTextUpdates", false);

  return (
    <>
      <div
        {...storyblokEditable(blok)}
        className="flex flex-col py-20 bg-[url(/swirl.svg)] bg-cover bg-no-repeat items-center justify-center"
      >
        <div className="p-4 md:p-10 bg-white bg-opacity-80 rounded-lg shadow-lg justify-center">
          <h3 className="text-7xl uppercase font-clone font-extrabold text-purp-dark text-center">
            {headline}{" "}
          </h3>
          <h3 className="text-xl font-ibm font-bold text-purp-dark text-center">
            {subtext}{" "}
          </h3>
          {isSubscribed ? (
            <div className="text-center">
              <h3 className="text-xl font-ibm font-bold text-purp-dark">
                Thanks for signing up!
              </h3>
              <button
                onClick={handleAddAnotherEmail}
                className="bg-purp-dark text-white p-2 rounded-lg border-2 border-purp-dark mt-4"
              >
                Add Another Email
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center mt-4 w-full"
            >
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className={`w-3/4 md:w-1/2 p-2 rounded-lg border-2 focus:outline focus:outline-purp-light outline-offset-2 ${
                  errors.email ? "border-red-500" : "border-purp-dark"
                }`}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
              {receiveTextUpdates && (
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  {...register("phoneNumber", { required: receiveTextUpdates })}
                  className={`w-3/4 md:w-1/2 mt-2 p-2 rounded-lg border-2 focus:outline focus:outline-green ${
                    errors.phoneNumber ? "border-red-500" : "border-purp-dark"
                  }`}
                />
              )}
              {errors.phoneNumber && (
                <span className="text-red-500">Phone number is required</span>
              )}
              <label className="mt-4 text-center w-3/4 md:w-1/2">
                <input type="checkbox" {...register("receiveTextUpdates")} /> I
                would like to receive exclusive news & updates via text message.
              </label>

              <button
                type="submit"
                className="bg-purp-dark text-white p-2 rounded-lg border-2 border-purp-dark mt-4"
              >
                {button_text}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Newsletter;
