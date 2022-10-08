import { PhotoType } from "../../types/PhotoType";

type Props = {
  data: PhotoType;
};

export const PhotoItem = ({ data }: Props) => {
  return (
    <div>
      <p>{data.title}</p>
      <img src={data.thumbnailUrl} alt=""></img>
    </div>
  );
};
