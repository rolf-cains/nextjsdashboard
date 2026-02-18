import DashboardSkeleton, { LatestInvoicesSkeleton } from '@/app/ui/skeletons';

export default function Loading() {
  return <div>
    <DashboardSkeleton/>
    <LatestInvoicesSkeleton/>
  </div>;
}