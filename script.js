// script.js - dynamic project rendering, nav, and small interactions
document.addEventListener('DOMContentLoaded', () => {
  // Update footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('open');
});



  // Sample project data - replace with your projects
  const projects = [
    {
      id: 1,
      title: "E-commerce Store (Frontend)",
      desc: "Responsive product listing, cart UI and checkout flow (frontend only). Built with React + Context and localStorage.",
      tags: ["react","ui"],
      repo: "https://github.com/Vikesh00/E-store",
      live: "#"
    },
    {
      id: 2,
      title: "Todo App",
      desc: "Vanilla JS Todo with add/edit/complete and persistence via localStorage. Small, fast and accessible.",
      tags: ["vanilla"],
      repo: "https://github.com/Vikesh00/Todo",
      live: "#"
    },
    {
      id: 3,
      title: "Apple UI Clone",
      desc: "Pixel-perfect UI clone focusing on layout, typography and responsive behavior.",
      tags: ["ui","vanilla"],
      repo: "https://github.com/Vikesh00/Apple-iPhone-page",
      live: "#"
    },
    {
      id: 4,
      title: "Movie Finder (API)",
      desc: "Search movies using an external API with caching and graceful loading states.",
      tags: ["vanilla","ui"],
      repo: "https://github.com/Vikesh00/Flick-Finder",
      live: "#"
    },
    {
      id: 5,
      title: "Tic Tac Toe ",
      desc: "Interactive tic-tac-toe with a simple AI. Focus on game logic and UX.",
      tags: ["vanilla"],
      repo: "https://github.com/Vikesh00/tic-tac-toe",
      live: "#"
    }
  ];

  // Render projects
  const grid = document.getElementById('projectsGrid');

  function createProjectCard(p) {
    const div = document.createElement('article');
    div.className = 'project';
    div.setAttribute('data-tags', p.tags.join(' '));
    div.innerHTML = `
      <div class="thumb" aria-hidden="true">
        <!-- placeholder image, replace with project screenshots -->
        <svg width="100%" height="120" viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <rect width="600" height="120" fill="#071127"/>
          <text x="20" y="70" fill="#4b5563" font-size="18" font-family="Inter, Arial"> ${escapeHtml(p.title)}</text>
        </svg>
      </div>
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.desc)}</p>
      <div class="meta">
        <a title="View repository" href="${p.repo}" target="_blank" rel="noopener">Repo</a>
        <span style="margin-left:auto;color:var(--muted)">${p.tags.join(' • ')}</span>
      </div>
    `;
    return div;
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }

  function loadProjects(list) {
    grid.innerHTML = '';
    list.forEach(p => grid.appendChild(createProjectCard(p)));
  }

  loadProjects(projects);

  // Filter buttons
  document.querySelectorAll('.tag').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') loadProjects(projects);
      else loadProjects(projects.filter(p => p.tags.includes(filter)));
    });
  });

  // Lightweight "send message" simulation
  const contactForm = document.getElementById('contactForm');
  const sendBtn = document.getElementById('sendBtn');
  const formNote = document.getElementById('formNote');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';

    // Example: you should replace this with real API call or service
    setTimeout(() => {
      sendBtn.textContent = 'Sent ✓';
      formNote.textContent = 'Thanks — message captured locally (demo). Hook up a service to send real emails.';
    }, 900);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
