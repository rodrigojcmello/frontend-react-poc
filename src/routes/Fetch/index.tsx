import React, { ReactElement, useEffect, useState } from 'react';
import request from './request';

interface Breed {
  name: string;
  types: string[];
}

interface BreedSuccessResponse {
  [breed: string]: string[];
}

type BreedResponse = BreedSuccessResponse | undefined;

function Fetch(): ReactElement {
  const [breeds, setBreeds] = useState<Breed[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      const data = await request<BreedResponse>(
        'https://dog.ceo/api/breeds/list/all'
      ).catch(() => {
        setBreeds([{ name: 'empty list', types: [] }]);
      });
      if (data) {
        const newBreeds: Breed[] = [];
        Object.keys(data).map((value): void => {
          newBreeds.push({
            name: value,
            types: data[value],
          });
          return undefined;
        });
        setBreeds(newBreeds);
      }
    })();
  }, []);
  return (
    <ul>
      {breeds.map(
        (breed): ReactElement => (
          <li key={breed.name}>{breed.name}</li>
        )
      )}
    </ul>
  );
}

export default Fetch;
