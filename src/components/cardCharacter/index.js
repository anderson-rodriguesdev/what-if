/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Image from 'next/image';
import { StyleCard } from './styles';

import ImageCharacter from '../../assets/character.jpg';

export function CardCharacter() {
  return (
    <StyleCard>
      <Link href="#">
        <div className="image">
          <Image
            src={ImageCharacter.src}
            alt="Character"
            width="280"
            height="372"
          />
        </div>
        <div className="info">
          <div className="name">
            <h3>T'Challa</h3>
            <span>Marvel Studios</span>
          </div>
          <span>What if?</span>
        </div>
      </Link>
    </StyleCard>
  );
}
