import { useState } from "react";
import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const [items, setItems] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    website: "",
    gender: "",
    java:"",
    css:"",
    html:""
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setItems(data);
  };
  console.log(items);
  return (
    <>
      <div className="m-5">
        <div className="grid	grid-cols-2	 gap-5">
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
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="First Name"
                    //required
                    {...register("fname", { required: true })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Last Name"
                    {...register("lname", { required: true })}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Phone Number"
                    {...register("phone", { required: true })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Website Link"
                    {...register("website", { required: true })}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email Address"
                  {...register("email", { required: true })}
                />
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                  Gender
                </h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="horizontal-list-radio-license"
                        type="radio"
                        value="male"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        {...register("gender")}
                      />
                      <label
                        htmlFor="horizontal-list-radio-license"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Male
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="horizontal-list-radio-id"
                        type="radio"
                        value="female"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        {...register("gender")}
                      />
                      <label
                        htmlFor="horizontal-list-radio-id"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Female
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="horizontal-list-radio-millitary"
                        type="radio"
                        value="other"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        {...register("gender")}
                      />
                      <label
                        htmlFor="horizontal-list-radio-millitary"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Other
                      </label>
                    </div>
                  </li>
                </ul>
                </div>
                <div>

          
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                  Skills
                </h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="vue-checkbox-list"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        value="java"
                        {...register("java")}

                      />
                      <label
                        htmlFor="vue-checkbox-list"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Java
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="react-checkbox-list"
                        type="checkbox"
                        value="html"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        {...register("html")}
                      />
                      <label
                        htmlFor="react-checkbox-list"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        HTML
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="angular-checkbox-list"
                        type="checkbox"
                        value="css"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        {...register("css")}
                      />
                      <label
                        htmlFor="angular-checkbox-list"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        CSS
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
          <div>
            <div>
              <div className="my-10 bg-slate-200 rounded-sm">
                <h1 className="text-3xl font-bold text-center">
                  Enrollment Students Description
                </h1>
              </div>
            </div>



            <div className=" py-12 px-24 m-32 bg-slate-100 rounded-md">

              
              
              {items.fname===''?<div className="text-center	text-xl	font-semibold">No Records</div>:<ul><li>
                  <span className="font-bold">First Name: </span>
                  {items.fname}
                </li>
                <li>
                <span className="font-bold">Last Name: </span>
                {items.lname}
              </li>
              <li>
                <span className="font-bold"> Gender: </span>
                {items.gender}
              </li>
              <li>
                <span className="font-bold"> Phone: </span>
                {items.phone}
              </li>
              <li>
                <span className="font-bold"> Email: </span>
                {items.email}
              </li>
              <li>
                <span className="font-bold"> Website: </span>
                {items.website}
              </li>
              <li className="flex space-x-2 ">
              <span className="font-bold"> Skills: </span>
                <div>{items.java} </div>
                 <div>{items.css}</div>
                <div>{items.html}</div>
                
              </li>
              </ul>
                
                }
                
              
              {/*items.map((curElem)=>{
                return(
                  <>
                      <li>{curElem}</li>
                  </>
                )
              })
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
