import { useForm } from "@tanstack/react-form";
import { Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";
import z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { AppleIcon } from "@/components/ui/icons/apple-icon";
import { GoogleIcon } from "@/components/ui/icons/google-icon";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { PasswordInput } from "@/components/ui/password-input";
import { useAuth } from "@/hooks/services/use-auth";

const signInFormSchema = z.object({
  email: z.string().email("Email should be in a valid format."),
  password: z.string().min(6, "Password should be at least 6 characters long."),
});

export function SignInForm() {
  const navigate = useNavigate();

  const { login, isLoggingIn } = useAuth();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: signInFormSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await login({
          email: value.email,
          password: value.password,
        });

        toast.success("Successfully signed in!", {
          description: "Redirecting you to your account's dashboard...",
        });

        navigate({ to: "/" });
      } catch (_error) {
        toast.error("Sign-in failed!", {
          description: "Please check your credentials and try again.",
        });
      }
    },
  });

  return (
    <div className="flex flex-1 items-center justify-center p-6 sm:p-12">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-100"
        initial={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <div className="mb-10 flex items-center gap-2.5 md:mb-8 lg:hidden">
          <Logo />
        </div>

        <div className="mb-8">
          <h2 className="mb-2 font-semibold text-2xl text-black tracking-tight dark:text-white">
            Welcome back
          </h2>

          <p className="text-muted-foreground text-sm dark:text-secondary-muted-foreground">
            Sign in with your credentials to access your financial intelligence
            dashboard.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-3">
          <Button
            className="h-11 cursor-pointer border-border font-medium text-sm transition-all active:scale-[0.97] dark:border-muted-foreground/30"
            variant="outline"
          >
            <GoogleIcon />
            Google
          </Button>

          <Button
            className="h-11 cursor-pointer border-border font-medium text-sm transition-all active:scale-[0.97] dark:border-muted-foreground/30"
            variant="outline"
          >
            <AppleIcon />
            Apple
          </Button>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border dark:bg-muted-foreground/30" />
          <span className="text-muted-foreground text-xs dark:text-secondary-muted-foreground">
            or continue with email
          </span>
          <div className="h-px flex-1 bg-border dark:bg-muted-foreground/30" />
        </div>

        <form
          className="space-y-4"
          id="sign-in-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <div className="space-y-1.5">
            <FieldGroup>
              <form.Field name="email">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>

                      <Input
                        aria-invalid={isInvalid}
                        autoComplete="off"
                        className="h-11 border-muted-foreground/30! bg-accent/30! focus:border-primary-purple! focus-visible:ring-primary-purple dark:border-muted-foreground/30!"
                        id={field.name}
                        name={field.name}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="your@email.com"
                        value={field.state.value}
                      />

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              </form.Field>

              <form.Field name="password">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldContent className="flex flex-row items-center justify-between">
                        <FieldLabel htmlFor={field.name}>Password</FieldLabel>

                        {/* TODO: Implement forgot password link */}
                        <Link
                          className="text-primary-purple text-xs transition-colors hover:text-primary-purple/80"
                          to="/sign-in"
                        >
                          Forgot password?
                        </Link>
                      </FieldContent>

                      <PasswordInput
                        aria-invalid={isInvalid}
                        autoComplete="current-password"
                        className="h-11 border-muted-foreground/30! bg-accent/30! placeholder:font-extrabold! placeholder:text-lg! placeholder:tracking-wider! focus:border-primary-purple! focus-visible:ring-primary-purple dark:border-muted-foreground/30!"
                        id={field.name}
                        name={field.name}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="·········"
                        value={field.state.value}
                      />

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              </form.Field>
            </FieldGroup>
          </div>

          <div className="flex items-center gap-2">
            <Field orientation="horizontal">
              <Checkbox
                className="cursor-pointer border-primary-purple"
                id="remember"
              />

              <FieldLabel
                className="cursor-pointer font-normal text-muted-foreground text-sm dark:text-secondary-muted-foreground"
                htmlFor="remember"
              >
                Keep me signed in
              </FieldLabel>
            </Field>
          </div>
        </form>

        <Button
          className="mt-4 h-11 w-full ative:scale-[0.98] bg-primary-purple font-medium text-sm transition-all hover:bg-primary-purple/95"
          disabled={isLoggingIn}
          form="sign-in-form"
          type="submit"
        >
          {isLoggingIn ? (
            <span>Accessing your dashboard</span>
          ) : (
            <>
              <span>Access your dashboard</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-xs dark:text-secondary-muted-foreground"
          initial={{ opacity: 0, y: 8 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Sparkles className="ai-shimmer h-3.5 w-3.5 text-primary-purple" />
          <span>Protected by AI - anomalous access detection active</span>
        </motion.div>

        <p className="mt-8 text-center text-muted-foreground text-sm dark:text-secondary-muted-foreground">
          Don't have an account? {/* TODO: Implement sign-up link */}
          <Link
            className="font-medium text-primary-purple transition-colors hover:text-primary-purple/80"
            to="/sign-in"
          >
            Get started it's free
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
