// Lee los archivos de src/content/cargos/*.md y los entrega ordenados.
// Para agregar un cargo, crea un archivo nuevo en esa carpeta con el mismo formato.
const modulos = import.meta.glob('../content/cargos/*.md', { eager: true });

export function getCargos() {
  return Object.entries(modulos)
    .map(([ruta, mod]) => ({
      slug: ruta.split('/').pop().replace('.md', ''),
      data: mod.frontmatter,
      Content: mod.Content,
    }))
    .sort((a, b) => a.data.orden - b.data.orden);
}
