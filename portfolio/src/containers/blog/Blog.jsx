import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Here are some fun <br /> snippets of information</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 10, 2022" text="A very cool looking Computer Science blog post" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 10, 2022" text="A very cool looking Computer Science blog post" />
        <Article imgUrl={blog03} date="Sep 10, 2022" text="A very cool looking Computer Science blog post" />
        <Article imgUrl={blog04} date="Sep 10, 2022" text="A very cool looking Computer Science blog post" />
        <Article imgUrl={blog05} date="Sep 10, 2022" text="A very cool looking Computer Science blog post" />
      </div>
    </div>
  </div>
);

export default Blog;
