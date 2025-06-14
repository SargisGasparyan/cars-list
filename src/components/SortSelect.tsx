'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const SortSelect = ({  order }: { sort: string; order: string }) => {
  const router = useRouter();
  const params = useSearchParams();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const urlParams = new URLSearchParams(params.toString());
    urlParams.set('page', '1');
    if (value === '') {
      urlParams.delete('sort');
      urlParams.delete('order');
    } else {
      urlParams.set('sort', 'price');
      urlParams.set('order', value);
    }
    router.push(`/cars?${urlParams.toString()}`);
  };

  return (
   <header className='rounded-[12px] border-[none] bg-[white]'>
     <select value={order} onChange={handleChange} className="m-2 p-2 rounded-[12px] border-[1px] border-[solid] border-[#ede9dd]">
      <option value="">Сортировка не выбрана</option>
      <option value="asc">Цена по возрастанию</option>
      <option value="desc">Цена по убыванию</option>
    </select>
   </header>
  );
};

export default SortSelect;
