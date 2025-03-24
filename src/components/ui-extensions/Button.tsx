import { cn } from "@/lib/utils";
import { ButtonProps as ShadcnButtonProps } from "@/components/ui/button";
import { forwardRef } from "react";

// Define our custom variants type that includes all the variants we're using
export type CustomButtonVariant = "primary" | "secondary" | "outline" | "accent" | "ghost";

type CustomButtonProps = Omit<ShadcnButtonProps, "variant"> & {
  variant?: CustomButtonVariant;
  glowing?: boolean;
  withArrow?: boolean;
};

const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = "primary", glowing, withArrow, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
          {
            "px-6 py-3 text-base": true,
            "bg-truckprice-red text-white hover:bg-truckprice-red/90 shadow-[0_0_20px_rgba(255,0,0,0.3)]": variant === "primary" && glowing,
            "bg-truckprice-red text-white hover:bg-truckprice-red/90": variant === "primary" && !glowing,
            "bg-truckprice-darkgray border border-truckprice-red text-white hover:bg-truckprice-red/10": variant === "outline",
            "bg-truckprice-gray text-white hover:bg-truckprice-gray/90": variant === "secondary",
            "bg-truckprice-green text-black hover:bg-truckprice-green/90 shadow-[0_0_20px_rgba(0,221,115,0.3)]": variant === "accent" && glowing,
            "bg-truckprice-green text-black hover:bg-truckprice-green/90": variant === "accent" && !glowing,
            "bg-transparent text-white hover:bg-white/5": variant === "ghost",
          },
          className
        )}
        {...props}
      >
        {children}
        {withArrow && (
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        )}
        <span className="absolute inset-0 overflow-hidden before:absolute before:inset-0 before:left-0 before:top-0 before:h-full before:w-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 hover:before:animate-shimmer hover:before:opacity-100"></span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
