import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Card as CardUI} from '../../../components/';
import {
  Label,
  CardContentStyled,
  ValueStyled,
} from './style';

function Card ({value,label,color}){
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>
          {value}
        </ValueStyled>
        <Label>{label}</Label>
      </CardContentStyled>
    </CardUI>
  )
}
export Card;
