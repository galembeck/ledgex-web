import { Skeleton } from "@/components/ui/skeleton";

export function PricingPlanCardSkeleton() {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-white p-6 dark:bg-third-dark">
      <Skeleton className="mb-3 h-5 w-1/2" />

      <div className="mt-3 flex items-baseline gap-1">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-4 w-12" />
      </div>

      <div className="mt-2 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <li className="flex items-start gap-2" key={i}>
            <Skeleton className="h-4 w-4 shrink-0 rounded-full" />
            <Skeleton className="h-4 w-full" />
          </li>
        ))}
      </ul>

      <Skeleton className="mt-8 h-10 w-full rounded-md" />
    </div>
  );
}
