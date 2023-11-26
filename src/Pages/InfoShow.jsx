import React, { useEffect, useRef, useState } from "react";
import UpdateModalComponent from "../Components/UpdateModalComponent";
import postServices from "../services/postServices";
import toast from "react-hot-toast";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { Button } from "react-bootstrap";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const InfoShow = () => {
  const [posts, setPosts] = useState([]);
  const tableRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchPosts = async () => {
    const { data } = await postServices.get();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  const deletePost = async (id, e) => {
    await postServices.delete(id);
    fetchPosts();
  };

  const handelLogout = async () => {
    await authService.logout();
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <div className="container">
      <div>
        <div className="my-10 bg-slate-200 rounded-sm">
          <h1 className="text-3xl font-bold text-center">
            Enrollment Students Description
          </h1>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-3">
        <Button variant="danger" onClick={handelLogout}>
          Logout
        </Button>
        <DownloadTableExcel
          filename="student table"
          sheet="student"
          currentTableRef={tableRef.current}
        >
          <Button variant="success"> Export excel </Button>
        </DownloadTableExcel>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
        {posts !== undefined && posts?.length > 0 && (
          <>
            <table
              className="w-full text-sm text-left rtl:text-right text-gray-500 "
              ref={tableRef}
            >
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    First Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Last Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Website
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Skills
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts?.map((curElem) => (
                  <tr className="bg-white border-b " key={curElem._id}>
                    <td className="px-6 py-4">{curElem.firstName}</td>
                    <td className="px-6 py-4">{curElem.lastName}</td>
                    <td className="px-6 py-4">{curElem.gender}</td>
                    <td className="px-6 py-4">{curElem.phone}</td>
                    <td className="px-6 py-4">{curElem.email}</td>
                    <td className="px-6 py-4">
                      <a href={curElem.website}>Link</a>
                    </td>
                    <td className="px-6 py-4">
                      {curElem.java ? <div>Java</div> : ""}
                      {curElem.html ? <div>Html</div> : ""}
                      {curElem.css ? <div>Css</div> : ""}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="text-white bg-red-400 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2.5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-1"
                        id={curElem._id}
                        onClick={(e) => deletePost(curElem._id, e)}
                      >
                        Delete
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <UpdateModalComponent
                        id={curElem._id}
                        fname={curElem.firstName}
                        lname={curElem.lastName}
                        phone={curElem.phone}
                        email={curElem.email}
                        website={curElem.website}
                        gender={curElem.gender}
                        java={curElem.java}
                        css={curElem.css}
                        html={curElem.html}
                        fetchPosts={fetchPosts}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoShow;
