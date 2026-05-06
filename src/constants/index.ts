/**
 * Constantes centralizadas del proyecto
 * Evita repetición de datos hardcodeados
 */

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Sobre Mí' },
  { id: 'portfolio', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
] as const;

export const SECTION_IDS = [
  'home',
  'about',
  'portfolio',
  'contact',
] as const;

export const INTERSECTION_OBSERVER_CONFIG = {
  rootMargin: '-40% 0px -60% 0px',
  threshold: [0, 0.25, 0.5, 0.75, 1],
} as const;

export const FORMSPREE_ID = 'mldlzykj';
