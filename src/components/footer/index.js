import Image from 'next/image';
import { StyleFooter } from './styles';

import { Container } from '../../styles/global';

import LogoCodeBoost from '../../assets/logo-codeboost.svg';

export function Footer() {
  return (
    <StyleFooter>
      <Container>
        <div>
          <strong>2022 CodeBoost</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            ipsa blanditiis ipsum animi aperiam ex deserunt dolores repellat eum
            culpa labore pariatur vitae! Accusamus molestiae pariatur, possimus
            quibusdam fugiat incidunt, eveniet, sed quas animi explicabo omnis
            labore. Dolorum, voluptate provident?
          </p>
        </div>
        <Image src={LogoCodeBoost} alt="Logo Codeboost" />
      </Container>
    </StyleFooter>
  );
}
