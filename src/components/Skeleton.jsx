import Skeleton from '@material-ui/lab/Skeleton';
import React,{memo} from 'react';

function Skeleton2({props}){
  return(
    <Skeleton variant="text" height={82} width={182}>
      {props}
    </Skeleton>
  );
}
export default memo(Skeleton2);