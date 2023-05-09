import React from "react";

// Import the CSS file for styling

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";
const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a href="https://www.facebook.com/TuskerFc/">
        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
      </a>
      <a href="https://www.facebook.com/TuskerFc/">
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </a>
      <a href="https://www.facebook.com/TuskerFc/">
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
