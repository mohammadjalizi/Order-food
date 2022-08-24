import { Fragment } from "react"
import { ReactDOM } from "react"
const Backdrop=props=>{
return <div className=" bg- bg-lime-800"/>
}
const overlays=props=>{
return <div className="  bg-gray-500 border ">

{props.children}

</div>
}
const portalelmet=document.getElementById('overlays')

const Modal=props=>{
<Fragment>
{ReactDOM.createPortal(<Backdrop/>,portalelmet)}
{ReactDOM.createPortal(<overlays>{props.children}</overlays>,portalelmet)}

</Fragment>



}
export default module;