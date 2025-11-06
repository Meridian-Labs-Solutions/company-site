import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all glow-button";
  
  const variants = {
    primary: "px-8 py-4 bg-accent-cyan text-[#0a0a0a] hover:bg-accent-cyan/90",
    secondary: "px-6 py-2.5 border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  const combinedClassName = `${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}

