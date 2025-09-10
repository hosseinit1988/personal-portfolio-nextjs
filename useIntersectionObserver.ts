
import { useState, useEffect, RefObject } from 'react';

interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

/**
 * A custom React hook that uses the Intersection Observer API to detect when an element is visible in the viewport.
 * @param ref - A React ref attached to the element to observe.
 * @param options - Configuration options for the Intersection Observer.
 * @returns {boolean} - True if the element is intersecting, false otherwise.
 */
function useIntersectionObserver(
  ref: RefObject<Element>,
  options: ObserverOptions = {}
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);
  const { root = null, rootMargin = '0px', threshold = 0.1, triggerOnce = true } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, root, rootMargin, threshold, triggerOnce]);

  return isIntersecting;
}

export default useIntersectionObserver;
