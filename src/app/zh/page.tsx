import LocalizedHomePage from '@/components/LocalizedHomePage';
import { localizedHomeContent } from '@/content/localized-home';

export default function ZHHome() {
  return <LocalizedHomePage content={localizedHomeContent.zh} />;
}
