import { useMemo, useState, useCallback } from 'react';
import { Outlet } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { APP_ID } from './constants';

import { MainContext } from '../../contexts/MainContext';
import { Album } from '../../types/Album';
import { User } from '../../types/User';
import Header from '../Header/Header';

const Layout = () => {
  const [user, setUser] = useState<User | null>(null);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const visibleAlbums = useMemo(() => {
    if (!query.length) {
      return albums;
    }

    const reg = new RegExp(`${query}.+$`, 'i');

    return albums.filter(album => album.name.search(reg) !== -1);
  }, [albums, query]);

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const responseFacebook = (response: any) => {
    setUser(response);
  };

  const setAlbum = useCallback((image: string, name: string) => {
    setAlbums(currAlbums => {
      const found = currAlbums.find(currAlbum => currAlbum.name === name);

      if (found) {
        return currAlbums.map(currAlbum => {
          if (currAlbum.name === name) {
            return { ...currAlbum, photos: [...currAlbum.photos, image] };
          }

          return { ...currAlbum };
        });
      }

      return [...currAlbums, { name, photos: [] }];
    });
  }, []);

  const delAlbum = useCallback((name: string) => {
    setAlbums(currAlbums => currAlbums
      .filter(currAlbum => currAlbum.name !== name));
  }, []);

  return (
    <>
      {!user
        ? (
          <FacebookLogin
            // autoLoad
            appId={APP_ID}
            fields="name,email,picture"
            callback={responseFacebook}
          />
        ) : (
          <MainContext.Provider value={{
            user,
            albums: visibleAlbums,
            setAlbum,
            delAlbum,
          }}
          >
            <Header />
            <main>
              <Outlet />
            </main>
          </MainContext.Provider>
        )}
    </>
  );
};

export default Layout;
