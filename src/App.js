import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Student from "./Pages/Student";
import InfoShow from "./Pages/InfoShow";
import { useSelector } from "react-redux";
import Login from "./Pages/Login";
import Loading from "./Components/Loading";

const App = () => {
  const auth = useSelector((state) => state.user?.auth);
  const check = useSelector((state) => state.user.check);

  if (check) return <Loading />;
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Student />}></Route>
        <Route
          path="/info"
          element={auth ? <InfoShow /> : <Navigate to="/login" />}
          //element={<InfoShow />}
        ></Route>
        <Route
          path="/login"
          element={auth ? <Navigate to="/info" /> : <Login />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
