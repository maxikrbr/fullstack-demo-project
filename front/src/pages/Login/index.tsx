import { Container, Column01, Column02 } from "./styles";
import { LoginData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const { signIn } = useAuth();

  return (
    <Container>
      <main>
        <Column01>
          <h2>ContactGram</h2>
          <h3>
            O lugar ideal para acessar todos os seus contatos!
          </h3>
          <section className="loginSection">
            <h3>Não tem conta?</h3>
            <Link to="/register">Cadastre-se</Link>
          </section>
        </Column01>
        <Column02>

          <form onSubmit={handleSubmit(signIn)}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            {errors.email?.message && <small>{errors.email.message}</small>}

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors.password?.message && (
              <small>{errors.password.message}</small>
            )}

            <button type="submit">Login</button>
          </form>

        </Column02>
      </main>
    </Container>
  );
};
