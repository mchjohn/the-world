import { CloseOutline } from '@styled-icons/evaicons-outline';

import * as S from './styles';

import { LinkWrapper } from 'components/LinkWrapper';

export const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>My Skate Spots</S.Heading>

      <S.Body>Picos de skateboarding onde costumo andar</S.Body>
    </S.Content>
  );
};
