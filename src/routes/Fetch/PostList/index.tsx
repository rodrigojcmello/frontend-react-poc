import React, { ReactElement, useEffect, useState } from 'react';
import request from '../../../utils/request';
import { Post, PostResponse } from './types';
import SimpleItemList from '../../../components/SimpleItemList';
import Container from '../../../components/Container';
import twcss from '../../../utils/style';

function PostList(): ReactElement {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      const data = await request<PostResponse>(
        'https://jsonplaceholder.typicode.com/posts'
      );
      if (data) {
        setPosts(data);
      }
    })();
  }, []);
  return (
    <Container>
      <h1>Breed List</h1>
      <ul className={twcss(['pb-8'])}>
        {posts.map(
          (post): ReactElement => (
            <SimpleItemList key={post.id} text={post.title} />
          )
        )}
      </ul>
    </Container>
  );
}

export default PostList;
