import { useEffect, useState } from 'react';

export function useScrollProgress(scrollDistance) {
  const [progress, setProgress] = useState(0); // Estado para armazenar o progresso da rolagem, variando de 0 a 1

  useEffect(() => {
    let frameRequested = false; // Variável para controlar se uma atualização de quadro foi solicitada

    function updateProgress() {
      const t = Math.min(window.scrollY / scrollDistance, 1); // Calcula o progresso com base na distância de rolagem. O 1 é o valor máximo, garantindo que o progresso não ultrapasse 1. A formula funciona da seguinte forma: Ela pega a posição atual da rolagem (window.scrollY) e divide pelo valor máximo de rolagem (scrollDistance). Se a posição da rolagem for menor que scrollDistance, t será um valor entre 0 e 1. Se a posição da rolagem for maior ou igual a scrollDistance, t será 1, indicando que o usuário rolou até o final da distância definida.
      setProgress(t); // Atualiza o estado do progresso
      frameRequested = false; // Indica que a atualização do progresso foi concluída
    }

    function handleScroll() {
      // Função para lidar com o evento de rolagem
      if (!frameRequested) {
        frameRequested = true; // Marca que uma atualização de quadro foi solicitada
        requestAnimationFrame(updateProgress); // Solicita a atualização do progresso na próxima animação de quadro
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true }); // Adiciona o ouvinte de evento de rolagem. O passive: true indica que o evento de rolagem não será bloqueado, permitindo uma rolagem mais suave.
    return () => window.removeEventListener('scroll', handleScroll); // Remove o ouvinte de evento de rolagem quando o componente é desmontado
  }, [scrollDistance]); // O useEffect depende de scrollDistance, garantindo que o efeito seja reexecutado se scrollDistance mudar.

  return progress; // Retorna o valor do progresso da rolagem, que varia de 0 a 1
}
