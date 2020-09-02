import React from "react";
const mainstyle = {
  backgroundColor: "#272456",
  color: "white",
  height: "100%",
};
const maindivstyle = {
  margin: "auto",
  width: "90%",
  padding: "5px",
};
const Blog = () => {
  return (
    <div className="main" style={mainstyle}>
      <div className="mainDiv" style={maindivstyle}>
        <h1>The Making of Polis Post</h1>
        <p>
          Hi! My name is Lauren Alayza and I created this app as a part of the
          Eleven Fifty Academy Blue Badge project. In this blog, I will share
          what it was like getting to where I am at today with this app. I
          started Blue Badge at the end of June 2020 and began with learning
          about adding on to Arrays, mapping them, filtering through them and
          more. After the first few weeks of introduction to the server side,
          the cohort began working through assignments and activities to create
          our first Node server.
        </p>
        <p>
          In creating the Node server, I learned about ways to check my client
          side without having ever built it by using tools like PG Admin and
          Postman.
        </p>
        <p>And THEN... (to be continued)</p>
      </div>
    </div>
  );
};

export default Blog;
