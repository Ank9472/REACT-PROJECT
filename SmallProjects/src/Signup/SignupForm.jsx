import React from 'react';

function SignupForm() {
  function handleSubmit (e) {
    
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const unemployed = formData.get("employmentStatus");
    console.log({ email, password, unemployed });
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-teal-500 rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold">Signup Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Employment Status:
          </label>
          <div className="flex items-center">
            <input
              className="mr-2 leading-tight"
              type="radio"
              id="unemployed"
              name="employmentStatus"
              value="unemployed"
            />
            <label className="text-white" htmlFor="unemployed">
              Unemployed
            </label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2 leading-tight"
              type="radio"
              id="part-time"
              name="employmentStatus"
              value="part-time"
            />
            <label className="text-white" htmlFor="part-time">
              Part-time
            </label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2 leading-tight"
              type="radio"
              id="full-time"
              name="employmentStatus"
              value="full-time"
            />
            <label className="text-white" htmlFor="full-time">
              Full-time
            </label>
          </div>
        </div>
    <button className="ml-32 pb-2 bg-red-800 rounded-md">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
