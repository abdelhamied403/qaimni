import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Icons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  reddit: RedditIcon,
  pinterest: PinterestIcon,
  youtube: YouTubeIcon,
};

const SocialIcon = (block) => {
  if (typeof Icons[block.name] !== "undefined") {
    return React.createElement(Icons[block.name], {
      key: block._uid,
      block: block,
    });
  }
};

export default SocialIcon;
