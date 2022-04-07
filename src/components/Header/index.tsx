import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onhandleOpenModalNewTrasactionModal: () => void;
}

export function Header({ onhandleOpenModalNewTrasactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <button type="button" onClick={onhandleOpenModalNewTrasactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
