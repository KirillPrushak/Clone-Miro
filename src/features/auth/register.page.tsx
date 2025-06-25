import { Link } from "react-router-dom";
import { AuthLayout } from "./ui/auth-layout";
import { ROUTES } from "@/shared/model/routes";
import { RegisterForm } from "./ui/register-form";

function RegisterPage() {
  return (
    <AuthLayout
      title="Регистрация"
      description="Введите ваш email и пароль для регистрации в системе"
      form={<RegisterForm />}
      footerText={
        <>
          Уже есть аккаунт? <Link to={ROUTES.REGISTER}>Войти</Link>
        </>
      }
    />
  );
}

export const Component = RegisterPage;
