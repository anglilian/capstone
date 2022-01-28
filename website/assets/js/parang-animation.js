const parangImage = document.querySelector("#parang-1");
const newParangImage = document.querySelector("#parang-2");

const parangOptions = {
    root: null,
    threshold: 1,
    rootMargin: "0% 0% -30% 0%"
}

const parangObserver = new IntersectionObserver(function(entries, parangObserver){
    entries.forEach(entry=>{
        if (!entry.isIntersecting){
            return;
        }
       entry.target.classList.remove('appear');
       newParangImage.classList.add('appear');
    parangObserver.unobserve(entry.target);
    });
}, parangOptions);

parangObserver.observe(parangImage);