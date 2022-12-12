import { ButtonText } from "../../components/ButtonText";
import { Avatar, Container, Form } from "./style";
import { Input } from "../../components/Input";
import { FiUser, FiLock, FiMail, FiCamera, FiArrowLeft} from 'react-icons/fi';
import { Button } from "../../components/Button";


export function Perfil() {
    return (
        <Container>
            <header>
                <div className="back">
                    <FiArrowLeft />
                    <ButtonText  title="Voltar" to="/" />
                </div>
            </header>
            <Avatar>
                <img src="https://github.com/AndressaR27.png" alt="Foto do usuário" />
                <label htmlFor="avatar">
                    <FiCamera />
                    <input type="file" id="avatar-input"></input>
                </label>

            </Avatar>
            <Form>
                <Input
                        placeholder="Nome"
                        type="text"
                        icon={FiUser}
                    />

                    <Input
                        placeholder="E-mail"
                        type="text"
                        icon={FiMail}
                    />

                    <Input
                        placeholder="Senha atual"
                        type="password"
                        icon={FiLock}
                    />

                    <Input
                        placeholder="Nova senha"
                        type="password"
                        icon={FiLock}
                    />

                    <Button title="Salvar"></Button>
            </Form>

        </Container>
    )
}