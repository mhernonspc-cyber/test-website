import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

type UTMState = Record<string, string>;

type UTMContextValue = {
  utm: UTMState;
  setUTM: (utm: UTMState) => void;
};

const STORAGE_KEY = 'vitavera_utm';

const UTMContext = createContext<UTMContextValue | undefined>(undefined);

export function UTMProvider({ children }: { children: ReactNode }) {
  const [utm, setUtmState] = useState<UTMState>({});

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setUtmState(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to parse stored UTM params', error);
      }
    }

    const params = new URLSearchParams(window.location.search);
    const captured: UTMState = {};
    params.forEach((value, key) => {
      if (key.startsWith('utm_')) {
        captured[key] = value;
      }
    });

    if (Object.keys(captured).length > 0) {
      setUtmState((prev) => {
        const next = { ...prev, ...captured };
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        return next;
      });
    }
  }, []);

  const setUTM = (next: UTMState) => {
    setUtmState(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const value = useMemo(() => ({ utm, setUTM }), [utm]);

  return <UTMContext.Provider value={value}>{children}</UTMContext.Provider>;
}

export function useUTM() {
  const context = useContext(UTMContext);
  if (!context) {
    throw new Error('useUTM must be used within a UTMProvider');
  }
  return context;
}
