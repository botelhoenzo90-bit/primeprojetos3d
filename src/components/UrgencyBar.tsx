import { useState, useEffect } from "react";

const UrgencyBar = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = sessionStorage.getItem("urgency-timer-end");
    if (saved) {
      const diff = Math.max(0, Math.floor((parseInt(saved) - Date.now()) / 1000));
      return diff;
    }
    const end = Date.now() + 15 * 60 * 1000;
    sessionStorage.setItem("urgency-timer-end", String(end));
    return 15 * 60;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="bg-[#FF4500] py-2 px-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex items-center justify-center gap-3 whitespace-nowrap">
        <span className="text-white font-bold text-xs md:text-sm uppercase tracking-wider">
          Últimas vagas com desconto!
        </span>
        <div className="inline-flex items-center gap-1">
          <span className="bg-white text-[#FF4500] font-extrabold text-lg md:text-xl px-2.5 py-0.5 rounded-md min-w-[40px] text-center">
            {minutes}
          </span>
          <span className="text-white font-extrabold text-lg">:</span>
          <span className="bg-white text-[#FF4500] font-extrabold text-lg md:text-xl px-2.5 py-0.5 rounded-md min-w-[40px] text-center">
            {seconds}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;
