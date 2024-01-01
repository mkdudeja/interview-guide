/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, FieldArray, FieldArrayRenderProps, FieldProps, Form, Formik } from "formik";
import React from "react";
import UserAddress from "./user-address.component";
import UserFriends from "./user-friends.component";

const user = {
  name: "",
  dob: "",
  likes: [],
  address: {
    city: "",
    state: "",
    country: "",
    pincode: "",
  },
  friends: [
    {
      name: "",
      age: "",
    },
  ],
};

const FormikNested: React.FC = () => {
  const handleSubmit = (values) => {
    console.log("values", values);
    // submit to server
  };

  return (
    <Formik initialValues={user} onSubmit={handleSubmit}>
      <Form className="flex flex-col space-y-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name
            </label>
            <Field
              name="name"
              type="text"
              placeholder="First Name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              DOB
            </label>
            <Field name="dob">
              {({
                field: { name, value },
                form: { setFieldValue, setFieldTouched },
              }: FieldProps) => (
                <input
                  type="date"
                  name={name}
                  value={value}
                  onChange={(e) => {
                    setFieldValue(name, e.target.value);
                    setFieldTouched(name, true);
                  }}
                  placeholder="DOB"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                />
              )}
            </Field>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Likes
            </label>
            <Field name="likes">
              {({ field }: FieldProps) => (
                <select
                  multiple
                  {...field}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                >
                  <option value="Sports">Sports</option>
                  <option value="Movies">Movies</option>
                  <option value="Reading">Reading</option>
                  <option value="Coding">Coding</option>
                  <option value="Travelling">Travelling</option>
                </select>
              )}
            </Field>
          </div>
        </div>

        <Field name="address">
          {(props: FieldProps) => <UserAddress {...props} />}
        </Field>

        <FieldArray name="friends">
          {(props: FieldArrayRenderProps) => <UserFriends {...props} />}
        </FieldArray>

        <div className="flex justify-end">
          <button
            type="submit"
            className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormikNested;
