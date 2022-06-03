import {BreakSubtitle, Subtitle, TitleStyled} from "./Title.style";

interface TitleProps {
    title: string;
    subtitle?: string | JSX.Element;
}

const Title = (props: TitleProps) => {
    return (
        <>
            <TitleStyled>{props.title}</TitleStyled>
            <Subtitle><BreakSubtitle>{props.subtitle}</BreakSubtitle></Subtitle>
        </>
    )
}

export default Title;
