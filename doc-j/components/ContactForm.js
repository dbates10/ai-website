"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/input";

const ContactForm = () => {
  const [submissionText, setSubmissionText] = useState("Submitting...");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormSubmitted(true);
    console.log(data);
    // Process form data
  };

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
        <button className="bg-purp-dark text-white py-2 rounded my-4 hover:bg-green">
          <input type="submit" value="Submit" />
        </button>
        {formSubmitted && (
          <span className="text-red-400">{submissionText}</span>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
