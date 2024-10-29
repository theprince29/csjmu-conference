import React from "react";
import Countdown from "react-countdown";

const CountdownTimer = () => {
  // Event date in IST timezone
  const eventDate = new Date("2025-04-11T00:00:00+05:30");
  // const eventDate = new Date(new Date().getTime() + 1 * 60 * 1000);

  // Renderer for the countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <p className="text-primary font-semibold text-lg">
          The event has started!
        </p>
      );
    } else {
      return (
        <div className="flex justify-between  p-4  bg-third rounded-lg shadow-md text-white text-2xl font-bold">
          <div className="flex flex-col items-center ml-2">
            <span className="text-sm">{days} Days</span>
          </div>
          <div className="flex flex-col items-center ml-2 mr-2">
            <span className="text-sm">:</span>
          </div>
          <div className="flex flex-col items-center ml-2 mr-2">
            <span className="text-sm">{hours} Hrs</span>
          </div>
          <div className="flex flex-col items-center ml-2 mr-2">
            <span className="text-sm">:</span>
          </div>
          <div className="flex flex-col items-center ml-2 mr-2">
            <span className="text-sm">{minutes} Min</span>
          </div>
          <div className="flex flex-col items-center ml-2 mr-2">
            <span className="text-sm">:</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm">{seconds} Sec</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="my-2">
      <Countdown date={eventDate} renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;
