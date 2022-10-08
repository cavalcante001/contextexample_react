import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const api = {
  getAlbums: async () => {
    try {
      const req = await instance.get(`/albums`);
      return req.data;
    } catch (err) {
      console.log(err);
    }
  },
  getPhotos: async (id: number) => {
    const req = await instance.get(`/album/${id}/photos`);
    return req.data;
  },
  getPhoto: async (id: number) => {
    const req = await instance.get(`/photos/${id}`);
    return req.data;
  },
};
