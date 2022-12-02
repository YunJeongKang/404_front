import { useEffect } from "react";
import queryString from "query-string";
import axios from "axios";
import useAuth from "@store/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import PATH from "@utils/routes/PATH";

const KakaoLogin = () => {
  const { EASY_AUTH } = PATH;
  const navigate = useNavigate();
  // const KAKAO_CODE = new URL(
  //   document.location as unknown as string
  // ).searchParams.get("code");
  const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
  const REDIRECT_URL = `${import.meta.env.VITE_BASE_URL}/auth/kakao/callback`;
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  // const query = queryString.parse(window.location.search);
  // useEffect(() => {
  //   if (query.code) {
  //     getKakaoTokenhandler(query.code.toString());
  //   }
  //   console.log(KAKAO_CODE);
  // }, []);

  // const getKakaoTokenhandler = async (code: string) => {
  //   const data: any = {
  //     grant_type: "authorization_code",
  //     client_id: REST_API_KEY,
  //     redirect_uri: REDIRECT_URL,
  //     code: code,
  //   };
  //   const queryString = Object.keys(data)
  //     .map(
  //       (k: any) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
  //     )
  //     .join("&");

  //   //카카오 토큰 받아오는 axios
  //   axios
  //     .post("https://kauth.kakao.com/oauth/token", queryString, {
  //       headers: {
  //         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  //       },
  //     })
  //     .then((res) => {
  //       auth.setKakaoToken(res.data.access_token);
  //       console.log(res.data.access_token);
  //       console.log("object");
  //     })
  //     .catch(() => {
  //       console.log("토큰 받아오기 실패");
  //       navigate(EASY_AUTH);
  //     });
  // };
  // const auth = useAuth();

  // 다른 코드
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1];
  const KAKAO_AUTH_CODE_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=${KAKAO_CODE}`;
  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: KAKAO_AUTH_CODE_URL,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
        } else {
          navigate(EASY_AUTH);
        }
      });
    // .catch(() => console.log(KAKAO_CODE));
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
    // fetch(
    //   `http://${
    //     import.meta.env.VITE_BASE_URL
    //   }/users/kakao/redirect?code=${KAKAO_CODE}`,
    //   {
    //     method: "GET",
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data.token);
    //   });
  }, []);
  return <div> 성공! </div>;
};

export default KakaoLogin;
