import Image from 'next/image';
import { SectionCharacterStyle } from './styles';

import { Container } from '../../../styles/global';

import Imagecharacter from '../../../assets/character.jpg';

export function SectionHeroChracter() {
  return (
    <SectionCharacterStyle>
      <Container>
        <div className="image">
          <Image src={Imagecharacter} alt="personagem" />
        </div>
        <div className="info">
          <span>A História</span>
          <div>
            <h1>KillMonger</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis nulla veniam minima illo dolorum. Quisquam ut
              aspernatur ad modi reiciendis dolorem perferendis molestiae earum?
              Esse ducimus minima iusto sapiente, corporis, quae, saepe
              obcaecati atque blanditiis consequuntur cumque tempora cum soluta.
            </p>
          </div>
        </div>
      </Container>
    </SectionCharacterStyle>
  );
}
