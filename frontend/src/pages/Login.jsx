import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post(
                "/auth/login",
                {
                    email,
                    password
                }
            );

            navigate("/dashboard");

        } catch (error) {

            setMessage(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };


    return (
        <div>

            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <button type="submit">
                    Login
                </button>

            </form>

            <p>{message}</p>

            <Link to="/register">
                Create account
            </Link>

        </div>
    );
}

export default Login;