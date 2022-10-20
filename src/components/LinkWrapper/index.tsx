import Link from 'next/link';
import { ReactNode } from 'react';

import * as S from './styles';

export type LinkWrapperProps = {
  href: string;
  children: ReactNode;
};

export const LinkWrapper = ({ href, children }: LinkWrapperProps) => {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  );
};
