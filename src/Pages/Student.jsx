import { useForm } from "react-hook-form";
import postServices from "../services/postServices";
import ".././App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Student() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const res = await postServices.create(data);
    console.log(res);
    reset();
  };

  return (
    <>
      <div className="container">
        <div className="">
          <div>
            <div className="my-10 bg-slate-200 rounded-sm">
              <h1 className="text-3xl font-bold text-center">
                Student Enrollment Form
              </h1>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-24 py-12 bg-slate-100 rounded-md"
            >
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="First Name"
                    {...register("fname", { required: true })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Last Name"
                    {...register("lname", { required: true })}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Phone Number"
                    {...register("phone", { required: true })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Website Link"
                    {...register("website", { required: true })}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="Email Address"
                  {...register("email", { required: true })}
                />
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-gray-900 ">
                  Gender
                </h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                    <div className="flex items-center pl-3">
                      <input
                        id="horizontal-list-radio-license"
                        type="radio"
                        value="male"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        {...register("gender")}
                      />
                      <label
                        htmlFor="horizontal-list-radio-license"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                      >
                        Male
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                    <div className="flex items-center pl-3">
                      <input
                        id="horizontal-list-radio-id"
                        type="radio"
                        value="female"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        {...register("gender")}
                      />
                      <label
                        htmlFor="horizontal-list-radio-id"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                      >
                        Female
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                    <div className="flex items-center pl-3">
                      <input
                        id="horizontal-list-radio-millitary"
                        type="radio"
                        value="other"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        {...register("gender")}
                      />
                      <label
                        htmlFor="horizontal-list-radio-millitary"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                      >
                        Other
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-gray-900 ">
                  Skills
                </h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                    <div className="flex items-center pl-3">
                      <input
                        id="vue-checkbox-list"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                        value={true}
                        {...register("java")}
                      />
                      <label
                        htmlFor="vue-checkbox-list"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                      >
                        Java
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                    <div className="flex items-center pl-3">
                      <input
                        id="react-checkbox-list"
                        type="checkbox"
                        value={true}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                        {...register("html")}
                      />
                      <label
                        htmlFor="react-checkbox-list"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                      >
                        HTML
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                    <div className="flex items-center pl-3">
                      <input
                        id="angular-checkbox-list"
                        type="checkbox"
                        value={true}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                        {...register("css")}
                      />
                      <label
                        htmlFor="angular-checkbox-list"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                      >
                        CSS
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student;
