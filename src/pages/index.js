import { Header } from '../components/header';
import { SectionHero } from '../components/home/sectionHero';
import { CardCharacter } from '../components/cardCharacter';

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <CardCharacter />
    </>
  );
}
