import React from "react";
import MainBody from "./ComponentTree/main";
import Header from "./ComponentTree/Header/Heading";
import NavBar from "./ComponentTree/NavBar/NavBar";
import CookBook from "./ComponentTree/CookBook/Cookbook";
import Patreon from "./ComponentTree/Patreon/Patreon";
import Subscribe from "./ComponentTree/Subscribe/Subsrcibe";
import Api from "./ComponentTree/APICall/Api";
import Recepies from "./ComponentTree/Recepies/Recepies";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <CookBook />
      <Api />
      <Recepies />
      <Patreon />
      <Subscribe />
    </div>
  );
}

export default App;
