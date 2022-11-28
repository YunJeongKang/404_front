import axios from "axios";
import { useEffect, useState } from "react";
import PATH from "@utils/routes/PATH";

const { USER_IMAGE, URL } = PATH;

const UserImgFile = () => {
  const [image, setImage] = useState<any>();
  const formData = new FormData();
  formData.append("userImage", image);
  const config = {
    Headers: {
      "content-type": "multipart/form-data",
    },
  };

  useEffect(() => {
    preview();

    return () => preview();
  }, []);

  const preview = () => {
    if (!image) return;

    const imgEl = document.createElement("img");
    const reader = new FileReader();
    reader.onload = () =>
      (imgEl.style.backgroundImage = `url(${reader.result})`);
    reader.readAsDataURL(image[0]);
  };

  return (
    <div>
      이미지 파일 업로드
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          console.log(image);
          axios.put(`${URL}${USER_IMAGE}`, formData, config);
        }}
      >
        <input
          type="file"
          accept="img/*"
          onChange={(evt: any) => {
            setImage(evt.target.files);
            console.log(evt.target.files[0]);
          }}
        />
        <button type="submit">제출</button>
      </form>
      <div className="img"></div>
    </div>
  );
};

export default UserImgFile;
