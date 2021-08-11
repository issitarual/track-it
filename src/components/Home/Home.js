import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import Logo from "../Logo";
import UserContext from "../../contexts/UserContexts";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const body = {
    email,
    password,
  };
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
      history.push("/hoje");
    }
  }, []);

  return (
    <>
      <Logo />

      <Data>
        <input
          disabled={loading}
          required
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          disabled={loading}
          required
          type="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          disabled={loading}
          onClick={() => login(setLoading, body, setUser)}
        >
          {loading === true ? "" : "Entrar"}
          <Loader
            visible={loading}
            type="ThreeDots"
            color="#FFF"
            height={80}
            width={80}
          />
        </div>
      </Data>

      <Link to="/cadastro">
        <Register>Não tem uma conta? Cadastre-se!</Register>
      </Link>
    </>
  );

  function login(setLoading, body, setUser) {
    const request = axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
      body
    );
    setLoading(true);

    request.then((response) => {
      const user = JSON.stringify(response.data);
      localStorage.setItem("user", user);
      setUser(JSON.parse(localStorage.getItem("user")));
      history.push("/hoje");
    });

    request.catch((error) => {
      alert("Erro! Email e/ou senha incorreto(s)");
      setLoading(false);
    });
  }
}

const Data = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 36px;

  input {
    height: 45px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    color: #afafaf;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 6px;
    ::-webkit-input-placeholder {
      color: #dbdbdb;
      padding: 11px;
    }
  }

  div {
    cursor: pointer;
    height: 45px;
    font-size: 21px;
    font-family: "Lexend Deca", sans-serif;
    color: #fff;
    background-color: #52b6ff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Register = styled.p`
  cursor: pointer;
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
  color: #52b6ff;
  text-decoration-line: underline;
  text-align: center;
`;
