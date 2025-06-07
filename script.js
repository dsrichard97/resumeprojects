<script>
  // grab controls + list
  const select = document.getElementById('projectCategory');
  const search = document.getElementById('projectSearch');
  const items  = document.querySelectorAll('.project-item');

  function filterProjects() {
    const category = select.value;
    const term     = search.value.trim().toLowerCase();

    items.forEach(item => {
      const cat   = item.dataset.category;
      const text  = item.innerText.toLowerCase();

      // category match (or All) AND search term match in title/meta/description
      const catMatch = (category === 'All') || (cat === category);
      const textMatch = text.includes(term);

      item.style.display = (catMatch && textMatch) ? '' : 'none';
    });
  }

  select.addEventListener('change', filterProjects);
  search.addEventListener('input', filterProjects);
</script>
/* === SIDEBAR LINKS: lightsaber underline on hover/active === */
.w3-sidebar.left a {
  position: relative;                /* allow pseudo‐element positioning */
  overflow: hidden;
}
.w3-sidebar.left a::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: var(--vader-red);
  box-shadow:
    0 0 8px var(--vader-red),
    0 0 12px var(--vader-red);
  transition: width 0.4s ease;
}
.w3-sidebar.left a:hover::before,
.w3-sidebar.left a.active::before {
  width: 100%;
}

/* === TOP NAV BUTTONS: match your project-tab styles === */
.w3-bar.top .w3-bar-item {
  background: #222;
  color: #eee !important;
  border-radius: 4px;
  padding: 0.3rem 0.8rem;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
.w3-bar.top .w3-bar-item.active,
.w3-bar.top .w3-bar-item:hover {
  background: var(--vader-red) !important;
  color: #111 !important;
  transform: scale(1.05);
}

/* If you want the Vader icon itself to get the same treatment: */
.w3-bar.top .w3-bar-item svg.vader-icon {
  transition: fill 0.2s, transform 0.2s;
}
.w3-bar.top .w3-bar-item:hover svg.vader-icon,
.w3-bar.top .w3-bar-item.active svg.vader-icon {
  fill: var(--vader-red);
  transform: scale(1.1);
}
