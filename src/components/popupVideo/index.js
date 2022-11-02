import { StyledPopupVideo } from './styles';
import Image from 'next/image';

import IconPlay from '../../assets/play.svg';

export function PopupVideo() {
  return (
    <StyledPopupVideo>
      <span>ASSISTA AO TRAILER</span>
      <button>
        <div>
          <Image src={IconPlay} alt="Ícone Play Vídeo" />
        </div>
      </button>
    </StyledPopupVideo>
  );
}
