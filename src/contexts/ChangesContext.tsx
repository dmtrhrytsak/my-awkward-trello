import { createContext, useEffect } from 'react';

import { useUndoableChanges } from '../hooks/useUndoableChanges';

const ChnagesContext = createContext(null);

type ChnagesContextProviderProps = {
  children: React.ReactNode;
};

export const ChangesProvider: React.FC<ChnagesContextProviderProps> = ({
  children,
}) => {
  const { handleUndoChange } = useUndoableChanges();

  useEffect(() => {
    document.addEventListener('keydown', handleUndoChange);

    return () => document.removeEventListener('keydown', handleUndoChange);
  }, [handleUndoChange]);

  return (
    <ChnagesContext.Provider value={null}>
      {children}
      <div onKeyDown={(e) => {}}></div>
    </ChnagesContext.Provider>
  );
};
