import { Container } from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NewTag } from "../../components/NewTag";
import { Button } from "../../components/Button";

export function CreateMovie(){
    return (
        <Container>
            <Header />
            <ButtonText icon={FiArrowLeft} title="Voltar" />
            <div id="add-movie">
                <h1>Novo Filme</h1>
                <span>
                    <Input 
                        placeholder="Título"
                        type="text"
                    />
                    <Input 
                        placeholder="Sua nota (de 0 a 5)"
                        type="number" 
                    />
                </span>
                <TextArea  placeholder="Observações" />
                <h3>Marcadores</h3>
                <div className="newtag">
                    <NewTag value="React" />
                    <NewTag isNew placeholder="Novo Marcador" />
                  
                </div>
                <div className="btn">
                    <Button title="Exluir filme" isActive={false}></Button>
                    <Button title="Salvar alterações"></Button>
                </div>

            </div>

        </Container>
    )
}