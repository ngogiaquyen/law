import { useEffect, useState } from 'react';

export default function useScrollDirection() {
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setScrollUp(true); // Cuộn lên
      } else if (currentScrollY > lastScrollY) {
        setScrollUp(false); // Cuộn xuống
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return scrollUp;
}
