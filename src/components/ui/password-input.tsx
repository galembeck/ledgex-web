import { Eye, EyeOff } from "lucide-react"; // Importe os ícones
import { type ComponentProps, useState } from "react";
import { cn } from "@/lib/utils";

function PasswordInput({ className, ...props }: ComponentProps<"input">) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        data-slot="input"
        type={showPassword ? "text" : "password"}
        {...props}
      />
      <button
        aria-label={showPassword ? "Hide password" : "Show password"}
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
        onClick={() => setShowPassword(!showPassword)}
        type="button"
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4" />
        ) : (
          <Eye className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

export { PasswordInput };
