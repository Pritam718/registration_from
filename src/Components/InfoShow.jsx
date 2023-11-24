import React, { useEffect, useState } from 'react'
import UpdateModalComponent from './UpdateModalComponent'
import postServices from '../services/postServices';
import toast from 'react-hot-toast';

const InfoShow = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const { data } = await postServices.getPost();
        setPosts(data?.data);
    };

    useEffect(() =>{
        fetchPosts();
    }, []);

    console.log(posts);

    const deletePost = async (id, e) => {
        var response = await postServices.deletePost(id);
        if (response.data.success === true) {
          toast(response.data.msg, {
            style: {
              borderRadius: "10px",
              background: "#8b0000",
              color: "#fff",
            },
          });
          fetchPosts();
        } else {
          alert(response.data.msg);
        }
      };
  return (
    <div>
            <div>
              <div className="my-10 bg-slate-200 rounded-sm">
                <h1 className="text-3xl font-bold text-center">
                  Enrollment Students Description
                </h1>
              </div>
            </div>

            <div className=" py-12 px-24 m-32 bg-slate-100 rounded-md">
              {posts !== undefined && posts?.length > 0 && (
                <>
                  {posts?.map((curElem) => (
                    <div key={curElem._id}>
                      <ul>
                        <li>
                          <span className="font-bold">First Name: </span>
                          {curElem.firstName}
                        </li>
                        <li>
                          <span className="font-bold">Last Name: </span>
                          {curElem.lastName}
                        </li>
                        <li>
                          <span className="font-bold"> Gender: </span>
                          {curElem.gender}
                        </li>
                        <li>
                          <span className="font-bold"> Phone: </span>
                          {curElem.phone}
                        </li>
                        <li>
                          <span className="font-bold"> Email: </span>
                          {curElem.email}
                        </li>
                        <li>
                          <span className="font-bold"> Website: </span>
                          {curElem.website}
                        </li>
                        <li className="flex space-x-2 ">
                          <span className="font-bold"> Skills: </span>
                          {curElem.java ? <div>Java</div> : ""}
                          {curElem.html ? <div>Html</div> : ""}
                          {curElem.css ? <div>Css</div> : ""}
                        </li>

                        <li className="my-1">
                          <button
                            className="text-white bg-red-400 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2.5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-1"
                            id={curElem._id}
                            onClick={(e) => deletePost(curElem._id, e)}
                          >
                            Delete
                          </button>
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
                        </li>
                      </ul>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
  )
}

export default InfoShow
