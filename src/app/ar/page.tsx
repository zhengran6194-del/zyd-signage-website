import LocalizedHomePage from '@/components/LocalizedHomePage';
import { localizedHomeContent } from '@/content/localized-home';

export default function ArabicHome() {
  return <LocalizedHomePage content={localizedHomeContent.ar} />;
}
