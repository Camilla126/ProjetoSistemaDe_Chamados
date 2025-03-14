import Header from "../../components/Header"
import Title from '../../components/Title'
import { FiPlusCircle } from "react-icons/fi"
import { useState, useEffect, useContext } from "react"

import { AuthContext } from "../../contexts/auth"
import { db } from "../../firebaseConnection"
import { collection, getDocs, getDoc, doc } from "firebase/firestore"

import './index.css'
const listRef = collection(db, "customers")

export default function New() {
    const { user } = useContext(AuthContext)

    const [customers, setCustomers] = useState([])
    const [loadCustomer, setLoadCustomer] = useState(true)
    const [customerSelected, setCustomerSeelected] = useState(0)

    const [complemento, setComplemento] = useState('')
    const [assunto, setAssunto] = useState('Suporte')
    const [status, setStatus] = useState('Aberto')

    useEffect(() => {
        async function loadCustomers() {
            const querySnapshot = await getDocs(listRef)

                .then((snapshot) => {

                    let lista = [];

                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            nomeFantasia: doc.data().nomeFantasia
                        })
                    })

                    if (snapshot.docs.size === 0) {
                        setCustomers([{ id: '1', nomeFantasia: 'FREELA' }])
                        setLoadCustomer(false)
                        return;
                    }

                })
                .catch((error) => {

                    setLoadCustomer(false)
                    setCustomers([{ id: '1', nomeFantasia: 'FREELA' }])
                })

        }
        loadCustomers();
    }, [])

    function handleOptionChange(e) {
        setStatus(e.target.value);
    }

    function handleChangeSelect(e) {
        setAssunto(e.target.value)
    }

    function handleChangeCustomer(e) {
        setCustomerSeelected(e.target.value)
    }

    return (
        <div>
            <Header />

            <div className="content">
                <Title name='Novo chamado'>
                    <FiPlusCircle size={25} />
                </Title>

                <div className="container">
                    <form>
                        <label>Clientes</label>
                        {
                            loadCustomer ? (
                                <input type="text" disabled={true} value={"Carregando"} />
                            ) : (
                                <select value={customerSelected} onChange={handleChangeCustomer}>
                                    {customers.map((item, index) => {
                                        return (
                                            <option key={index} value={index}></option>
                                        )
                                    })}

                                </select>
                            )
                        }



                        <label>Assunto</label>
                        <select value={assunto} onChange={handleChangeSelect}>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita tecnica">Visita Tecnica</option>
                            <option value="Financeiro">Financeira</option>
                        </select>

                        <label>Status</label>
                        <div className="status">
                            <input type="radio" name="radio" value="Aberto"
                                onChange={handleOptionChange}
                                checked={status === 'Aberto'} />
                            <span>Em aberto</span>

                            <input type="radio" name="radio" value="Progresso"
                                onChange={handleOptionChange}
                                checked={status === 'Progresso'} />
                            <span>Progresso</span>

                            <input type="radio" name="radio" value="Atendido"
                                onChange={handleOptionChange}
                                checked={status === 'Atendido'} />
                            <span>Atendido</span>
                        </div>

                        <label>Complemento</label>
                        <textarea
                            type="text"
                            placeholder="Descreva seu problema (opcional)"
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value

                            )}
                        />

                        <button type="submit">Registrar</button>

                    </form>

                </div>

            </div>
        </div>
    )
}