import { useState, useEffect, useRef } from 'react';
import { UseActiveSectionConfig, UseActiveSectionReturn } from '../types';

/**
 * useActiveSection
 *
 * Sensor que detecta qué sección del portfolio es visible en pantalla
 * usando la IntersectionObserver API.
 *
 * @param config - Contrato de entrada: sectionIds + opciones del observer
 * @returns Contrato de salida: el id de la sección actualmente activa
 */
export const useActiveSection = (
  config: UseActiveSectionConfig
): UseActiveSectionReturn => {
  // TODO: Verificar que esto inicializa correctamente cuando el DOM no existe aún
  const [activeSection, setActiveSection] = useState<string>(
    config.sectionIds[0] ?? ''
  );

  // Ref para guardar el id actual sin provocar re-renders al actualizarse
  const currentSectionRef = useRef<string>('');

  useEffect(() => {
    // TODO: 1. Obtener los elementos del DOM a partir de config.sectionIds
    //          Filtra los que sean null

    // TODO: 2. Crear el IntersectionObserver con config.rootMargin y
    //          config.threshold. En el callback:
    //            a. Filtra las entradas que estén intersectando
    //            b. Elige la más visible (mayor intersectionRatio)
    //            c. Si el id cambió respecto a currentSectionRef.current:
    //               - actualiza currentSectionRef.current
    //               - llama a setActiveSection con el nuevo id

    // TODO: 3. Llamar a observer.observe() para cada elemento

    // TODO: 4. Retornar la función de cleanup:
    //            - observer.unobserve() para cada elemento
    //            - observer.disconnect()
  }, [config.sectionIds, config.rootMargin, config.threshold]);

  // Temporary: these are declared for reference in the TODOs above.
  // Delete these two lines once the useEffect logic is implemented.
  void setActiveSection;
  void currentSectionRef;

  return { activeSection };
};
