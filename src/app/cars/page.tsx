import { Suspense } from 'react';

// Dynamically import the client-side CarsPage component with no SSR
import CarsList from '@/components/CarsList';

export default function Page() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <CarsList />
    </Suspense>
  );
}
