import React from "react";
import { useLottie } from "lottie-react";
import FallingAnimation from "../../imgs/suitsfalling.json";

export default function SuitsFalling () {
    const options = {
        animationData: FallingAnimation,
        loop: false,
      };
    
      const { View } = useLottie(options);
    
      return (
      <div className="h-[400px] sm:h-[600px] overflow-hidden absolute mt-[-100px] sm:mt-[-140px]">{View}</div>);
}