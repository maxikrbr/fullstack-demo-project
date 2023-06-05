import { Container, Column01, Column02 } from "./styles";
import { RegisterData, registerSchema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

export const Register = () => {
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  return (
    <Container>
        <main>
          <Column01>
            <h2>Cadastro</h2>

            <form onSubmit={handleSubmit(registerUser)}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                {...register("name")}
              />
              {errors.name?.message && (
                <small>{errors.name.message}</small>
              )}

              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="exemplo@mail.com"
                {...register("email")}
              />
              {errors.email?.message && <small>{errors.email.message}</small>}

              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="******"
                {...register("password")}
              />
              {errors.password?.message && (
                <small>{errors.password.message}</small>
              )}

              <label htmlFor="phone">Telefone</label>
              <input
                type="text"
                id="phone"
                placeholder="xx-xxxxx-xxxx"
                {...register("phone")}
              />
              {errors.phone?.message && <small>{errors.phone.message}</small>}

              <button type="submit">Cadastrar</button>
            </form>
          </Column01>
          <Column02>
            <h2>CG</h2>
            <h3>Já tem conta em nosso site?</h3>
            <Link to="/">Fazer login</Link>
          </Column02>
        </main>
    </Container>
  );
};
