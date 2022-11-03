/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Image from 'next/image';
import { StyleCard } from './styles';

export function CardCharacter({ image, name, slug, alt }) {
  return (
    <StyleCard>
      <Link href={`/character/${slug}`}>
        <div className="image">
          <Image src={image} alt={alt} width="280" height="372" />
        </div>
        <div className="info">
          <div className="name">
            <h3>{name}</h3>
            <span>Marvel Studios</span>
          </div>
          <span>What if?</span>
        </div>
      </Link>
    </StyleCard>
  );
}
