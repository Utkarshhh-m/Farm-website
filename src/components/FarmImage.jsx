import { useState } from "react";

// Shows an image. If the file is missing or broken, it shows a simple
// placeholder with the caption instead of a broken-image icon.
function FarmImage({ src, alt, className }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`${className} photo-placeholder`}
        role="img"
        aria-label={alt}
      >
        <strong className="photo-emoji">🥭</strong>
        <small>{alt}</small>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default FarmImage;
