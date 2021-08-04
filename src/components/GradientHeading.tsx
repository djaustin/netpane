import { Heading, HeadingProps } from "@chakra-ui/react";
import React from "react";

const GradientHeading: React.FC<HeadingProps> = (props) => (
  <Heading
    {...props}
    bgGradient="linear(90deg, #00d2ff 0%, #3a47d5 100%)"
    bgClip="text"
  />
);

export default GradientHeading;
