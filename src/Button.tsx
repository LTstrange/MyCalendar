import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

function Button({ text, ...props }: ButtonProps) {
  return (
    <button
      className="bg-slate-100 rounded w-9 font-bold hover:shadow-md hover:bg-slate-300"
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
