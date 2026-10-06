import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post(
                "/auth/register",
                {
                    name,
                    email,
                    password
                }
            );

            setMessage(response.data.message);

            setTimeout(() => {
                navigate("/login");
            }, 1000);

        } catch (error) {

            setMessage(
                error.response?.data?.message ||
                "Registration failed"
            );
        }
    };


    return (
        <div>

            <h1>Register</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />

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
                    Register
                </button>

            </form>

            <p>{message}</p>

            <Link to="/login">
                Already have an account? Login
            </Link>

        </div>
    );
}

export default Register;