import { FC, memo, useEffect, useRef, useState } from 'react';
import { UserCard } from '../../../widgets/UserCard/UserCard';
import { User, users } from '../../../widgets/UsersList/users';
import { UserList } from '../../../widgets/UsersList/UsersList';

// пример взят с https://codesandbox.io/p/sandbox/gracious-leftpad-15kufd

const Reconciliation = () => {
  return (
    <>
      <h1>reconciliation</h1>
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/* <Example3 /> */}

      {/* <List1 /> */}
      <List2 />
    </>
  );
};

export default Reconciliation;

export function Example1() {
  const [isTriger, setIsTriger] = useState(false);

  const renderElements = () => {
    if (isTriger) {
      return (
        <div>
          <span key={1}>Title</span>
          <UserCard key={2} user={users[0]} />
        </div>
      );
    }
    return (
      <div>
        <UserCard key={2} user={users[0]} />
        <span key={1}>Title</span>
      </div>
    );
  };

  return (
    <div>
      <button onClick={() => setIsTriger((t) => !t)}>Click</button>
      {renderElements()}
    </div>
  );
}

export function Example2() {
  const [isTriger, setIsTriger] = useState(false);

  const renderElements = () => {
    if (isTriger) {
      return (
        <div>
          <span key="span">Title</span>
          <UserCard key="card" user={users[0]} />
        </div>
      );
    }
    return (
      <>
        <UserCard key="card" user={users[0]} />
        <span key="span">Title</span>
      </>
    );
  };

  return (
    <div>
      <button onClick={() => setIsTriger((t) => !t)}>Click</button>
      {renderElements()}
    </div>
  );
}

export function Example3() {
  const [userId, setUserId] = useState(1);

  return (
    <div>
      <button onClick={() => setUserId((t) => t + 1)}>+1</button>
      <button onClick={() => setUserId((t) => t - 1)}>-1</button>
      <UserCard key={userId} user={users.find((u) => u.id === userId) as User} />
    </div>
  );
}

export function List1() {
  return <UserList users={users} />;
}

export function List2() {
  const [stack, setStack] = useState<number[]>([]);
  const counterRef = useRef(1);

  return (
    <div>
      <button onClick={() => setStack((s) => [...s, counterRef.current++])}>ToEnd</button>
      <button onClick={() => setStack((s) => [counterRef.current++, ...s])}>ToStart</button>

      {stack.map((s) => (
        <StackItem key={s} s={s} />
      ))}
    </div>
  );
}

const StackItem: FC<{ s: number }> = memo(({ s }) => {
  const lastCounter = useRef(s);
  console.log('rerender', s, lastCounter.current);

  lastCounter.current = s;
  useEffect(() => {
    console.log('mount', s);
    return () => {
      console.log('unmount', s);
    };
  }, []);
  return <div>{s}</div>;
});
