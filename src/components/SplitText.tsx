import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

const TagTypes = ["h1", "h2", "p"];
export type TagType = (typeof TagTypes)[number];

export default function SplitText({
  text,
  type = "p",
}: {
  text: string;
  type?: TagType;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current.querySelector(type)!);

      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <div className="container" ref={containerRef}>
      {type == "h1" ? (
        <h1>{text}</h1>
      ) : type == "h2" ? (
        <h2>{text}</h2>
      ) : (
        <p>{text}</p>
      )}

      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                text-align: left;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
  );
}
