// пример взят с https://codesandbox.io/p/sandbox/gracious-leftpad-15kufd

export const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 555-555-5555',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    phone: '+1 555-555-5555',
    avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    id: 3,
    name: 'Bob Smith',
    email: 'bobsmith@example.com',
    phone: '+1 555-555-5555',
    avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    id: 4,
    name: 'Alice Johnson',
    email: 'alicejohnson@example.com',
    phone: '+1 555-555-5555',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
];

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
};

export type { User };
