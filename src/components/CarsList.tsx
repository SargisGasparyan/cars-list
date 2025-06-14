'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Car, Meta } from '@/types';

import SortSelect from '@/components/SortSelect';
import CarCard from '@/components/CarCard';
import Pagination from '@/components/Pagination';

const CarsPage = () => {
  const params = useSearchParams();

  const page = Number(params.get('page')) || 1;
  const sort = params.get('sort') || '';
  const order = params.get('order') || '';

  const [cars, setCars] = useState<Car[]>([]);
  const [meta, setMeta] = useState<Meta>({ page: 1, pageCount: 1 });

  useEffect(() => {
    async function fetchCars() {
      const query = new URLSearchParams({
        _limit: '12',
        _page: page.toString(),
      });
      if (sort && order) {
        query.append('_sort', sort);
        query.append('_order', order);
      }
      const res = await fetch(`/api/proxy/cars?${query.toString()}`);
      const data = await res.json();
      setCars(data.data);
      setMeta(data.meta);
    }
    fetchCars();
  }, [page, sort, order]);

  return (
    <article className="p-4 max-w-7xl mx-auto bg-[#c0d8ef]">
      <SortSelect sort={sort} order={order} />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
        {cars.map((car) => (
          <CarCard key={car.unique_id} car={car} />
        ))}
      </section>
      <Pagination page={meta.page} pageCount={meta.pageCount} />
    </article>
  );
};

export default CarsPage;
