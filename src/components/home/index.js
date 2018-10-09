import React, { Fragment } from 'react';
import photo from '../../assets/volunteer.jpg';
import photo2 from '../../assets/donate.jpg';

const Home = () => (
  <Fragment>
    <div className="hero-pic">
      <div className="callout">
        <p className="center-text">Mentor.</p>
        <p className="center-text">Be Mentored.</p>
        <button className="button" type="button">
          Tell Us Your Story
        </button>
        <button className="button" type="button">
          Hear the Wise
        </button>
      </div>
    </div>
    <div className="div-color">
      <h1 className="center-main-text">MENTORING</h1>
      <iframe
        title="about-mentoring"
        width="660 "
        height="415"
        src="https://www.youtube.com/embed/WXEtTxviuUo"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <br />
      <button style={{ width: '300px '}} className="button-large" type="button">
        Become a Mentor
      </button>
    </div>
    <div className="div section-container">
      <div className="half-div">
        <img className="photo" src={photo} alt="Volunteer Today" />
      </div>
      <div className="half-div">
        <h2 className="center-text">Volunteer</h2>
        <p className="center-text">
          There are many ways you can contribute with this community’s ongoing
          success. Spread the word! Do you know somebody who is looking for
          advice or interested in mentoring? We can expand this kind and helpful
          community through people like you. Sign up to mentor or even help
          maintain this website. The possibilities are endless!
        </p>
        <button className="button-large" type="button">
          Get Involved
        </button>
      </div>
    </div>
    <div className="div-color section-container">
      <div className="half-div">
        <h2 className="center-text">Donate</h2>
        <p className="center-text">
          We aspire to bring together these different generations in a one on
          one digital environment, fostering mutually beneficial dialogues,
          where questions on specific topics are answered and personal
          connections are enhanced.{' '}
        </p>
        <button className="button-large" type="button">
          Become a Contributor
        </button>
      </div>
      <div className="half-div">
        <img className="photo" src={photo2} alt="Volunteer Today" />
      </div>
    </div>
  </Fragment>
);

export default Home;
