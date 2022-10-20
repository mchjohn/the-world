import dynamic from 'next/dynamic';
import type { NextPage } from 'next';

export const Map = dynamic(() => import('components/Map'), { ssr: false });

const Home: NextPage = () => {
  return (
    <Map
      places={[
        {
          id: '1',
          name: 'Rio de Janeiro',
          slug: 'rio de janeiro',
          location: { latitude: 79, longitude: 98 },
        },
      ]}
    />
  );
};

export default Home;
