import React from "react";
const mainstyle = {
  backgroundColor: "#272456",
  color: "white",
  height: "100%",
};
const maindivstyle = {
  margin: "auto",
  width: "90%",
  padding: "100px",
};
const Blog = () => {
  return (
    <div className="main" style={mainstyle}>
      <div className="mainDiv" style={maindivstyle}>
        <h1>The Making of Polis Post</h1>
        <p>
          Hi! My name is Lauren Alayza and I created this app as a part of the
          Eleven Fifty Academy Blue Badge project. I started the Blue Badge
          program at the end of June 2020 and presented it in class in early 
          September 2020. To prepare for this project, I
          created a workout log mockup app utilizing similar concepts. Next, I
          created a planning document to map out my idea for creating Polis
          Post. At the time, I didn't know what I was going to name the app. The
          idea for Polis Post's functionality was inspired by my passion for advocacy and
          helping others share their stories with decision-makers to create
          positive change.
        </p>
        <p>
          One effective method of sharing stories with legislators is through
          emails. If you have never emailed your local elected officials before
          about an issue or concern, it might be difficult to find the words or
          know where to begin when composing your message. I have created this app 
          to help others practice drafting emails before sending them, and to find 
          examples from others to pull from. Check out the About page to read about 
          tactics when sharing your testimony. 
        </p>
      </div>
    </div>
  );
};

export default Blog;
