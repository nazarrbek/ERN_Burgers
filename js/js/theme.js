// js/theme.js
(function () {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  // Получаем сохранённую тему
  let saved = localStorage.getItem('theme'); // 'dark' | 'light' | null

  // Если нет сохранённой — используем system preference
  if (!saved) {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    saved = prefersDark ? 'dark' : 'light';
  }

  // Применяем тему: ставим КОТОРУЮ-ИМЕННО класс на body
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      if (themeIcon) themeIcon.textContent = '🌞';
      if (toggleBtn) toggleBtn.setAttribute('aria-pressed', 'true');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      if (themeIcon) themeIcon.textContent = '🌙';
      if (toggleBtn) toggleBtn.setAttribute('aria-pressed', 'false');
    }
  }

  // Инициализация
  applyTheme(saved);

  // Обработчик переключения
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const isDark = document.body.classList.toggle('dark-mode');
      if (isDark) {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        if (themeIcon) themeIcon.textContent = '🌞';
        toggleBtn.setAttribute('aria-pressed', 'true');
      } else {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        if (themeIcon) themeIcon.textContent = '🌙';
        toggleBtn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  // Если хочешь, можно следить за системной сменой схемы:
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      // Если пользователь не сохранил тему вручную, обновим тему по system preference
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
})();
