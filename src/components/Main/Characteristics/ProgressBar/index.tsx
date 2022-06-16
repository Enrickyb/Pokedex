import * as Styled from "./style";

interface Props{
 value: number
}

export default function ProgressBar(props: Props) { //precisa tipar
  return (
    <Styled.SkillBarsContainer>
      <Styled.SkillBar>
        <Styled.ProgressBar width={props.value} >
          <span>{props.value}/200</span>
        </Styled.ProgressBar>
      </Styled.SkillBar>
    </Styled.SkillBarsContainer>
  );
}
