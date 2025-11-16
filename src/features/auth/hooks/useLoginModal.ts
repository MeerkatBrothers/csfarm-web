import { useContext } from 'react';

import ProviderMissingError from '@/lib/errors/providerMissingError';

import { LoginModalContext } from '@/features/auth/contexts/LoginModalContext';

const useLoginModal = () => {
  const context = useContext(LoginModalContext);
  if (!context) {
    throw new ProviderMissingError('useLoginModal');
  }

  return context;
};

export default useLoginModal;
