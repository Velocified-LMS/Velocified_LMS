import { Progress } from "flowbite-react";
import React from "react";
import '@/pages/globals.css'

function ProgressBar() {
  return (
      <Progress progress={45} size="xl" color="purple" />
  );
}

export default ProgressBar;