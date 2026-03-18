import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";

export const Route = createFileRoute("/_public")({
  component: PublicLayout,
});

function PublicLayout() {
  return (
    <main className="min-h-screen w-full bg-primary-light dark:bg-primary-dark">
      <Navbar />

      <Outlet />
    </main>
  );
}
