document.addEventListener('DOMContentLoaded', ()=>{
  // blog filters & search
  const posts = document.querySelectorAll('#posts .card');
  const tabs = document.querySelectorAll('.tab');
  const search = document.getElementById('search');
  let currentCat = 'all';

  function applyFilters(){
    const q = (search?.value || '').toLowerCase().trim();
    posts.forEach(card=>{
      const cat = (card.getAttribute('data-cat') || '').toLowerCase();
      const tags = (card.getAttribute('data-tags') || '').toLowerCase();
      const text = card.textContent.toLowerCase();
      const matchCat = (currentCat === 'all') || (cat === currentCat.toLowerCase());
      const matchQ = !q || text.includes(q) || tags.includes(q);
      card.style.display = (matchCat && matchQ) ? '' : 'none';
    });
  }

  tabs.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      tabs.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.getAttribute('data-cat') || 'all';
      applyFilters();
    });
  });

  if(search){
    search.addEventListener('input', applyFilters);
  }
});