import React from "react";
import { Helmet } from "react-helmet";
import "./About.css";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Skytup - Our Story & Mission</title>
        <meta
          name="description"
          content="Learn about Skytup's journey, our mission to empower developers, and how we're shaping the future of tech education."
        />
        <meta
          name="keywords"
          content="about skytup,tech education,programming community,developer platform"
        />

        {/* OpenGraph tags */}
        <meta
          property="og:title"
          content="About Skytup - Our Story & Mission"
        />
        <meta
          property="og:description"
          content="Learn about Skytup's journey, our mission to empower developers, and how we're shaping the future of tech education."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://skytup.com/about-preview.jpg"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Skytup - Our Story & Mission"
        />
        <meta
          name="twitter:description"
          content="Learn about Skytup's journey, our mission to empower developers, and how we're shaping the future of tech education."
        />
        <meta
          name="twitter:image"
          content="https://skytup.com/about-preview.jpg"
        />
      </Helmet>

      <div className="about-container">
        <div className="about-header">
          <h1>About Us</h1>
        </div>

        <div className="about-content">
          <div className="content-section">
            <p className="subtitle">
              Discover the heart of Skytup and meet our founder, <b>Akash Vishwakarma</b>, as we
              unveil the groundbreaking technology driving our mission.
            </p>
            <p>
              At Skytup, we’re passionate about transforming education through
              innovation. Our mission is to provide you with the highest-quality
              tech content, keeping you ahead in an ever-evolving educational
              world.
            </p>
            <p>
              <b>Launched in 2021 </b> by Akash in the dynamic hub of India, Skytup was
              born from a deep love for coding and a vision to redefine
              learning. Since then, we’ve grown into a trusted resource for
              learners everywhere, constantly evolving to meet your needs.
            </p>
            <p>
              Explore our carefully designed services, created to inspire and
              elevate your learning experience. We take pride in crafting
              content that’s as rewarding to use as it is to create. Have
              questions or ideas? We’d love to hear from you—your feedback is
              what drives us to improve.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
