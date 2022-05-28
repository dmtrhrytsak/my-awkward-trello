import { useEffect, useRef } from 'react';

export function useAutoFocus<T extends HTMLElement>(
  selectText: boolean = false
) {
  const selectedText = useRef(selectText);
  const inputRef = useRef<T | null>(null);

  useEffect(() => {
    inputRef.current?.focus();

    if (selectedText.current) {
      {/* @ts-ignore */}
      inputRef.current?.select() as HTMLTextAreaElement;
    }
  }, []);

  return { ref: inputRef };
}
