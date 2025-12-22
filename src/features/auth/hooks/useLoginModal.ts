import { useContext } from 'react';

import InitializeFailedError from '@/shared/errors/client/initialize-failed-error';

import { LoginModalContext } from '@/features/auth/contexts/LoginModalContext';

const useLoginModal = () => {
  const context = useContext(LoginModalContext);
  if (!context) throw new InitializeFailedError();

  return context;
};

export default useLoginModal;
