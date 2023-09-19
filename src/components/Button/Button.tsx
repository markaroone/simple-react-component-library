import React from 'react';

type ButtonProps = {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ label, ...props }: ButtonProps) => {
  return <button {...props}>{label}</button>;
};

export default Button;
