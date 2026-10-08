import LocalizedHomePage from '@/components/LocalizedHomePage';
import { localizedHomeContent } from '@/content/localized-home';

export default function NLHome() {
  return <LocalizedHomePage content={localizedHomeContent.nl} />;
}
