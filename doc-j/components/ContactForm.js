"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/input";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Process form data
  };

  return (
    <div className="flex flex-col py-20 bg-[url(/swirl.svg)] bg-cover bg-no-repeat items-center justify-center">
      <div className="p-10 md:w-2/3 bg-white bg-opacity-80 rounded-lg shadow-lg justify-center mx-2">
        <h3 className="text-5xl md:text-7xl uppercase font-clone font-extrabold text-purp-dark text-left md:text-center">
          Contact Us
        </h3>
        <h3 className="text-md md:text-xl my-4 font-ibm font-bold text-purp-dark text-left md:text-center">
          Please reach out to us using the contact form below if you have any
          questions for us! Whether you are new to cannabis or an experienced
          connoisseur; I am confident that we can help you find what you need.
        </h3>

        <h3 className="text-md md:text-xl font-ibm font-bold text-purp-dark text-left md:text-center pt-4">
          Businesses, entrepreneurs, and hobbyists are welcome to contact us as
          well to learn more about our consultation services and wholesale
          programs!
        </h3>

        <div className="flex flex-col">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 w-full text-xl outline-purp-light mx-auto font-clone text-purp-dark justify-center mt-4 md:w-2/2"
          >
            <label className="mt-2">Name:</label>
            <input
              {...register("name", { required: true })}
              className="rounded h-10 focus:outline focus:outline-purp-light outline-offset-2 shadow-md"
            />
            {errors.name && <span>Name is required</span>}

            <label className="mt-2">Email address:</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="rounded h-10 focus:outline focus:outline-purp-light outline-offset-2 shadow-md"
            />
            {errors.email && <span>Email is required</span>}

            <label className="mt-2">Phone Number:</label>
            <Controller
              name="phone"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  country="US"
                  defaultCountry="US"
                  className="rounded h-10 focus:outline focus:outline-purp-light outline-offset-2 shadow-md"
                />
              )}
            />
            {errors.phone && <span>Phone number is required</span>}

            <label className="mt-2">Date of Birth:</label>
            <input
              type="date"
              {...register("birthdate", { required: true })}
              className="rounded h-10 focus:outline focus:outline-purp-light outline-offset-2 shadow-md"
            />
            {errors.birthdate && <span>Birthdate is required</span>}

            <label className="mt-2">Reason for reaching out:</label>
            <textarea
              {...register("reason", { required: true })}
              className="rounded h-10 focus:outline focus:outline-purp-light outline-offset-2 shadow-md"
            ></textarea>
            {errors.reason && <span>This field is required</span>}
            <button className="bg-purp-dark text-white py-2 rounded my-4 hover:bg-green">
              <input type="submit" value="Submit" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
