import { useRouter } from 'next/router';

import { SectionHeroChracter } from '../../components/details/SectionHeroCharacter';
import { ListCharacters } from '../../components/listCharacters';
import { PageTitle } from '../../components/PageTitle';

export default function PageCharacter() {
  const route = useRouter();
  return (
    <>
      <PageTitle
        title="What if? - Codeboost | Detalhes do personagem"
        description="Detalhes do personagem"
      />
      <SectionHeroChracter />
      <ListCharacters />
    </>
  );
}
