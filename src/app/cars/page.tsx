import { Suspense } from 'react';

import CarsList from '@/components/CarsList';

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <CarsList />
    </Suspense>
  );
}
