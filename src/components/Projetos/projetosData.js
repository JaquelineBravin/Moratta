const modulos = import.meta.glob('../../img/Projetos/**/*.png', {
  eager: true,
  import: 'default',
});

// Essa função recebe o nome de uma pasta e retorna um array com os caminhos das imagens contidas nessa pasta, ordenadas alfabeticamente. Ela utiliza a função Object.keys() para obter as chaves do objeto modulos, que são os caminhos das imagens. Em seguida, filtra esses caminhos para incluir apenas aqueles que contêm o nome da pasta especificada. Depois, ordena os caminhos em ordem alfabética usando sort(). Por fim, mapeia os caminhos filtrados para obter os valores correspondentes no objeto modulos, que são os caminhos das imagens.
function imagensDe(pasta) {
  return Object.keys(modulos)
    .filter((caminho) => caminho.includes(`/${pasta}/`))
    .sort()
    .map((caminho) => modulos[caminho]);
}

export const projetos = [
  {
    id: 'apartamentoAmbar',
    index: 0,
    image: imagensDe('apartamentoAmbar'),
    room: 'Apartamento Ambar',
    city: 'Goiânia, GO',
    category: 'Residencial',
  },
  {
    id: 'apartamentoRefugio',
    index: 1,
    image: imagensDe('apartamentoRefugio'),
    room: 'apartamento Refugio',
    city: 'Vilhena, RO',
    category: 'Residencial',
  },
  {
    id: 'airbnbLeme',
    index: 2,
    image: imagensDe('airbnbLeme'),
    room: 'AIRBNB LEME',
    city: 'Cacoal, RO',
    category: 'Residencial',
  },
  {
    id: 'cozinhaPecas',
    index: 3,
    image: imagensDe('cozinhaPecas'),
    room: 'cozinha Pecas',
    city: 'São Paulo, SP',
    category: 'Residencial',
  },
  {
    id: 'quartoAlgodao',
    index: 4,
    image: imagensDe('quartoAlgodao'),
    room: 'quarto Algodao',
    city: 'São Paulo, SP',
    category: 'Residencial',
  },
  {
    id: 'ecossistemaFlorescer',
    index: 5,
    image: imagensDe('ecossistemaFlorescer'),
    room: 'ecossistema Florescer',
    city: 'São Paulo, SP',
    category: 'Residencial',
  },
];
