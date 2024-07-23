/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am Mohd Kaif, a B.Tech CSE student passionate about technology. Proficient in Python and adept at interacting with OS using Python, I am on a continuous journey of exploration and learning. My evolving skill set includes Cloud Computing, Cryptography, Cybersecurity, Android Development, Web Development, and Game Development. As a result, I am well-versed in Kotlin, C#, Javascript, HTML, XML, CSS, SQL, and Linux. Additionally, my expertise extends to areas such as REGEX, troubleshooting, OOPs, configuration, Git, Github, troubleshooting and debugging techniques, Python testing, and scripting. Eager to contribute and make a mark in the dynamic field of technology.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web development",
  "Game development",
  "Python",
  "Web UI/UX",
  "Mobile user interfaces",
  "DS & Algo",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By learning new skills, and exploring thing the Vast Field of Computer Science, I have gained a lot of experience and knowledge. I am always eager to learn new things and apply them to solve real-world problems. ";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
