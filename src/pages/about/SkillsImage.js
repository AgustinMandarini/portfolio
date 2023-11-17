import bootstrap from "../../assets/skills/bootstrap.svg";
import css from "../../assets/skills/css.svg";
import git from "../../assets/skills/git.svg";
import html from "../../assets/skills/html.svg";
import javascript from "../../assets/skills/javascript.svg";
import nextJS from "../../assets/skills/nextJS.svg";
import postgresql from "../../assets/skills/postgresql.svg";
import react from "../../assets/skills/react.svg";
import node from "../../assets/skills/node.png";
import python from "../../assets/skills/python.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;

    case "css":
      return css;

    case "javascript":
      return javascript;
    case "python":
      return python;

    case "react":
      return react;

    case "bootstrap":
      return bootstrap;

    case "postgresql":
      return postgresql;
    case "git":
      return git;
    case "node":
      return node;
  }
};
