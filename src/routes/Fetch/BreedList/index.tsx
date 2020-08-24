import React, { FC, useEffect, useState } from 'react';
import { Breed } from './types';
import SimpleItemList from '../../../components/SimpleItemList';
import Container from '../../../components/Container';
import twcss from '../../../utils/style';
import service from '../../../services';

const BreedList: FC = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [breedError, setBreedError] = useState({ status: false, message: '' });

  useEffect(() => {
    (async (): Promise<void> => {
      const data = await service.breed.listAll().catch((error: Error) => {
        setBreedError({ status: true, message: error.stack || error.message });
      });
      if (data) {
        const newBreeds: Breed[] = [];
        Object.keys(data).forEach((value) => {
          newBreeds.push({
            name: value,
            types: data[value],
          });
        });
        setBreeds(newBreeds);
      }
    })();
  }, []);
  if (breedError.status) return <div>Error</div>;

  return (
    <Container>
      <h1>Breed List</h1>
      <ul className={twcss(['pb-8'])}>
        {breeds.map((breed) => (
          <SimpleItemList key={breed.name} text={breed.name} />
        ))}
      </ul>
    </Container>
  );
};

export default BreedList;
