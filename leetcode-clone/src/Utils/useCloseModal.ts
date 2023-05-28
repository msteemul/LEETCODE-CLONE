import { useSetRecoilState } from 'recoil';
import { authModalState } from '../Atoms/authModalAtoms';
import { useEffect } from 'react';

export default function useCloseModal() {
  const setAuthModal = useSetRecoilState(authModalState);

  const closeModal = () => {
    setAuthModal(prevState => ({
      ...prevState,
      isOpen: false,
      type: 'login'
    }));
  };

  useEffect(() => {
    const handleEscape = (e:any) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return closeModal;
}