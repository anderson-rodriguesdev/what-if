/* eslint-disable react/no-unescaped-entities */
import { AreaSocial, SectionHeroStyle, ContextText } from './styles';
import { Container } from '../../../styles/global';
import { PopupVideo } from '../../popupVideo';

import Image from 'next/image';
import IconYoutube from '../../../assets/youtube.svg';
import IconInstagram from '../../../assets/instagram.svg';

const socials = [
  { name: 'Youtube', url: '#', icon: IconYoutube },
  { name: 'Instagram', url: '#', icon: IconInstagram },
];

export function SectionHero({ data }) {
  return (
    <SectionHeroStyle>
      <Container>
        <AreaSocial>
          <ul>
            {socials.map(({ name, url, icon }) => {
              return (
                <li key={`social-${name}`}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <Image src={icon} alt={`Ícone ${name}`} />
                  </a>
                </li>
              );
            })}
          </ul>
        </AreaSocial>
        <ContextText>
          <div className="left">
            <h3>{data.subtitle_hero}</h3>
            <h1>{data.title_hero}</h1>
            <p>{data.description_hero[0].text}</p>
            <a href={data.url_button} target="_blank" rel="noreferrer">
              {data.label_button}
            </a>
          </div>
          <PopupVideo
            label={data.label_trailer}
            thumb={data.thumbnail_trailer.url}
          />
        </ContextText>
      </Container>
    </SectionHeroStyle>
  );
}
