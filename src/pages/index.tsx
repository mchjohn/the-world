import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import { InfoOutline } from '@styled-icons/evaicons-outline';

import { LinkWrapper } from 'components/LinkWrapper';

export const Map = dynamic(() => import('components/Map'), { ssr: false });

const Home: NextPage = () => {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>

      <Map />
    </>
  );
};

export default Home;
