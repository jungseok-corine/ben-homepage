/**
 * Studio Ben - Language Toggle
 * Handles EN/KO language switching with localStorage persistence
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'studio-ben-lang';
  const DEFAULT_LANG = 'en';

  /**
   * Initialize language on page load
   */
  function initLanguage() {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
      setLanguage(savedLang);
    } catch (error) {
      console.warn('localStorage not available, using default language:', error);
      setLanguage(DEFAULT_LANG);
    }
  }

  /**
   * Set the current language and update UI
   * @param {string} lang - Language code ('en' or 'ko')
   */
  function setLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Hide all language content
    const allLangElements = document.querySelectorAll('[data-lang]');
    allLangElements.forEach(element => {
      element.style.display = 'none';
    });

    // Show content for selected language
    const selectedLangElements = document.querySelectorAll(`[data-lang="${lang}"]`);
    selectedLangElements.forEach(element => {
      element.style.display = '';
    });

    // Update toggle button text
    const toggleButton = document.getElementById('lang-toggle');
    if (toggleButton) {
      toggleButton.textContent = lang === 'en' ? 'KO' : 'EN';
      toggleButton.setAttribute('aria-label',
        lang === 'en' ? 'Switch to Korean' : 'Switch to English'
      );
    }

    // Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      console.warn('Unable to save language preference:', error);
    }
  }

  /**
   * Toggle between EN and KO
   */
  function toggleLanguage() {
    const currentLang = document.documentElement.lang || DEFAULT_LANG;
    const newLang = currentLang === 'en' ? 'ko' : 'en';
    setLanguage(newLang);
  }

  /**
   * Set up event listeners
   */
  function setupEventListeners() {
    const toggleButton = document.getElementById('lang-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleLanguage);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initLanguage();
      setupEventListeners();
    });
  } else {
    initLanguage();
    setupEventListeners();
  }
})();