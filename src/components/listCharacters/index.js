import Image from 'next/image';
import { StyleSectionCharacters, StyleListCharacters } from './styles';

import { Container } from '../../styles/global';
import { CardCharacter } from '../cardCharacter/';

import LogoMarvel from '../../assets/logo.svg';
import ImageCharacter from '../../assets/character.jpg';

const characters = [
  {
    name: 'name',
    image: ImageCharacter,
    slug: '/name',
  },
  {
    name: 'name',
    image: ImageCharacter,
    slug: '/name',
  },
  {
    name: 'name',
    image: ImageCharacter,
    slug: '/name',
  },
  {
    name: 'name',
    image: ImageCharacter,
    slug: '/name',
  },
  {
    name: 'name',
    image: ImageCharacter,
    slug: '/name',
  },
  {
    name: 'name',
    image: ImageCharacter,
    slug: '/name',
  },
  {
    name: 'name',
    image: ImageCharacter,
    slug: '/name',
  },
];

export function ListCharacters() {
  return (
    <StyleSectionCharacters>
      <Container>
        <div className="title">
          <span>What if</span>
          <h2>Personagens Marvel</h2>
        </div>
        <StyleListCharacters>
          {characters.map(({ name, image, slug }, index) => (
            <CardCharacter key={index} name={name} image={image} slug={slug} />
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
