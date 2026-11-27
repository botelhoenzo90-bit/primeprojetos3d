import { createElement, useEffect, useRef, useState } from "react";

const WistiaVideo = ({ mediaId, aspect }: { mediaId: string; aspect: number }) => {
  const container = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = container.current;
    if (!element) return;
    if (typeof IntersectionObserver === "undefined") { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      setVisible(true);
      observer.disconnect();
    }, { rootMargin: "300px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!visible) return;
    ["https://fast.wistia.com/player.js", `https://fast.wistia.com/embed/${mediaId}.js`].forEach((src, index) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      if (index === 1) script.type = "module";
      document.head.appendChild(script);
    });
  }, [mediaId, visible]);

  return (
    <div ref={container} className="relative w-full bg-muted" style={{ aspectRatio: String(aspect) }}>
      <style>{`wistia-player[media-id='${mediaId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch'); display: block; padding-top: ${100 / aspect}%; }`}</style>
      {visible && createElement("wistia-player", { "media-id": mediaId, aspect: String(aspect) })}
    </div>
  );
};

export default WistiaVideo;