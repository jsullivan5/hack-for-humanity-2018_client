import React from 'react';
import photo from '../../assets/volunteer.jpg';
import photo2 from '../../assets/donate.jpg';

const Home = () => (
  <div id="wrapper">
    <div className="hero-pic" style={{ height: '90vh' }}>
      <div className="callout">
        <p className="center-text">Mentor.</p>
        <p className="center-text">Be Mentored.</p>
        <button className="button" type="button">Tell Us Your Story</button>
        <button className="button" type="button">Hear the Wise</button>
      </div>
    </div>
    <div className ="div-color">
      <h1 className = "center-main-text">MENTORING</h1>
      <video className = "video" width="320" height="240" controls>
      <source src="../../assets/interview-1.MOV" type="video/MOV"></source>
    </video><br></br>
    <button className="button-large" type="button">Learn More About Mentoring</button>
    </div>
    <div className="div">
      <div className="half-div">
        <img className="photo" src={photo} alt="Volunteer Today" />
      </div>
      <div className="half-div">
        <h2 className="center-text">Volunteer</h2>
        <p className="center-text">There are many ways you can contribute with this community’s ongoing success. Spread the word! Do you know somebody who is looking for advice or interested in mentoring? We can expand this kind and helpful community through people like you. Sign up to mentor or even help maintain this website. The possibilities are endless!</p>
      </div>
      <button className="button-large" type="button">Learn More About the Possibilities of Mentoring</button>
    </div>
    <div className ="div-color">
    <div className="half-div">
      <h2 className="center-text">Donate</h2>
      <p className="center-text">We aspire to bring together these different generations in a one on one digital environment, fostering mutually beneficial dialogues, where questions on specific topics are answered and personal connections are enhanced. </p>
    </div>
    <div className="half-div">
      <img className="photo" src={photo2} alt="Volunteer Today" />
    </div>
    <button className="button-large" type="button">Learn More About the Possibilities of Mentoring</button>
    </div>
  </div>
);

export default Home;
