import { onMounted } from "vue";

export default function observeAnimation(element, anim, threshold) {
  onMounted(() => {
    const elements = document.querySelectorAll(element);
    const observer = new IntersectionObserver(
      (entities) => {
        entities.forEach((val) => {
          if (val.isIntersecting) {
            val.target.classList.add(anim);
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    for (let i of elements) {
      observer.observe(i);
    }
  });
}
