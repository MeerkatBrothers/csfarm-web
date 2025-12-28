import Logo from '@/assets/svgs/logo.svg';

import { PRIVACY_POLICY_URL, TERMS_OF_SERVICE_URL } from '@/shared/constants/policy';
import { cn } from '@/shared/utils/cn';

import Caption from '@/components/atoms/typography/Caption';
import Label from '@/components/atoms/typography/Label';

const Footer = () => {
  return (
    <div className="flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4 p-4">
      <div className={cn('flex gap-4', 'md:gap-8')}>
        <a href={TERMS_OF_SERVICE_URL}>
          <Label text="이용약관" scale={1} styles={{ color: 'text-gray-600' }} />
        </a>

        <a href={PRIVACY_POLICY_URL}>
          <Label text="개인정보처리방침" scale={1} styles={{ color: 'text-gray-600' }} />
        </a>
      </div>

      <Caption
        text="Copyright © 2025 MeerkatBrothers. All rights reserved."
        scale={1}
        styles={{ color: 'text-gray-500', weight: 'font-medium' }}
      />
    </div>
  );
};

export default Footer;
