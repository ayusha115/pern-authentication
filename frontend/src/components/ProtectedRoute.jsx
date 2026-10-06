import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

function ProtectedRoute({ children }) {

    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {

        const checkAuth = async () => {

            try {

                await api.get("/auth/me");

                setAuthenticated(true);

            } catch (error) {

                setAuthenticated(false);

            } finally {

                setLoading(false);
            }
        };

        checkAuth();

    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (!authenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ProtectedRoute;