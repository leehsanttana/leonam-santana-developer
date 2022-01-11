import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../../Assets/ls-logo-brand.png";

const Head = () => {
  return (
    <>
      <Helmet>
        <title>Leonam Santana Developer</title>
        <meta
          name="description"
          content="Leonam Santana é um desenvolvedor Front-End Freelancer que produz Landing Pages e Aplicações web. "
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, ReacJS, Front-end, Front-end Developer"
        />
        <meta name="author" content="Leonam Santana" />
        <meta
          property="og:title"
          content="Leonam Santana | Front-End Developer"
        />
        <meta
          name="og:description"
          content="Leonam Santana é um desenvolvedor Front-End Freelancer que produz Landing Pages e Aplicações web. "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://leonam-santana-developer.vercel.app/"
        />
        <link rel="icon" type="image/x-icon" href={favicon} />
      </Helmet>
    </>
  );
};

export default Head;
