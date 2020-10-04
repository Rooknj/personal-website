import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const PROJECT_LIST = [
  "Prysma",
  "LED Mirror",
  "Room LED Lights Setup",
  "Hackathon Visualizer",
  "Senior Design",
];

const Home: React.FC = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Constantly curious. Applying what I learn with a balanced blend of
          boldness and practicality.
        </p>
      </section>
      <h1>About Me</h1>
      <h2>My Process</h2>
      <p>
        I enjoy being curious and am constantly seeking to learn new things.
        With so many interests to explore, the key to staying focused is my T
        shaped approach. Go broad in a lot of areas. Then pick to one to explore
        in depth. The goal is to see where each new piece of information fits in
        the big picture and to understand how it can help others around me.
      </p>
      <h2>My Hobbies</h2>
      <p>
        Aside from playing with computers, my hobbies include drinking wine,
        building DIY electronics projects, and discovering new music. On the
        weekend you are likely to find me sipping a glass of wine in a vineyard
        or tinkering with LED light strips at home. Check out some of the
        thing&apos;s I&apos;ve built below vvv
      </p>
      <h1>Projects</h1>
      <ol>
        {PROJECT_LIST.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ol>
      <h1>Future Ventures</h1>
      <p>[TODO]</p>
      <h1>Contact</h1>
      <p>[TODO]</p>
    </Layout>
  );
};

export default Home;
