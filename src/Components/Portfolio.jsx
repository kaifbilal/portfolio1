/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Kaif.jpg";

const imageAltText = "Muhammad Kaif pic standing besides a poll on a brigde with sunset in amidst of trees and greeny.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Game Development using Unity Game Engine",
    description:
      "With Unity Game Engine, I have made a solar system model, a 2D platformer , 3d Shooter, 3d platformer games, with .NET.",
    url: "",
  },
  {
    title: "Web Development",
    description:
      "I have gained a proficiency in JavaScript, React, HTML, CSS, Bootstrap, Python, Django, RestFull Api, MYSql, and created food ordering website and weather App",
    url: "",
  },
  {
    title: "My Resume Site",
    description:
      "Created my resume site using React, node.js, and deployed to Azure. Includes my experience and design abilities.",
    url: "www.kaifbilalibrahim.me",
  },
  {
    title: "Figma UI/UX Designs",
    description:
      "I have designed a the UI/UX design of a hypothetical Food Ordering website.",
    url: "",
  },
  {
    title: "Android App",
    description:
      "With the help of Android studio and with Kotlin, I had made a video player",
    url: "",
  },
  {
    title: "Game Development using PyGame",
    description:
      "I have created many games with the help of pygame, such as snakebite, the death Valley, the space Crash",
  },
  {
    title: "Certificates",
    description:
      "Click to see Certificates",
    url: "https://www.linkedin.com/in/mohdkaifbilal/details/certifications/",
  },
  {
    title: "MLSA",
    description:
      "I am a member of Microsoft Learn Student Ambassador, where I have conducted many workshops and webinars.",
    url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/ed6e4a56-0454-4195-a9e4-cdfc4cd8948f",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
