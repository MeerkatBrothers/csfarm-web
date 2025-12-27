import { cn } from '@/shared/utils/cn';

import ServiceLogo from '@/components/atoms/ServiceLogo';
import NonMobileHeader from '@/components/organisms/layout/NonMobileHeader';
import MobileHeader from '@/components/organisms/layout/MobileHeader';

const Header = () => {
  return (
    <div className="flex h-14 w-full max-w-7xl flex-row items-center justify-between">
      <ServiceLogo />

      <div className={cn('hidden', 'md:block')}>
        <NonMobileHeader />
      </div>

      <div className={cn('md:hidden')}>
        <MobileHeader />
      </div>
    </div>
  );
};

export default Header;
