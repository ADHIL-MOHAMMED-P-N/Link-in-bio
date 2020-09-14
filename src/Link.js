import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./App.css";
function Link(props) {
  return (
    <div>
      <a href="https://github.com/ADHIL-MOHAMMED-P-N/">
        <button className="link__button">
          <GitHubIcon className="Link__buttonIcon" /> Github
        </button>
      </a>
      <a href="https://www.instagram.com/adhil___mohammed/">
        <button className="link__button">
          <YouTubeIcon className="Link__buttonIcon" /> Youtube
        </button>
      </a>
      <a href="https://www.youtube.com/channel/UCnpyaasWhSD7sotgGoZEWKg/featured?view_as=subscriber">
        <button className="link__button">
          <FacebookIcon className="Link__buttonIcon" /> Facebook
        </button>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100004488618413">
        <button className="link__button">
          <InstagramIcon className="Link__buttonIcon" /> Instagram
        </button>
      </a>
    </div>
  );
}
export default Link;
