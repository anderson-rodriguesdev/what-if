import { ComponentPageNotFound } from '../components/pageNotFound';
import { PageTitle } from '../components/PageTitle';

export default function PageNotFound() {
  return (
    <>
      <PageTitle
        title="What if ? - Codeboost | Página não encontrada"
        description="Página não encontrada"
      />
      <ComponentPageNotFound />
    </>
  );
}
