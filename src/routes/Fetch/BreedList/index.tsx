import React, { ReactElement, useEffect, useState } from 'react';
import request from '../../../utils/request';
import { Breed, BreedResponse } from './types';
import SimpleItemList from '../../../components/SimpleItemList';
import Container from '../../../components/Container';
import twcss from '../../../utils/style';

function BreedList(): ReactElement {
  const [breeds, setBreeds] = useState<Breed[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      const data = await request<BreedResponse>(
        'https://dog.ceo/api/breeds/list/all'
      ).catch((error: Error) => {
        setBreeds([{ name: error.stack as string, types: [] }]);
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
    <Container>
      <h1>Breed List</h1>
      <ul className={twcss(['pb-8'])}>
        {breeds.map(
          (breed): ReactElement => (
            <SimpleItemList key={breed.name} text={breed.name} />
          )
        )}
      </ul>
    </Container>
  );
}

export default BreedList;