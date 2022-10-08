import { PhotoType } from "../../types/PhotoType";
import styles from "./PhotoItem.module.css";
import { Link } from "react-router-dom";

type Props = {
  data: PhotoType[];
};

export const GaleriaItem = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div key={index} className={styles.moldura}>
          <Link to={`/photo/${item.id}`}>
            <img src={item.thumbnailUrl} alt=""></img>
          </Link>
        </div>
      ))}
    </div>
  );
};
