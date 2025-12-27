import { ToastContainer } from 'react-toastify';

const ToastProvider = () => {
  return <ToastContainer position="top-right" autoClose={3000} />;
};

export default ToastProvider;
