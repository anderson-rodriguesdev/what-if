import { useEffect } from 'react';
import { SectionHero } from '../components/home/sectionHero';
import { ListCharacters } from '../components/listCharacters';
import { PageTitle } from '../components/PageTitle';

import { getPrismicClient } from '../service/prismic';

export default function Home({ dataPage, characters }) {
  return (
    <>
      <PageTitle
        title="What if ? - Codeboost"
        description="Projeto desenvolvido no curso Codeboost"
      />
      <SectionHero data={dataPage} />
      <ListCharacters data={characters} />
    </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const contentPage = await prismic.getSingle('home');

  const characters = await prismic.getAllByType('character');

  return {
    props: {
      dataPage: contentPage.data,
      characters,
    },
    revalidate: 60,
  };
};
