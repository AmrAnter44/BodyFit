import React, { useState, useEffect } from "react";
import bg from "../src/assets/bg.jpg"; // أو المسار الصحيح عندك

export default function PageWithVideo() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [speed, setSpeed] = useState(150);

  const words = ["ONE MORE REP", "BODY FIT"];
  const colors = ["text-white", "text-red-600"]; // 👈 الألوان

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex % words.length];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
        setSpeed(50);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
        setSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  // 👇 تحديد اللون حسب الكلمة الحالية
  const currentColor = colors[wordIndex % colors.length];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* ✅ خلفية بالصورة */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/50 z-20"></div>

      {/* ✅ المحتوى */}
      <div className="relative text-center z-30">
        <p
          className={`text-3xl lg:text-6xl font-extrabold transition-colors duration-500 ${currentColor}`}
        >
          {text}
          <span className="border-r-2 border-white ml-1 animate-pulse"></span>
        </p>
      </div>
    </div>
  );
}
