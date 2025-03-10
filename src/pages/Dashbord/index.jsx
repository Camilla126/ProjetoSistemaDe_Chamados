import { AuthContext } from "../../contexts/auth"
import { useContext } from "react"

import "./index.css"

import Header from "../../components/Header"
import Title from "../../components/Title"
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from "react-icons/fi"

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

                    <Link to="/new" className="new">
                        <FiPlus color="#FFF" size={25} />
                        Novo chamado
                    </Link>

                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Cliente</th>
                                <th scope="col">Assunto</th>
                                <th scope="col">Status</th>
                                <th scope="col">Cadastrando em</th>
                                <th scope="col">#</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td data-label="Cliente">
                                    Mercado Esquina
                                </td>
                                <td data-label="Assunto">
                                    Suporte
                                </td>
                                <td data-label="Status">
                                    Em aberto
                                </td>
                                <td data-label="Cadastrado">
                                    12/09
                                </td>

                                <td data-label="#">
                                    <button><FiSearch color="#FFF" size={17} style={{ backgroundColor: '#3583f6' }} /></button>
                                    <button><FiEdit2 color="#FFF" size={17} style={{ backgroundColor: '#f6a935' }} /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>

            </div>
        </div>
    )
}