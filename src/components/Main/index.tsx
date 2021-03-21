import * as S from './styles'

const Main = ({
  title = 'React Avançado - Boilerplate',
  description = 'Typescript, ReactJS, NextJs e Styled components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Logotipo do React escrito React Avaçado ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Ilustration
      src="img/hero-illustration.svg"
      alt="Desenvelvedor sentado em frente a um monitor programando"
    />
  </S.Wrapper>
)
export default Main
