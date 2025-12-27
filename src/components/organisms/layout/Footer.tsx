import Logo from '@/../public/svgs/logo.svg';

import { PRIVACY_POLICY_URL, TERMS_OF_SERVICE_URL } from '@/shared/constants/policy';
import { cn } from '@/shared/utils/cn';

import Caption from '@/components/atoms/typography/Caption';
import Label from '@/components/atoms/typography/Label';

const Footer = () => {
  return (
    <div
      className={cn(
        'flex h-full w-full max-w-6xl flex-col justify-between p-6',
        'md:flex-row md:items-center',
      )}
    >
      <div className="flex flex-col gap-6">
        <Logo width={80} />

        <div className="flex flex-col">
          <Caption
            text="Contact meerkatbrothers.team@gmail.com"
            scale={1}
            styles={{ color: 'text-gray-500', weight: 'font-medium' }}
          />

          <Caption
            text="Copyright © 2025 MeerkatBrothers. All rights reserved."
            scale={1}
            styles={{ color: 'text-gray-500', weight: 'font-medium' }}
          />
        </div>
      </div>

      <div className={cn('flex gap-4', 'md:gap-8')}>
        <a href={TERMS_OF_SERVICE_URL}>
          <Label text="이용약관" scale={1} styles={{ color: 'text-gray-600' }} />
        </a>

        <a href={PRIVACY_POLICY_URL}>
          <Label text="개인정보처리방침" scale={1} styles={{ color: 'text-gray-600' }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
