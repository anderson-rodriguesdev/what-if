import Image from 'next/image';
import { StyleSectionCharacters, StyleListCharacters } from './styles';

import { Container } from '../../styles/global';
import { CardCharacter } from '../cardCharacter/';

import LogoMarvel from '../../assets/logo.svg';

export function ListCharacters({ data }) {
  return (
    <StyleSectionCharacters>
      <Container>
        <div className="title">
          <span>What if</span>
          <h2>Personagens Marvel</h2>
        </div>
        <StyleListCharacters>
          {data.map(({ data, id }) => (
            <CardCharacter
              key={id}
              name={data.name_character}
              image={data.image_character.url}
              alt={data.image_character.alt}
              slug={data.slug}
            />
          ))}
          <div className="marvel">
            <Image
              src={LogoMarvel.src}
              alt="Logo Marvel"
              width="200"
              height="200"
            />
          </div>
        </StyleListCharacters>
      </Container>
    </StyleSectionCharacters>
  );
}
