import {Button} from "@mui/material";
import {Description, Information, ItemList, ListStyled, Name, Photo} from "./List.style";
import {Pet} from "../../../data/@types/Pet";
import {TextService} from "../../../data/services/TextService";

interface ListProps {
    pets: Pet[];
}

export default function List(props: ListProps) {
    const maxTextLenght = 200;
    return (
        <ListStyled>
            {props.pets.map(pet => (
                <ItemList key={pet.id}>
                    <Photo src={pet.photo}/>
                    <Information>
                        <Name>{pet.name}</Name>
                        <Description>{TextService.textLimit(pet.history, maxTextLenght)}</Description>
                        <Button variant={'contained'} fullWidth>Adotar</Button>
                    </Information>
                </ItemList>
            ))}
        </ListStyled>
    )
}
