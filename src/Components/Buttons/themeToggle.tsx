import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'dark' | 'light' | 'system';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Primero intentar obtener del localStorage
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) return savedTheme;
      
      // Si no hay tema guardado, usar preferencia del sistema
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'system';
      }
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === 'dark' || 
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  // Escuchar cambios en la preferencia del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        const root = document.documentElement;
        if (mediaQuery.matches) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Funciones para forzar temas específicos
  const setLightTheme = () => setTheme('light');
  const setDarkTheme = () => setTheme('dark');
  // const setSystemTheme = () => setTheme('system');
  function toggleTheme() {
    if(theme === "dark") {
      setLightTheme()      
    } else {
      setDarkTheme()
    }
  }
  return (
    <div className="flex gap-2">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-lg ${
          theme === 'light' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 dark:bg-gray-800'
        } hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors`}
        aria-label="Light theme"
      >
        <Sun className="w-5 h-5" style={theme === "dark" ? {display: "block"} : {display: "none"}}/>
        <Moon className="w-5 h-5" style={theme === "light" ? {display: "block"} : {display: "none"}}/>
      </button>

      {/* <button
        onClick={setDarkTheme}
        className={`p-2 rounded-lg ${
          theme === 'dark' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 dark:bg-gray-800'
        } hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors`}
        aria-label="Dark theme"
      >
        <Moon className="w-5 h-5" />
      </button> */}

      {/* <button
        onClick={setSystemTheme}
        className={`p-2 rounded-lg ${
          theme === 'system' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 dark:bg-gray-800'
        } hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors`}
      >
        System
      </button> */}
    </div>
  );
};

export default ThemeToggle;