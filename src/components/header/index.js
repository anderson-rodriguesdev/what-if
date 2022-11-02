import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../assets/logo.svg';
import LogoCodeBoost from '../../assets/logo-codeboost.svg';

import { HeaderStyle } from './styles';
import { Container } from '../../styles/global';

export function Header() {
  return (
    <HeaderStyle>
      <Container>
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="Logo Marvel Studios" />
          </Link>
        </div>
        <div className="code">
          <Image src={LogoCodeBoost} alt="Logo CodeBoost" />
        </div>
      </Container>
    </HeaderStyle>
  );
}