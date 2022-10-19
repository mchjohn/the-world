import * as S from './styles';

export const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo_react.svg"
        alt="Imagem de um átomo e React avançado escrito ao lado."
      />
      <S.Title>React Avançado</S.Title>;
      <S.Description>
        Typescript, ReactJs, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/coding.svg"
        alt="Ilustração de uma tela de computador e um teclado."
      />
    </S.Wrapper>
  );
};
