import { FC, useCallback, useMemo, useState } from 'react';

import { User } from './users';
import { UserCard } from '../UserCard/UserCard';

// пример взят с https://codesandbox.io/p/sandbox/gracious-leftpad-15kufd

type Props = {
  users: User[];
};

export const UserList: FC<Props> = ({ users }) => {
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()));
  }, [users, filter]);

  const sortedUsers = useMemo(() => {
    return filteredUsers.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }, [filteredUsers, sortOrder]);

  const handleCardClick = useCallback((id: User['id']) => {
    console.log('card click', id);
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="filter">Filter:</label>
        <input type="text" id="filter" value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>

      <div>
        <label htmlFor="sortOrder">Sort:</label>
        <select id="sortOrder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div>
        {sortedUsers.map((user) => (
          <UserCard key={user.id} user={user} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};
