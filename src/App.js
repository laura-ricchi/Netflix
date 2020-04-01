import React from "react";
import "./App.css";
import data from "./movies.json";
import Section from "./components/Section";
import Logo from "./img/Logo_Netflix.png";
import { Helmet } from "react-helmet";

console.log(data);
// afficher les sections

const App = () => {
  const tab = [];
  for (let i = 0; i < data.length; i++) {
    const name = data[i].category;
    const movies = data[i].images;
    tab.push(<Section category={name} images={movies} />);
  }
  return (
    <div>
      <Helmet>
        <title>Netflix</title>
      </Helmet>
      <img src={Logo} alt="logo-Netflix" className="logo" />
      <div>{tab}</div>
    </div>
  );
};
export default App;
