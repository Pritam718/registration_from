import React, { useEffect, useState } from 'react'
import { Modal,Button } from 'react-bootstrap';
import postServices from '../services/postServices';
//import toast from 'react-hot-toast';

const UpdateModalComponent = (props) => {
    const [isShow,invokeModal]=useState(false);
    const initModal=()=>{
       return invokeModal(!isShow);
    }

    const[fname,setFname]=useState(props.fname);
    const[lname,setLname]=useState(props.lname);
    const[phone,setPhone]=useState(props.phone);
    const[email,setEmail]=useState(props.email);
    const[website,setWebsite]=useState(props.website);
    const[gender,setGender]=useState(props.gender);
    const[java,setJava]=useState(props.java);
    const[css,setCss]=useState(props.css);
    const[html,setHtml]=useState(props.html);
    const[id,setId]=useState(props.id);
    

    const handleSubmit=async(event)=>{
        event.preventDefault();


        const payload={
          firstName: fname,
          lastName: lname,
          phone: phone,
          email: email,
          website: website,
          gender: gender,
          java: java,
          html: html,
          css: css,
      }
        
        
       postServices.update(id,payload);
       props.fetchPosts();
     
       initModal();
    }

    useEffect(()=>{props.fetchPosts()},[])
  return (
    
    <>
      <Button variant='success' onClick={initModal}>
        Edit
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
            <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
            <Modal.Body>
            <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="First Name"
                    value={fname}
                    onChange={event=>setFname(event.target.value)}
                    
                  />
                <br/>
                <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Last Name"
                    value={lname}
                    onChange={event=>setLname(event.target.value)}
                  />
                  <br/>
                  <input
                    type="tel"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={event=>setPhone(event.target.value)}
                  />
                  <br/>
                  <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email Address"
                  value={email}
                  onChange={event=>setEmail(event.target.value)}
                />

                <br/>
                <input
                    type="url"
                    id="website"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Website Link"
                    value={website}
                    onChange={event=>setWebsite(event.target.value)}
                  />
                <br/>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        type="radio"
                        value="male"
                        id='male'
                        name='gender'
                        checked={gender==='male'}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        onChange={event=>setGender(event.target.value)}
                      />
                      <label
                        htmlFor='male'
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Male
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        
                        type="radio"
                        value="female"
                        name='gender'
                        id='female'
                        checked={gender==='female'}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        onChange={event=>setGender(event.target.value)}
                      />
                      <label
                        htmlFor='female'
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Female
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        
                        type="radio"
                        value="other"
                        name='gender'
                        id='other'
                        checked={gender==='other'}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        onChange={event=>setGender(event.target.value)}
                      />
                      <label
                        htmlFor='other'
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Other
                      </label>
                    </div>
                  </li>
                </ul>  

                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                       
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        checked={java}
                        onChange={event=>{setJava(event.target.checked)}}

                      />
                      <label
                        
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Java
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        
                        type="checkbox"
                        
                        checked={html}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        onChange={event=>setHtml(event.target.checked)}
                      />
                      <label
                        
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        HTML
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                       
                        type="checkbox"
                        
                        checked={css}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        onChange={event=>setCss(event.target.checked)}
                      />
                      <label
                       
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        CSS
                      </label>
                    </div>
                  </li>
                </ul>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger' onClick={initModal}>
                    Close
                </Button>
                <Button type='submit' variant='dark'>
                    Update
                </Button>
            </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default UpdateModalComponent
