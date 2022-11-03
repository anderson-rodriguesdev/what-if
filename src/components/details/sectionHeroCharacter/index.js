import Image from 'next/image';
import { SectionCharacterStyle } from './styles';

import { Container } from '../../../styles/global';

export function SectionHeroChracter({ data }) {
  return (
    <SectionCharacterStyle>
      <Container>
        <div className="image">
          <Image
            src={data.image_character.url}
            alt={data.image_character.alt}
            width={486}
            height={631}
          />
        </div>
        <div className="info">
          <span>A História</span>
          <div>
            <h1>{data.name_character}</h1>
            <p>{data.description_character[0].text}</p>
          </div>
        </div>
      </Container>
    </SectionCharacterStyle>
  );
}
