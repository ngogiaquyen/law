import { ModalOverLayProvider } from './ModalOverLayProvider';
import { ToastProvider } from './ToastProvider';

function CombinedProvider({ children }) {
  return (
      <ModalOverLayProvider>
        <ToastProvider>
          {children}
        </ToastProvider>
      </ModalOverLayProvider>
  );
}

export default CombinedProvider;
