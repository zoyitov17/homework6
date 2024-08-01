import { NextPage } from 'next';
import { useRouter } from 'next/router';
import NotFoundPage from './not-found';

const CatchAllPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (slug === 'services' || slug === 'system') {
    return <NotFoundPage />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl">This page does not exist.</h1>
    </div>
  );
};

export default CatchAllPage;
