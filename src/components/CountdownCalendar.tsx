import { useEffect, useState } from "react";

interface CountdownCalendarProps {
  targetDate: Date;
}

export function CountdownCalendar({ targetDate }: CountdownCalendarProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="w-full bg-background-secondary/90 rounded-lg shadow-white select-none font-sans">
      <div className="bg-main-tertiary text-white text-center py-2 rounded-t-lg font-bold typo-small-title">
        До начала
      </div>

      <div className="p-4 flex flex-col items-center justify-center space-y-2">
        <div className="text-element-secondary typo-title font-extrabold tracking-widest">
          <span className="text-main-tertiary">
            {formatNumber(timeLeft.days)}
          </span>
          :{formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-element-secondary text-sm uppercase tracking-wide">
          <span className="text-main-tertiary">ДД:</span>ЧЧ:ММ:СС
        </div>
      </div>
    </div>
  );
}
