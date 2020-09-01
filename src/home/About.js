import React from "react";

const mainstyle = {
  backgroundColor: "#272456",
  color: 'white',
  height: '100%'
}
const maindivstyle = {
  margin: 'auto',
  width: '90%',
  padding: '5px'
}



const About = () => {
  return (
    <div className="main" style={mainstyle}>
      <div className="mainDiv" style={maindivstyle}>
        <h1>Polis Post</h1>
        <p>
          Polis Post is an app for campaign organizers. Organizers might be working to educate, empower, and 
          activate citizens, constituents, or the public to persuade decision-makers to take a particular action on public policy matters. 
          One effective tactic for persuading elected officials to take a specific action is through the sharing of constituents'
          testimony through emails to the legislator or their staff. <br/>
          <br />
          This is how to use this app and its purpose... <br />
          Tart icing croissant halvah chocolate cake fruitcake gummi bears
          muffin halvah. Danish marzipan gummies sweet donut pudding toffee
          candy pudding. Biscuit gummies dragée chocolate.
        </p>

        <p>
          There are several 
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

export default About;
