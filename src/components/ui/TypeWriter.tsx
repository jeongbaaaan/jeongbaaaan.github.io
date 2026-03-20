import { useState, useEffect, useRef } from "react";

interface Props {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
}

export default function TypeWriter({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pause = 2000,
}: Props) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing",
  );
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const currentText = texts[textIndex];

    if (phase === "typing") {
      if (displayText.length < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
      } else {
        setPhase("pausing");
      }
    } else if (phase === "pausing") {
      timeoutRef.current = setTimeout(() => {
        setPhase("deleting");
      }, pause);
    } else if (phase === "deleting") {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, deleteSpeed);
      } else {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, phase, textIndex, texts, speed, deleteSpeed, pause]);

  return (
    <span className="text-[var(--color-primary)]">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
