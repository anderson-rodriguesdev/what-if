import { StyledPopupVideo } from './styles';
import Image from 'next/image';

import IconPlay from '../../assets/play.svg';

export function PopupVideo({ label, thumb }) {
  return (
    <StyledPopupVideo>
      <span>{label}</span>
      <button style={{ background: `url(${thumb}) no-repeat center center` }}>
        <div>
          <Image src={IconPlay} alt="Ícone Play Vídeo" />
        </div>
      </button>
    </StyledPopupVideo>
  );
}
