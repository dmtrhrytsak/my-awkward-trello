import { useRef, useEffect } from 'react';

type EditProps = {
  children: React.ReactNode;
  onExit: () => void;
};

const Edit: React.FC<EditProps> = ({ children, onExit }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onExit();
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onExit]);

  return (
    <div ref={ref} className="absolute z-10 top-0 left-0 right-0">
      {children}
    </div>
  );
};

export default Edit;
