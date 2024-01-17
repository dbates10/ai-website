"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useForm as useFormspree, ValidationError } from "@formspree/react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/input";

const ContactForm = () => {
  const [formspreeState, formSubmitHandler] = useFormspree("xjvnbpqv"); // Replace with your Formspree form ID
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    formSubmitHandler(data);
  };

  if (formspreeState.succeeded) {
    return (
      <div className="flex flex-col md:w-1/2 order-1 md:order-2 justify-center items-center">
        <p className="text-md md:text-xl font-ibm font-bold text-purp-dark text-left md:text-center pt-4">
          Thanks for reaching out! <br /> We will be in contact with you in the
          next 1-2 business days.
        </p>
        <p className="text-md md:text-xl font-ibm font-bold text-purp-dark text-left md:text-center pt-4">
          In the meantime, give us a follow on our social media accounts to see
          what we&apos;ve been up to lately.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:w-1/2 order-1 md:order-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 w-full text-xl outline-purp-light mx-auto font-clone text-purp-dark justify-center mt-4"
      >
        <label className="mt-2">Name:</label>
        <input
          {...register("name", { required: true })}
          className="pl-2 pt-2 rounded h-10 focus:outline focus:outline-purp-light outline-offset-2 shadow-md"
        />
        {errors.name && <span className="text-red-400">Name is required</span>}

        <label className="mt-2">Email address:</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="pl-2 pt-2 rounded h-10 focus:outline focus:outline-purp-light outline-offset-2 shadow-md"
        />
        {errors.email && (
          <span className="text-red-400">Email is required</span>
        )}

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
              className="pl-2 pt-2 rounded h-10 focus:outline focus:outline-purp-light outline-offset-2 shadow-md"
            />
          )}
        />
        {errors.phone && (
          <span className="text-red-400">Phone number is required</span>
        )}

        <label className="mt-2">Date of Birth:</label>
        <input
          type="date"
          {...register("birthdate", { required: true })}
          className="pl-2 pt-2 rounded h-10 focus:outline focus:outline-purp-light outline-offset-2 shadow-md"
        />
        {errors.birthdate && (
          <span className="text-red-400">Birthdate is required</span>
        )}

        <label className="mt-2">Reason for reaching out:</label>
        <textarea
          {...register("reason", { required: true })}
          className="pl-2 pt-2 rounded h-20 focus:outline focus:outline-purp-light outline-offset-2 shadow-md"
        ></textarea>
        {errors.reason && (
          <span className="text-red-400">This field is required</span>
        )}
        <button
          type="submit"
          disabled={formspreeState.submitting}
          className="bg-purp-dark text-white py-2 rounded my-4 hover:bg-green"
        >
          Submit
        </button>

        {formspreeState.errors && formspreeState.errors.length > 0 && (
          <span className="text-red-400">Submission failed</span>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
