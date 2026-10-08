import LocalizedHomePage from '@/components/LocalizedHomePage';
import { localizedHomeContent } from '@/content/localized-home';

export default function RussianHome() {
  return <LocalizedHomePage content={localizedHomeContent.ru} />;
}
