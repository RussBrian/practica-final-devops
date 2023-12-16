describe('Test HTML Content', () => {
    test('should contain specific content in h1 and h2', () => {
      if (typeof document !== 'undefined') {
        const h1Content = 'Russel Brian Martinez Veloz';
        const h2Content = '20211742';
        
        expect(document.body.innerHTML).toContain(h1Content);
        expect(document.body.innerHTML).toContain(h2Content);
      } else {
        console.warn('No se pudo acceder al objeto document. Asegúrate de que estás ejecutando en un entorno adecuado.');
      }
    });
  });
  