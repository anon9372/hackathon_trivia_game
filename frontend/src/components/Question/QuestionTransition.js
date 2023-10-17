import React from 'react'; // Import React

import { Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
const QuestionTransition = ({ questionNo, duration }) => {
  console.log('helloduration', duration)
  let setDuration = duration / 1000;
  const [timeLeft, setTimeLeft] = useState(setDuration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        console.log('prev', prev);
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(interval); // Clear the interval when timeLeft reaches 0
          return prev; // Return the same value to stop further updates
        }
      });
    }, 1000);
  }, []);
  return (
    <Heading size="lg">{`Qn ${questionNo} starting in ${timeLeft} seconds`}</Heading>
  );
};

export default QuestionTransition;
