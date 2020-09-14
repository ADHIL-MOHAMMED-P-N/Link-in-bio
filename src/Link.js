import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";

function Link(props) {
  return (
    <div>
      <button className="link__button">
        <GitHubIcon />
      </button>
      <button className="link__button">
        <InstagramIcon />
      </button>
      <button className="link__button">
        <YouTubeIcon />
      </button>
      <button className="link__button">
        <FacebookIcon />
      </button>
    </div>
  );
}
export default Link;
