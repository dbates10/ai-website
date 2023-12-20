"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // Watch the checkbox field
  const receiveTextUpdates = watch("receiveTextUpdates", false);

  return (
    <>
      <div className="flex flex-col py-20 bg-[url(/swirl.svg)] bg-cover bg-no-repeat items-center justify-center">
        <div className="p-4 md:p-10 bg-white bg-opacity-80 rounded-lg shadow-lg justify-center">
          <h3 className="text-7xl uppercase font-clone font-extrabold text-purp-dark text-center">
            Never miss a drop
          </h3>
          <h3 className="text-xl font-ibm font-bold text-purp-dark text-center">
            Join the Doc J&apos;s Newsletter for the latest from the Lab.
          </h3>
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
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
