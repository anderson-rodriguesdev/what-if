import { useRouter } from 'next/router';

import { SectionHeroChracter } from '../../components/details/SectionHeroCharacter';
import { ListCharacters } from '../../components/listCharacters';

export default function PageCharacter() {
  const route = useRouter();
  return (
    <>
      <SectionHeroChracter />
      <ListCharacters />
    </>
  );
}
