import { FiUser } from 'react-icons/fi'
import Header from '../../components/Header'
import Title from '../../components/Title'

export default function Customers() {
    return (
        <div>
            <Header />

            <div className='content'>
                <Title name="Clientes">
                    <FiUser size={25} />
                </Title>
            </div>
        </div >
    )
}