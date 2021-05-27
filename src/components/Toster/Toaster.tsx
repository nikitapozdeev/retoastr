import React from "react";

export interface ToasterProps {
  text: string;
}

export const Toaster = ({ text }: ToasterProps) => {
  return <>Placeholder with text: {text}</>;
};
