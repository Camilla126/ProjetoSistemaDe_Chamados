import { AuthContext } from "../../contexts/auth"
import { useContext, useEffect, useState } from "react"

import "./index.css"

import Header from "../../components/Header"
import Title from "../../components/Title"
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from "react-icons/fi"

import { collection, getDocs, orderBy, limit, startAfter, query } from "firebase/firestore"

import { db } from "../../firebaseConnection"
import { Link } from "react-router-dom"

const listRef = collection(db, "chamados")


export default function Dashboard() {
    const { logout } = useContext(AuthContext)

    const [chamados, setChamados] = useState([])
    const [loading, setLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)

    useEffect(() => {
        async function loadChamados() {
            const q = query(listRef, orderBy('created', 'desc'), limit(5))

            const querySnapshot = await getDocs(q)
            await updateState(querySnapshot)

            setLoading(false)
        }
        loadChamados()

        return () => { }
    }, [])

    async function updateState(querySnapshot) {
        const isCollectionEmpty = querySnapshot.size === 0;

        if (!isCollectionEmpty) {
            let lista = [];

            querySnapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    assunto: doc.data().assunto,
                    cliente: doc.data().cliente,
                    clienteId: doc.data().clienteId,
                    created: doc.data().created,
                    status: doc.data().status,
                    complemento: doc.data().complemento,
                })
            })
            setChamados(chamados => [...chamados, ...lista])

        } else {
            setIsEmpty(true)
        }
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

                    {chamados.length === 0 ? (
                        <div className="container dashboard">
                            <span>Nenhum chamado encontrado...</span>
                            <Link to="/new" className="new">
                                <FiPlus color="#FFF" size={25} />
                                Novo chamado
                            </Link>
                        </div>
                    ) : (
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

                                    {chamados.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td data-label="Cliente">
                                                    {item.cliente}
                                                </td>
                                                <td data-label="Assunto">
                                                    {item.assunto}
                                                </td>
                                                <td data-label="Status">

                                                    <span className="badge" style={{ backgroundColor: '#999' }}>
                                                        {item.status}
                                                    </span>

                                                </td>
                                                <td data-label="Cadastrado">
                                                    12/09
                                                </td>

                                                <td data-label="#">
                                                    <button><FiSearch color="#FFF" size={17} style={{ backgroundColor: '#3583f6' }} /></button>
                                                    <button><FiEdit2 color="#FFF" size={17} style={{ backgroundColor: '#f6a935' }} /></button>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </>
                    )}


                </>

            </div>
        </div >
    )
}