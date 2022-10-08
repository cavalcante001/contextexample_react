import { AlbumType } from "../../types/Album";
import { Link } from "react-router-dom";
import styles from "./Album.module.css";

type Props = {
  data: AlbumType[];
};

export const AlbumItem = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div className={styles.album}>
          <Link to={`/album/${item.id}`} className={styles.container}>
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
};
