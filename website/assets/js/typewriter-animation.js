var TEXT = "Do not listen to rumour. The situation is under control."
const carouselText = [
  {text: TEXT , color: "#000090"}
]
const typewriter = document.querySelector("#typewriter");

const typewriterOptions = {
    root: null,
    threshold: 1,
    rootMargin: "0% 0% -50% 0%"
}

const typewriterObserver = new IntersectionObserver(function(entries, typewriterObserver){
    entries.forEach(entry=>{
        if (!entry.isIntersecting){
            return;
        }
        typeSentence(TEXT, entry.target);       
        typewriterObserver.unobserve(entry.target);
    });
}, typewriterOptions);

typewriterObserver.observe(typewriter);

async function typeSentence(sentence, eleRef, delay = 50) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}