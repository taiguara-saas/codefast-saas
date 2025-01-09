import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome back {name}
      </Link>
    );
  }
  return <button>Login</button>;

  // 1. Create a /login page

  // 2. Create a email/password form

  // 3. Make a POST request to /api/login
};

export default ButtonLogin;
