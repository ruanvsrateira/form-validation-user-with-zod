import { useState } from "react";
import { Button, Input } from "../../components";
import styles from "./Form.module.scss";

export const Form = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");

  return (
    <form className={styles["form__group"]}>
      <Input
        label="Nome"
        type="text"
        placeholder="Digite seu nome completo(sem abreviações)"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <Input
        label="E-mail"
        type="email"
        placeholder="Digite seu melhor e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        label="Data de Nascimento"
        type="date"
        placeholder="Digite seu melhor e-mail"
        value={dataNasc}
        onChange={(e) => setDataNasc(e.target.value)}
        required
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Digite uma senha segura e não compartilhe ela com ninguém"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <Input
        label="Confirme sua senha"
        type="password"
        placeholder="Digite uma senha segura e não compartilhe ela com ninguém"
        value={senhaConfirm}
        onChange={(e) => setSenhaConfirm(e.target.value)}
        required
      />
      <Button text="Cadastrar-se" type="submit" />
    </form>
  );
};
