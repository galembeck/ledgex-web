import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers/theme-provider";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ledgex-theme">
      <HeadContent />
      <Outlet />
      <Toaster />
    </ThemeProvider>
  );
}
