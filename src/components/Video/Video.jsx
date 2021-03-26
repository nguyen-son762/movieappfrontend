import React from "react";
import Loading from "../../common/Loading";
import "./Video.scss";
function Video({ source }) {
  return (
    <div className="video" id="video_ifr">
      {source ? (
        <iframe
          title="video"
          src={source}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Video;
