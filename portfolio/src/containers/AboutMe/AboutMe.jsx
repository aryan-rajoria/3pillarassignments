import React from 'react';
import Feature from '../../components/feature/Feature';
import './AboutMe.css';

const AboutMe = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About Me" text="I&apos;m a Full Stack Developer located in India. I have a serious passion for UI effects, animations and creating intuitive frontend, as well as well optimized and clean backend. Interested in the entire Full-Stack spectrum and working on ambitious projects with positive people." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Well-organised person, problem solver, independent employee with high attention to detail.</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Full-Stack" text="" />
      <Feature title="ML Systems" text="" />
      <Feature title="Computer Vision" text="" />
    </div>
  </div>
);

export default AboutMe;
