import { Skeleton } from "@/components/ui/skeleton"

export default function ProductLoading() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center mb-8">
        <Skeleton className="h-6 w-24" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Skeleton className="aspect-square rounded-lg" />

        <div>
          <Skeleton className="h-10 w-3/4 mb-4" />
          <Skeleton className="h-24 w-full mb-6" />

          <div className="mb-8">
            <Skeleton className="h-8 w-48 mb-3" />
            <div className="space-y-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-6 w-full" />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <Skeleton className="h-8 w-48 mb-3" />
            <Skeleton className="h-16 w-full" />
          </div>

          <div className="mb-8">
            <Skeleton className="h-8 w-48 mb-3" />
            <Skeleton className="h-16 w-full" />
          </div>

          <div className="mb-8">
            <Skeleton className="h-8 w-48 mb-3" />
            <Skeleton className="h-16 w-full" />
          </div>

          <div className="mt-8">
            <Skeleton className="h-10 w-64" />
          </div>
        </div>
      </div>
    </div>
  )
}
