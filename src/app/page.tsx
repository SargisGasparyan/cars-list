import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <h1 className="text-2xl  mb-4">Добро пожаловать!</h1>
        <p className="text-gray-600 mb-6">Посмотрите наш каталог автомобилей.</p>
        <Link 
          href="/cars"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
        >
          Перейти к автомобилям
        </Link>
      </div>
    </main>
  );
}
