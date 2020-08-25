import styled from 'styled-components';
import {Typography,CardContent} from '../../../components/';

//através da herança ele vai utilizar a subclasse
export const LabelEstilizado = styled(Typography)`
  font-weight:500;
  font-size:1.5rem;
`;
export const ValorEstilizado = styled(Typography)`
  font-weight:400;
  font-size:1.5rem;
`;
export const CardEstilizadoWrapper = styled(CardContent)
`
  border-left:8px solid ${({color})=> color ? color : '#8174ff' }
  `;
export const CardEstilizado = styled(CardContent)`
  display:flex;
  justify-content:space-between;
  padding:25px;

`;

export const ItemEstilizado = styled.div`
  display:flex;
  justify-content:space-between;
  min-width:150px;

`;
