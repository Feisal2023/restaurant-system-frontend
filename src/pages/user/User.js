import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "../../components/user/userHome/UserHome";
import AddClient from "../../components/user/addClient/AddClient";

const User = () => {
  return (
    <div>
      <Routes>
        <Route path="home" element={<UserHome />} />
        <Route path="add-client" element={<AddClient />} />
      </Routes>
    </div>
  );
};

export default User;
