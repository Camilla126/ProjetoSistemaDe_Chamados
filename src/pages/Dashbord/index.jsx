import { AuthContext } from "../../contexts/auth"
import { useContext } from "react"

import "./index.css"

import Header from "../../components/Header"
import Title from "../../components/Title"
import { FiPlus, FiMessageSquare } from "react-icons/fi"

import { Link } from "react-router-dom"

export default function Dashboard() {
    const { logout } = useContext(AuthContext)

    async function handleLogout() {
        await logout()

    }

    return (
        <div>
            <Header />
            <div className="content">
                <Title name="Tickets">
                    <FiMessageSquare size={25} />
                </Title>

                <>

                    <Link to="/new">
                        <FiPlus color="#FFF" size={25} />
                        Novo chamado
                    </Link>

                    <div className="container">
                        <h1>Teste</h1>
                    </div>
                </>

            </div>
        </div>
    )
}