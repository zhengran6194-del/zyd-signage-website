import LocalizedHomePage from '@/components/LocalizedHomePage';
import { localizedHomeContent } from '@/content/localized-home';

export default function SpanishHome() {
  return <LocalizedHomePage content={localizedHomeContent.es} />;
}
