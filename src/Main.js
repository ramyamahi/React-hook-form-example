import React from 'react';
import useForm from "react-hook-form";

const Main = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="email"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address"
          }
        })}
      />
      <span className="error-message">{errors.email && errors.email.message}</span>

      <input
        name="username"
        ref={register({
          required: 'Required',
          validate: value => value === "admin" || "Invalid name"
        })}
      />
      <span className="error-message">{errors.username && errors.username.message}</span>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Main;
