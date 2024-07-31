"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const [countdown, setCountdown] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      router.push('/home');
    }

    return () => clearInterval(interval);
  }, [countdown, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Topilmadi</h1>
      <p className="mt-4 text-lg">3 soniyada ortga qaytiladi: {countdown}</p>
    </div>
  );
};

export default NotFoundPage;
