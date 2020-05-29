import React from "react";

import "./Blog.css";
import SectionLayout from "../../UI/SectionLayout/SectionLayout";
import SectionHeader from "../../UI/SectionHeader/SectionHeader";
import TestImage from "../../../assets/slider/red-moon.jpg";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      blog_title: "Why Lead Generation is Key for Business Growth",
      blog_date: "JUNE 21, 2020",
      blog_excerpt:
        " A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      id: 2,
      blog_title: "Why Lead Generation is Key for Business Growth",
      blog_date: "JUNE 21, 2020",
      blog_excerpt:
        " A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      id: 3,
      blog_title: "Why Lead Generation is Key for Business Growth",
      blog_date: "JUNE 21, 2020",
      blog_excerpt:
        " A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      id: 4,
      blog_title: "Why Lead Generation is Key for Business Growth",
      blog_date: "JUNE 21, 2020",
      blog_excerpt:
        " A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];

  return (
    <SectionLayout>
      <SectionHeader titleone="Blog" titletwo="Blog" />
      <div className="section-info">
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
      <div className="blog-wrap">
        <div className="row">
          {blogData.map((blog, key) => {
            return (
              <div key={key} className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <div className="single-blog">
                  <div className="blog-image">
                    <img src={TestImage} alt="Not Found" />
                  </div>
                  <div className="blog_data">
                    <div className="publish_date">
                      <small>{blog.blog_date}</small>
                    </div>
                    <div className="blog_title">
                      <p>{blog.blog_title}</p>
                    </div>
                    <div className="blog_excerpt">
                      <p>{blog.blog_excerpt}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Blog;
