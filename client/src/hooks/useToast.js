import { useCallback, useEffect, useRef, useState } from 'react';

const useToast = () => {
  const [messages, setMessages] = useState([]);
  const timeouts = useRef([]);

  const notify = useCallback((message, variant = 'success') => {
    const id = `${Date.now()}-${Math.random()}`;
    setMessages((items) => [...items, { id, message, variant }]);

    const timeoutId = window.setTimeout(() => {
      setMessages((items) => items.filter((item) => item.id !== id));
    }, 4000);

    timeouts.current.push(timeoutId);
  }, []);

  useEffect(() => {
    return () => {
      timeouts.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
      timeouts.current = [];
    };
  }, []);

  return { messages, notify };
};

export default useToast;
