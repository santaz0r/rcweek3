import { FC, memo, useEffect, useState } from 'react';
import { User } from '../UsersList/users';

// пример взят с https://codesandbox.io/p/sandbox/gracious-leftpad-15kufd

type Props = {
  user: User;
  onClick?: (id: User['id']) => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const UserCard: FC<Props> = memo(({ user, onClick }) => {
  const [counter, setCounter] = useState(0);
  console.log('rerender', user.id);
  useEffect(() => {
    console.log('mount', user.id);
    return () => {
      console.log('unmount', user.id);
    };
  }, []);

  return (
    <div
      onClick={() => {
        setCounter((c) => c + 1);
      }}
      className="user-card"
    >
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>
        {user.phone} + {counter}
      </p>
    </div>
  );
});
