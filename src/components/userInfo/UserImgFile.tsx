import axios from "axios";
import { useEffect, useState } from "react";
import PATH from "@utils/routes/PATH";
import { resolve } from "node:path/win32";

const { USER_IMAGE, URL } = PATH;

const UserImgFile = () => {
  const [image, setImage] = useState<any>("");
  const formData = new FormData();
  formData.append("userImage", image);
  const config = {
    Headers: {
      "content-type": "multipart/form-data",
    },
  };

  const encode = (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve: any) => {
      reader.onload = () => {
        setImage(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      {/* 진짜 만들 imgpage */}
      <div className="w-5/6 h-5/6">
        <label
          className="border-4 rounded-lg border-dotted p-10"
          htmlFor="img1"
        >
          <span>+</span>
          <img src="" alt="" />
        </label>
        <input type="file" accept="image/*" id="img1" />
      </div>
      {/* 예시 업로드 */}
      <div>
        이미지 파일 업로드
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            console.log(image);
            axios.put(`${URL}${USER_IMAGE}`, formData);
          }}
        >
          <input
            type="file"
            accept="img/*"
            onChange={(evt: any) => {
              setImage(evt.target.files);
              encode(evt.target.files[0]);
              console.log(evt.target.files[0]);
            }}
          />
          <button type="submit">제출</button>
        </form>
        <div className="img">
          {image && (
            <img src={image} alt="preview-img" className="w-1/3 h-1/3" />
          )}
        </div>
      </div>
    </>
  );
};

export default UserImgFile;
