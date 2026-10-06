import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Dashboard() {

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

        const getUser = async () => {

            try {

                const response = await api.get("/auth/me");

                setUser(response.data.user);

            } catch (error) {

                navigate("/login");
            }
        };

        getUser();

    }, [navigate]);


    const handleLogout = async () => {

        try {

            await api.post("/auth/logout");

            navigate("/login");

        } catch (error) {

            console.error(error);
        }
    };


    return (
        <div>

            <h1>Dashboard</h1>

            {user && (
                <>
                    <h2>
                        Welcome, {user.name}
                    </h2>

                    <p>
                        Email: {user.email}
                    </p>
                </>
            )}

            <button onClick={handleLogout}>
                Logout
            </button>

        </div>
    );
}

export default Dashboard;