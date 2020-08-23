import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import request from '../../../utils/request';
import { BreedImagesResponse } from './types';
import Container from '../../../components/Container';
import twcss from '../../../utils/style';

function BreedImages(): ReactElement {
  const [images, setImages] = useState<string[]>([]);
  const { breed } = useParams<{ breed: string }>();

  useEffect(() => {
    (async (): Promise<void> => {
      const data = await request<BreedImagesResponse>(
        `https://dog.ceo/api/breed/${breed}/images`
      );
      if (data) {
        setImages(data);
      }
    })();
  }, [breed]);
  return (
    <Container>
      <h1>Breed Images</h1>
      <ul
        className={twcss([
          'grid',
          'grid-cols-2',
          'sm:grid-cols-3',
          'gap-4',
          'pb-4',
        ])}
      >
        {images.map(
          (image): ReactElement => (
            <figure
              className={twcss(['rounded-lg', 'shadow'])}
              style={{
                height: '200px',
              }}
            >
              <img
                className={twcss(['h-full', 'w-full', 'rounded-lg'])}
                style={{ objectFit: 'cover' }}
                src={image}
                alt={breed}
              />
            </figure>
          )
        )}
      </ul>
    </Container>
  );
}

export default BreedImages;
