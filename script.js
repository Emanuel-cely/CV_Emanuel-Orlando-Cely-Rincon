const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Effect
    const roles = [
      'Information Security & Development',
      'Vulnerability Assessment Analyst',
      'Software Engineer & Ethical Hacker'
    ];
    let ri = 0, ci = 0, deleting = false;
    const typingEl = document.querySelector('.typing');

    function type() {
      const current = roles[ri];
      if (!deleting) {
        typingEl.textContent = current.slice(0, ++ci);
        if (ci === current.length) { deleting = true; setTimeout(type, 2200); return; }
      } else {
        typingEl.textContent = current.slice(0, --ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
      }
      setTimeout(type, deleting ? 40 : 70);
    }
    type();
    
    // Dynamic date
    document.getElementById("year").textContent = new Date().getFullYear();
