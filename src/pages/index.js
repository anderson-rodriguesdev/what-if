import { SectionHero } from '../components/home/sectionHero';
import { ListCharacters } from '../components/listCharacters';
import { PageTitle } from '../components/PageTitle';
export default function Home() {
  return (
    <>
      <PageTitle
        title="What if ? - Codeboost"
        description="Projeto desenvolvido no curso Codeboost"
      />
      <SectionHero />
      <ListCharacters />
    </>
  );
}
