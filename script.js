// Mobile nav toggle
(function(){
var nav = document.getElementById('nav');
var toggle = document.getElementById('navToggle');
toggle.addEventListener('click', function(){
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
});
nav.querySelectorAll('.nav__links a').forEach(function(link){
    link.addEventListener('click', function(){
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    });
});
})();

// Scroll reveal
(function(){
if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-visible'); });
    return;
}
var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
    if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
    }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(function(el){ observer.observe(el); });
})();