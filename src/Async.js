import useEffect from "react";
import connect from "react-redux";
import {asyncStart,asyncSuccess,asyncFailure} from "./redux.js";  

const fakeApi = () => new Promise((res,rej)=>setTimeout(Math.random()<0.5?()=>res("data"):()=>rej(err),1000))
/* const async = (dispatch) => { */
  const async = count => (dispatch,getState) ={
    dispatch(asyncStart())
    fakeApi()
.then(data=>asyncSuccess(data))
.then(err=>asyncFailure(err))
}
export function Async_({ loading,error, data,handleAsyncStart}) {
  useEffect(()=>{
handleAsyncStart();
/* fakeApi()
.then(data=>handleAsyncSuccess(data))
.then(err=>handleAsyncFailure(err)) */
  },[])
  if (loading) return "Loading";
  if (error) return "error";
  return data;
}

export const Async = connect((state) => {
  loading: state.async.loading,
  error:state.async.error,
  data: state.async.loading
},
(dispatch) => {
  /* handleAsync:()=>async(dispatch) */
  handleAsync: count => dispatch(async(count))
   /*  handleAsyncStart: x=> dispatch(asyncStart(x)),
    handleAsyncSuccess: x=> dispatch(asyncSuccess(x)),
    handleAsyncFailure: x=> dispatch(asyncFailure(x)) */
})(Async_);
