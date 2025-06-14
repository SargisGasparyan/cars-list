'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const Pagination = ({ page, pageCount }: { page: number; pageCount: number }) => {
  const router = useRouter();
  const params = useSearchParams();

  const changePage = (newPage: number) => {
    const urlParams = new URLSearchParams(params.toString());
    urlParams.set('page', newPage.toString());
    router.push(`/cars?${urlParams.toString()}`);
  };

  return (
    <article className="flex gap-2 justify-center mt-4 items-center">
      <button
        disabled={page <= 1}
        onClick={() => changePage(page - 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Назад
      </button>
      <span>{page} / {pageCount}</span>
      <button
        disabled={page >= pageCount}
        onClick={() => changePage(page + 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Вперед
      </button>
    </article>
  );
};

export default Pagination;
