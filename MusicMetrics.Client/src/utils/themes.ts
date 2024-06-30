export const manageTheme = (themeName?: string) => {
  const storedTheme = localStorage.getItem('theme');

  const themeToApply = themeName || storedTheme || 'theme-dark';

  localStorage.setItem('theme', themeToApply);
  document.documentElement.className = themeToApply;
};
