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

const About = () => {
  return (
    <div className="main" style={mainstyle}>
      <div className="mainDiv" style={maindivstyle}>
        <h1>About Polis Post</h1>
        <p>
          Polis Post is an app for campaign organizers. Organizers might be
          working to educate, empower, and activate citizens, constituents, or
          the public to persuade decision-makers to take a particular action on
          public policy matters. One effective tactic for persuading elected
          officials to take a specific action is through the sharing of
          constituents' testimony through emails to the legislator or their
          staff.{" "}
        </p>
        <p>
          With social distancing precautions in place around the county,
          constituents need a reliable method of sharing their testimony,
          especially when legislators are in session discussing and voting on
          policies. Email has already proven to be effective in reaching elected
          officials, or at least their legislative assistants who can tally
          emails and report back to the legislator.
        </p>

        <p>
          This project inspires me to pull from my past experiences and
          knowledge of campaign organization, & legislative and constituent
          services. Throughout this project, I have spoken to legislative
          assistants currently serving in the Indiana House of Representatives
          who read, forward, tally, and respond to constituent emails every day.
          These conversations and experiences have helped me put together a list
          of tips that constituents can use when sharing their story and views
          with elected officials.
        </p>
        <ul>
          <li>
            Make sure you are emailing YOUR elected official. You can check who
            your elected officials are (if you live in Indiana) at this website:
            http://iga.in.gov/legislative/find-legislators/
          </li>
          <li>
            Be aware of the timing of your email. Indiana state legislators are
            in session (discussing and voting on policies) from January - May
            (or March if it is a short session AKA not a budget year.) Your
            email is likely to have more of an impact if the elected official
            receives it during the legislative session.
          </li>
          <li>
            Make your emails as short and detailed as possible. Less than 3,000
            characters is ideal.
          </li>
          <li>
            When writing an email, remember the 5W's: Who, What, When, Where,
            Why.
            <ul class="circle">
              <li>
                <u>Who:</u> State your full, real name and that you are a
                constituent, meaning you live in the district the elected
                official serves. This information is key to helping your email
                have the most impact.
              </li>
              <li>
                <u>What:</u> If you are emailing an elected official during the
                legislative session, be sure to check that the issue you are
                emailing about has a bill that could be referenced. You can
                check if there is a bill that is being heard in committees at
                this link: http://iga.in.gov/ If the issue you are emailing
                about does not have a bill related to it, be specific about
                describing the issue and proposing a specific action you wish
                the elected official to take.
              </li>
              <li>
                <u>When:</u> Timing is important when it comes to requesting an
                elected official to take action on a specific issue. For
                example, if elected officials are not currently in the
                legislative session, but rather the interim, then you could
                request the legislator write or sponsor a bill for the upcoming
                session that addresses the issue at hand. Additionally, knowing
                when a bill is being heard in commitee dueing the legislative
                session is important because if the bill does not have enough
                support from a majority of the legislators in the committee it
                will not move forward to the next step in the legislative
                process and the bill will be "dead."
              </li>
              <li><u>Where:</u> Be sure to mention where you can be contacted in your email. 
              Sometimes elected officials like to respond directly to a constituent, 
              and need to know your email address or phone number. </li>
              <li><u>Why:</u> Why are you emailing the legislator about a particular issue? Did you come across new research? 
              Do you have a personal experience that is relevant to share? Be detailed in your messaging and share resources that might help inform or educate. </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
