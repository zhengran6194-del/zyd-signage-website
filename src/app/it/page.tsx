import LocalizedHomePage from '@/components/LocalizedHomePage';
import { localizedHomeContent } from '@/content/localized-home';

export default function ITHome() {
  return <LocalizedHomePage content={localizedHomeContent.it} />;
}
