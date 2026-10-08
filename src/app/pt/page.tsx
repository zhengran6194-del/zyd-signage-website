import LocalizedHomePage from '@/components/LocalizedHomePage';
import { localizedHomeContent } from '@/content/localized-home';

export default function PTHome() {
  return <LocalizedHomePage content={localizedHomeContent.pt} />;
}
