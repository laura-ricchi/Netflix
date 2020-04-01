import React from "react";

// afficher les catégories et les films
const Section = props => {
  const tab = [];
  console.log(props.images);

  for (let i = 0; i < props.images.length; i++) {
    tab.push(<img src={props.images[i]} alt="Netflix movies" />);
  }

  return (
    <div className="container">
      <p>{props.category}</p>
      <div className="movies-list">{tab}</div>
    </div>
  );
};

export default Section;
