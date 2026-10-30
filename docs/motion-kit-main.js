(() => {
  const input=document.getElementById('work-search');
  const cards=[...document.querySelectorAll('.work')];
  const buttons=[...document.querySelectorAll('[data-filter]')];
  let category='all';
  function filter(){
    const q=input.value.trim().toLocaleLowerCase('ja');
    let count=0;
    cards.forEach(c=>{const match=(category==='all'||c.dataset.category===category)&&c.textContent.toLocaleLowerCase('ja').includes(q);c.hidden=!match;if(match)count++;});
    document.querySelector('.result-count').textContent=count+'作品';
    document.getElementById('no-results').hidden=count>0;
  }
  buttons.forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;buttons.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));filter();}));
  input.addEventListener('input',filter);
  const menu=document.querySelector('.mobile-nav');
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.open=false));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.open){menu.open=false;menu.querySelector('summary').focus();}});
  const deck=document.querySelector('.deck');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  let scheduled=false;
  function update(){scheduled=false;const r=deck.getBoundingClientRect();const p=Math.min(1,Math.max(0,(innerHeight-r.top)/(innerHeight+r.height)));deck.style.setProperty('--progress',reduce.matches?'0':p.toFixed(3));}
  function schedule(){if(!scheduled){scheduled=true;requestAnimationFrame(update);}}
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);reduce.addEventListener('change',schedule);update();
})();
