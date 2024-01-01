/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, FieldArrayRenderProps } from "formik";
import React from "react";

interface IUserFriendsProps extends FieldArrayRenderProps {
  // additional props
}

const UserFriends: React.FC<IUserFriendsProps> = ({
  name,
  form: { values },
  ...arrayHelpers
}) => {
  const friends = values[name];

  const addFriend = () => {
    arrayHelpers.push({
      name: "",
      age: "",
    });
  };

  const deleteFriend = (index: number) => {
    arrayHelpers.remove(index);
  };

  return (
    <fieldset className="border border-1 border-gray-200 pt-2 pb-4 px-3">
      <legend className="block uppercase text-gray-700 text-xs font-bold px-2">
        Friends
      </legend>
      <div className="flex flex-col">
        {friends.map((_, index) => (
          <div key={index} className="flex items-center my-2">
            <div className="flex grow flex-1 flex-wrap my-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Name
                </label>
                <Field
                  name={`${name}.${index}.name`}
                  type="text"
                  placeholder="First Name"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Age
                </label>
                <Field
                  name={`${name}.${index}.age`}
                  type="text"
                  placeholder="Last Name"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="text-sm bg-red-400 opacity-80 hover:opacity-100 text-white py-1 px-2 rounded"
                onClick={() => deleteFriend(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="text-sm bg-gray-400 opacity-80 hover:opacity-100 text-white py-1 px-2 rounded"
          onClick={addFriend}
        >
          Add Friend
        </button>
      </div>
    </fieldset>
  );
};

export default UserFriends;
