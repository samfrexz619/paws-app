export interface CardItems {
  variant: string;
  id: number;
  img: string;
  path: string;
}

// interface EmojiLinks {
//   id: number;
//   emoji: string;
//   path: string;
// }

export interface CatData {
  id: string;
  url: string;
  width?: number;
  height?: number;
}

type Image = {
  height: number;
  width: number;
  id: string;
  url: string;
}

type Weight = {
  imperial: string;
  metric: string;
}

export interface BreedData {
  description: string;
  image: Image;
  name: string;
  id: string;
  temperament: string;
  life_span: string;
  origin: string;
  weight: Weight;
}
