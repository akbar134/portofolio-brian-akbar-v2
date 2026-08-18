const menu=document.getElementById("menu"),links=document.getElementById("links");menu.addEventListener("click",()=>links.classList.toggle("open"));document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));document.getElementById("year").textContent=new Date().getFullYear();const secs=document.querySelectorAll("main section");window.addEventListener("scroll",()=>{let c="home";secs.forEach(s=>{if(scrollY>=s.offsetTop-160)c=s.id});document.querySelectorAll("nav a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+c))});
// Welcome intro
window.addEventListener("load", () => {
  const welcome = document.getElementById("welcome-screen");

  setTimeout(() => {
    welcome.remove();
  }, 6000);
});
