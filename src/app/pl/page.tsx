import LocalizedHomePage from '@/components/LocalizedHomePage';
import { localizedHomeContent } from '@/content/localized-home';

export default function PLHome() {
  return <LocalizedHomePage content={localizedHomeContent.pl} />;
}
