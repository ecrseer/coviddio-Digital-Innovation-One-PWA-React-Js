import Skeleton from '@material-ui/lab/Skeleton';
import React,{memo} from 'react';

function Skeleton2({props}){
  return(
    <Skeleton variant="rect"
      animation="wave"
     height="1%" width="80%">
      {props}
    </Skeleton>
  );
}
export default memo(Skeleton2);