import { useState, useEffect } from "react";
import { api } from "../helpers/api";
import { useParams } from "react-router-dom";
import { PhotoType } from "../types/PhotoType";
import { PhotoItem } from "../components/PhotoItem";
import { useNavigate } from "react-router-dom";

export const Photo = () => {
  const [photo, setPhoto] = useState<PhotoType>();

  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(`/album/${photo?.albumId}`);
  };

  useEffect(() => {
    loadPhoto();
  }, []);

  const loadPhoto = async () => {
    if (id) {
      const json = await api.getPhoto(parseInt(id));
      setPhoto(json);
    }
  };

  return (
    <div>
      <button onClick={handleBackButton}>Voltar</button>
      <div>{photo && <PhotoItem data={photo} />}</div>
    </div>
  );
};
