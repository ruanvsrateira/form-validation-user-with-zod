import { SetStateAction, useState } from "react";
import { Button, Input } from "../../components";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, FormSchemaType } from "./Form.schema";

export const Form = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      className={styles["form__group"]}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <Input
        {...register("name")}
        label="Nome"
        type="text"
        placeholder="Digite seu nome completo(sem abreviações)"
        value={nome}
        helperText={errors.name?.message}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setNome(e.target.value)
        }
      />
      <Input
        {...register("email")}
        label="E-mail"
        type="email"
        placeholder="Digite seu melhor e-mail"
        helperText={errors.email?.message}
        value={email}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setEmail(e.target.value)
        }
      />
      <Input
        {...register("bornDay")}
        label="Data de Nascimento"
        type="date"
        placeholder="Digite sua data de Nascimento"
        value={dataNasc}
        helperText={errors.bornDay?.message}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setDataNasc(e.target.value)
        }
      />
      <Input
        {...register("password")}
        label="Senha"
        type="password"
        placeholder="Digite uma senha segura e não compartilhe ela com ninguém"
        helperText={errors.password?.message}
        value={senha}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setSenha(e.target.value)
        }
      />
      <Input
        {...register("repeat_password")}
        label="Confirme sua senha"
        type="password"
        placeholder="Digite uma senha segura e não compartilhe ela com ninguém"
        value={senhaConfirm}
        helperText={errors.repeat_password?.message}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setSenhaConfirm(e.target.value)
        }
      />
      <Button text="Cadastrar-se" type="submit" />
    </form>
  );
};
