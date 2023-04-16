import React from "react";

const Video = ({ title }) => {
  return (
    <div className="video-container">
      <video controls>
        <source src="/cxc.webm" type="video/webm" />
      </video>
      <h3 className="video-title">{title}</h3>
    </div>
  );
};

export default Video;
