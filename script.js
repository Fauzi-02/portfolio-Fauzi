const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
const themeToggle=document.getElementById("themeToggle");
const backTop=document.getElementById("backTop");

menuToggle?.addEventListener("click",()=>{
  const opened=navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(opened));
  menuToggle.setAttribute("aria-label",opened?"Tutup menu":"Buka menu");
  menuToggle.textContent=opened?"×":"☰";
});
navLinks?.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
  navLinks.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded","false");
  if(menuToggle){menuToggle.textContent="☰";menuToggle.setAttribute("aria-label","Buka menu");}
}));

function applyTheme(theme){
  document.body.classList.toggle("light-mode",theme==="light");
  if(themeToggle){themeToggle.textContent=theme==="light"?"☾":"☼";themeToggle.setAttribute("aria-label",theme==="light"?"Aktifkan mode gelap":"Aktifkan mode terang");}
}
const savedTheme=localStorage.getItem("portfolio-theme")||"dark";
applyTheme(savedTheme);
themeToggle?.addEventListener("click",()=>{
  const next=document.body.classList.contains("light-mode")?"dark":"light";
  localStorage.setItem("portfolio-theme",next);
  applyTheme(next);
});

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target);}
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

const sections=[...document.querySelectorAll("main section[id]")];
const navAnchors=[...document.querySelectorAll(".nav-links a")];
const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navAnchors.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(section=>sectionObserver.observe(section));

window.addEventListener("scroll",()=>{
  backTop?.classList.toggle("visible",window.scrollY>500);
},{passive:true});
backTop?.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
const year=document.getElementById("year");
if(year)year.textContent=new Date().getFullYear();
