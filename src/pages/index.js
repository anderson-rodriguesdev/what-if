import { Header } from '../components/header';
import { SectionHero } from '../components/home/sectionHero';
import { ListCharacters } from '../components/listCharacters';

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <ListCharacters />
    </>
  );
}
