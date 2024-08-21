import { useEffect, useState } from 'react';
import { useTheme } from '../../../shared/lib/hooks/useTheme';

import styles from './styles.module.scss';
import { Translate } from '../../../shared/ui/molecules/Translate';
import { DICTIONARY } from '../../../shared/dictionary/dictionary';

type PostType = {
  id: number;
  title: string;
  body: string;
};

type Nullable<T> = T | null;

const UseEffectTask = () => {
  const { isDark } = useTheme();
  const [post, setPost] = useState<Nullable<PostType>>(null);
  const [id, setId] = useState<string>('1');

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((res) => res.json())
  //     .then((data: PostType) => setPost(data));
  // }, [id]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { signal })
      .then((res) => res.json())
      .then((data: PostType) => setPost(data))
      .catch((e) => {
        if (e.name === 'AbortError') {
          console.log('abort');
        }
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <section className={`${styles.effect} ${isDark ? styles.dark : styles.light}`}>
      <h1>
        <Translate>{DICTIONARY.post}</Translate>
      </h1>
      {post ? (
        <div className={styles.post}>
          <div>id: {post.id}</div>
          <div>
            <span>
              <Translate>{DICTIONARY.postTitle}</Translate>:&nbsp;
            </span>
            {post.title}
          </div>
          <div>
            <span>
              <Translate>{DICTIONARY.postBody}</Translate>:&nbsp;
            </span>
            {post.body}
          </div>
        </div>
      ) : (
        <p>loading post 1...</p>
      )}

      <button onClick={() => setId('2')}>
        <Translate>{DICTIONARY.post} 2</Translate>
      </button>
      <button onClick={() => setId('3')}>
        <Translate>{DICTIONARY.post} 3</Translate>
      </button>
      <button onClick={() => setId('4')}>
        <Translate>{DICTIONARY.post} 4</Translate>
      </button>
    </section>
  );
};

export default UseEffectTask;
