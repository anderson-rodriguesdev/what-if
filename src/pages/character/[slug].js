import { SectionHeroChracter } from '../../components/details/SectionHeroCharacter';
import { ListCharacters } from '../../components/listCharacters';
import { PageTitle } from '../../components/PageTitle';

import { getPrismicClient } from '../../service/prismic';

export default function PageCharacter({ character, characters }) {
  return (
    <>
      <PageTitle
        title="What if? - Codeboost | Detalhes do personagem"
        description="Detalhes do personagem"
      />
      {/* conditional rendering to prevent error on build */}
      {character && <SectionHeroChracter data={character} />}
      {characters && <ListCharacters data={characters} />}
    </>
  );
}

export const getStaticPaths = async () => {
  const prismic = getPrismicClient();

  const characters = await prismic.getAllByType('character');

  const paths = characters.map(({ data }) => {
    return {
      params: { slug: data.slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const prismic = getPrismicClient();

  const characters = await prismic.getAllByType('character');

  // just return the character selected based on url and slug.
  const character = characters.find(({ data }) => {
    return data.slug === context.params.slug;
  });

  //return the others characters removing that one who is already open in details.
  characters.splice(
    characters.findIndex((e) => {
      return e.data.slug === character.data.slug;
    }),
    1,
  );

  return {
    props: {
      character: character.data,
      characters,
    },
  };
};
