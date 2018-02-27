let getters={
  count:(state)=>state.cartList.reduce((prev,next)=>{
    prev+next.bookCount
  },0)
}
export default getters;
