import React from "react";
const mainstyle = {
  backgroundColor: "#474973",
  color: 'white',
  height: '100%'
}
const maindivstyle = {
  margin: 'auto',
  width: '90%',
  padding: '5px'
}
const Blog = () => {
  return (
    <div className="main" style={mainstyle}>
      <div className="mainDiv" style={maindivstyle}>
        <h1>Let me tell you about how I made this app!</h1>
        <p>
        First I made my server <br />
          Next I made the client <br />
          Tart icing croissant halvah chocolate cake fruitcake gummi bears
          muffin halvah. Danish marzipan gummies sweet donut pudding toffee
          candy pudding. Biscuit gummies dragée chocolate.
        </p>
        <ul>
          <li>Testing </li>
          <li>Testing </li>
          <li>Testing </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
