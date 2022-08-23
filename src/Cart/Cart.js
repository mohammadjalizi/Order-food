const Cart=props=>{
    const cartitem=[{id:'c1',name:'sushi',amounth:2,price:12.29}].map((item)=><li>{item.name}</li>)
return(
<div>
cartitem
<div>
    {cartitem}
</div>
<div>
<span>totalamounth</span>
<span>35.6</span>
</div>
<button>close</button>
</div>
)


}
export default Cart;