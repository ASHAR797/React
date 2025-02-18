type prop = {
    item:{
        name : string;
        quantity: number; 
    }
}

let MenuItem = (props: prop)=>{
   return<>
     <h1>{props.item.name}</h1>
     <h3>{props.item.quantity}</h3>

   </>
}
export default MenuItem