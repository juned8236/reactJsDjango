import {initVals} from '../utils/initVals';
const actionreducer=(state=initVals,action)=>{
       switch(action.type){
           case 'LOGIN_SUCCESS':
               state={
                   isLoggedIn:true
               }
           break;
           case 'LOGIN_FAIL':
               state={
                   isLoggedIn:false,
                   msg:'Plase check enter uid or pwd'
               }
           break;

       }
     return state;  
}

export default actionreducer;