"use client";
import { useForm } from "react-hook-form";

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-col py-20 bg-[url(/swirl.svg)] bg-cover bg-no-repeat items-center justify-center">
        <div className="p-10 bg-white bg-opacity-80 rounded-lg shadow-lg justify-center">
          <h3 className="text-7xl uppercase font-clone font-extrabold text-purp-dark text-center">
            Never miss a drop
          </h3>
          <h3 className="text-xl font-ibm font-bold text-purp-dark text-center">
            Join the Doc J&apos;s Newsletter for the latest from the Lab.
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-center mt-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className={`p-2 rounded-l-lg border-2 focus:outline focus:outline-green ${
                errors.email ? "border-red-500" : "border-purp-dark"
              }`}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
            <button
              type="submit"
              className="bg-purp-dark text-white p-2 rounded-r-lg border-2 border-purp-dark"
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
