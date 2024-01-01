import { Field, FieldProps } from "formik";
import React from "react";

interface IUserAddressProps extends FieldProps {
  // additional props
}

const UserAddress: React.FC<IUserAddressProps> = ({ field: { name } }) => {
  //   const address = value;
  return (
    <fieldset className="border border-1 border-gray-200 pt-2 pb-4">
      <legend className="block uppercase text-gray-700 text-xs font-bold px-2">
        Address
      </legend>
      <div className="grid grid-cols-2 gap-4">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="city"
          >
            City
          </label>
          <Field
            type="text"
            name={`${name}.city`}
            placeholder="Enter your city"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>

        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="state"
          >
            State
          </label>
          <Field
            type="text"
            name={`${name}.state`}
            placeholder="Enter your state"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>

        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="country"
          >
            Country
          </label>
          <Field
            type="text"
            name={`${name}.country`}
            placeholder="Enter your country"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>

        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="pincode"
          >
            Pincode
          </label>
          <Field
            type="text"
            name={`${name}.pincode`}
            placeholder="Enter your pincode"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
      </div>
    </fieldset>
  );
};

export default UserAddress;
