import { Fragment } from "react";
import "./styles/global.scss";
import { Form } from "./sections/Form/Form";

export default function App() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-20">
      <h1 className="text-4xl text-white font-Poppins text-center">
        Cadastro de <span className="text-[#3ED869]">Usuário</span>
      </h1>
      <Form />
    </div>
  );
}
