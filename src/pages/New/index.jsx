import Header from "../../components/Header"
import Title from '../../components/Title'
import { FiPlusCircle } from "react-icons/fi"

import './index.css'

export default function New() {
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
                        <select>
                            <option key={1} value={1}>Mercado</option>
                            <option key={2} value={2}>Lojaa</option>
                        </select>

                        <label>Assunto</label>
                        <select>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita tecnica">Visita Tecnica</option>
                            <option value="Financeiro">Financeira</option>
                        </select>

                        <label>Status</label>
                        <div className="status">
                            <input type="radio" name="radio" value="Aberto" />
                            <span>Em aberto</span>

                            <input type="radio" name="radio" value="Progresso" />
                            <span>Progresso</span>

                            <input type="radio" name="radio" value="Atendido" />
                            <span>Atendido</span>
                        </div>

                        <label>Complemento</label>
                        <textarea
                            type="text"
                            placeholder="Descreva seu problema (opcional)"
                        />

                        <button type="submit">Registrar</button>

                    </form>

                </div>

            </div>
        </div>
    )
}