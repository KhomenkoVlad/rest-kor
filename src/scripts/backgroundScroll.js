export const backgroundScroll = () => {
  window.addEventListener('load', () => {
    window.addEventListener('scroll', () => {
      let scrolled = window.scrollY;
      const parallaxBackground = document.getElementsByClassName('parallax-background');
      for (let element of parallaxBackground) {
        element.style.top =  (scrolled * 0.5) + 'px';
      }
    });
  });
}