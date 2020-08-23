import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Card as CardUI} from '../../../components/';
import {
  LabelEstilizado,
  CardEstilizado,
  CardEstilizadoWrapper,
   ValorEstilizado,
} from './style';

function Card ({value,label,color}){
  return (
    <CardUI>
      <CardEstilizadoWrapper color={color}>
        <ValorEstilizado>
          {value}
        </ValorEstilizado>
        <LabelEstilizado>{label}</LabelEstilizado>
      </CardEstilizadoWrapper>
    </CardUI>
  )
}
export default memo(Card);
