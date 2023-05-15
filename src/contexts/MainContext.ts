import { createContext } from 'react';
import { User } from '../types/User';
import { Album } from '../types/Album';

type Context = {
  user: User | null;
  albums: Album[];
  setAlbum: (image: string, name: string) => void;
  delAlbum: (name: string) => void;
};

export const MainContext = createContext<Context>({
  user: null,
  albums: [],
  setAlbum: () => {},
  delAlbum: () => {},
});
