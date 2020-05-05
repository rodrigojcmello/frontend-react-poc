export interface Breed {
  name: string;
  types: string[];
}

interface BreedSuccessResponse {
  [breed: string]: string[];
}

export type BreedResponse = BreedSuccessResponse | undefined;
