// components/VideoComponent.js
function VideoComponent({ src, poster, width, height }) {
  return (
    <video
      src={src}
      poster={poster}
      width={width}
      height={height}
      controls
      className="video"
    />
  );
}

export default VideoComponent;