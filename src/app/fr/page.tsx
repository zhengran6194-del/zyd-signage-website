import LocalizedHomePage from '@/components/LocalizedHomePage';
import { localizedHomeContent } from '@/content/localized-home';

export default function FrenchHome() {
  return <LocalizedHomePage content={localizedHomeContent.fr} />;
}
