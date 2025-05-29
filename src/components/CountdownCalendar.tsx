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
    <div className=" bg-background-secondary rounded-lg shadow-lg select-none font-sans">
      <div className="bg-main-tertiary text-white text-center py-2 rounded-t-lg font-bold text-lg">
        До начала
      </div>

      <div className="p-4 flex flex-col items-center justify-center space-y-2">
        <div className="text-element-secondary text-4xl font-extrabold tracking-widest">
          {formatNumber(timeLeft.days)}:{formatNumber(timeLeft.hours)}:
          {formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-element-primary text-sm uppercase tracking-wide">
          ДД:ЧЧ:ММ:СС
        </div>
      </div>
    </div>
  );
}
