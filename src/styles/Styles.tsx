import styled from 'styled-components';

export const Header = styled.div`
padding: 2em;
background-color: white;
border-bottom: 1px solid rgb(224, 224, 224);
display:flex;
justify-content: space-between;
align-items:center;
`
export const SpanTable = styled.span`
color: rgb(51, 51, 51);
font-size: 30px;
font-weight: 800;
`
export const SpanFibe =styled.span`
color: rgb(0, 176, 170);
font-size: 30px;
font-weight: 800;
51, 51, 51
`
export const SpanPrice = styled.span`
padding: 10px;
background: rgb(0, 176, 170);
border-radius: 20px;
font-size: 15px;
font-weight: 800;
`

export const Container = styled.div`
display: grid;
justify-content: center;
margin-top:3em;
h1{
text-align:center;
}
p{
margin-top:10px;
text-align:center;
font-weight: 800;
font-size:15px;

}

`
export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  border-radius:10px;
`;

export const FlexBtn = styled.div`
display:flex;
margin-bottom:10px;
justify-content:around;
`

export const FlexBtnPrice = styled.div`
display: flex;
justify-content: center;
margin-top: 10px;
`
export const Select = styled.select`
padding:10px;
cursor:pointer;
`

export const Colum = styled.div`
display:flex;
flex-direction:column;
`
interface ButtonOptionsProps { 
  isActive?: boolean;
}

const color = {
  orange: '#ffa500'
}
export const ButtonOptions = styled.button<ButtonOptionsProps>`
background: ${({isActive})=> isActive ? color.orange : '#0099FF'};
border: 2px solid #0099FF;
border-radius: 3px;
color: #FDFDFD;
font-size: 1.2rem;
margin: 1rem;
padding: 1rem 1.5rem;
cursor:pointer;
box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
outline: none;
transition: 0.2s all;
&:hover{
   filter: brightness(0.9);
}
&:disabled{
  background:#ccc;
  color:#000;
}
`