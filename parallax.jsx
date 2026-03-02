import { useEffect, useState } from "react";

const Parallax = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetY]);

  return (
    <div style={{ height: "200vh", position: "relative" }}>
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        alt="background"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1
        }}
      />

      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1>Scroll Down </h1>
      </div>
    </div>
  );
};

export default Parallax;
