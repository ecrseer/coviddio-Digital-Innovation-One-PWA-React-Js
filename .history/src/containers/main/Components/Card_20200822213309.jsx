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
      <CardContentStyled>
        <ValueStyled>
          
        </ValueStyled>
      </CardContentStyled>
    </CardUI>
  )
}
