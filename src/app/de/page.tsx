import LocalizedHomePage from '@/components/LocalizedHomePage';
import { localizedHomeContent } from '@/content/localized-home';

export default function GermanHome() {
  return <LocalizedHomePage content={localizedHomeContent.de} />;
}
