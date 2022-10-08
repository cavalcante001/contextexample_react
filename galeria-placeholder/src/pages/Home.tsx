import { useEffect, useState } from "react";
import { AlbumItem } from "../components/AlbumItem";
import { AlbumType } from "../types/Album";
import { api } from "../helpers/api";

export const Home = () => {
  const [album, setAlbum] = useState<AlbumType[]>([]);

  useEffect(() => {
    loadAlbum();
  }, []);

  const loadAlbum = async () => {
    const json = await api.getAlbums();
    setAlbum(json);
  };

  return <div>{album.length && <AlbumItem data={album} />}</div>;
};
