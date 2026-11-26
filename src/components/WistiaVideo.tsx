import { createElement, useEffect } from "react";

const WistiaVideo = ({ mediaId, aspect }: { mediaId: string; aspect: number }) => {
  useEffect(() => {
    ["https://fast.wistia.com/player.js", `https://fast.wistia.com/embed/${mediaId}.js`].forEach((src, index) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      if (index === 1) script.type = "module";
      document.head.appendChild(script);
    });
  }, [mediaId]);

  return (
    <>
      <style>{`wistia-player[media-id='${mediaId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch'); display: block; padding-top: ${100 / aspect}%; }`}</style>
      {createElement("wistia-player", { "media-id": mediaId, aspect: String(aspect) })}
    </>
  );
};

export default WistiaVideo;