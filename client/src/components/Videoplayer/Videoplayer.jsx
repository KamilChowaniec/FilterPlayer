import "./Videoplayer.css";

const Videoplayer = () => {
  return (
    <div className="vpContainer">
      <div className="vpIFrameWrapper">
        <iframe
          className="vpIFrame"
          src="https://www.youtube.com/embed/licFm9qVyy4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default Videoplayer;
