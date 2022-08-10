import React from 'react';
// import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Come Build Something Amazing With Me</h1>
      <p>I&apos;m a third-year Computer Science major at Bennett University, Greater Noida. I have developed a great interest in the field of Web Developement and Machine Learning after having been introduced to it in our coursework. I&apos;m extremely interested in developing cutting edge websites and a good internship would consolidate my future career  choice. I&apos;m personally interested in the creating fully fast, scalable and reactive websites, I also some experience in building machine learning and deep learning systems.</p>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
