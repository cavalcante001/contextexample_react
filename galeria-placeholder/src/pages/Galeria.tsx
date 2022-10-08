import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PhotoType } from "../types/PhotoType";
import { api } from "../helpers/api";
import { GaleriaItem } from "../components/GaleriaItem";

export const Galeria = () => {
  const [galeria, setGaleria] = useState<PhotoType[]>([]);

  const params = useParams();
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/");
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    if (params.id) {
      const json = await api.getPhotos(parseInt(params.id));
      setGaleria(json);
    }
  };

  return (
    <div>
      <button onClick={handleBackButton}>Voltar</button>
      <div>
        <GaleriaItem data={galeria} />
      </div>
    </div>
  );
};
