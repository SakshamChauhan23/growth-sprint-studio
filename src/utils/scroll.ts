// Optimized scroll utility to prevent forced reflows
export const smoothScrollTo = (elementId: string) => {
  // Use requestAnimationFrame to defer DOM queries and prevent forced reflows
  requestAnimationFrame(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  });
};

export const smoothScrollToElement = (element: HTMLElement | null) => {
  if (!element) return;
  
  requestAnimationFrame(() => {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  });
};