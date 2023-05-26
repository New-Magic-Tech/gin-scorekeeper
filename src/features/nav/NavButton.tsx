export default function NavLink (props: any) {
    return(
        <button className="text-white m-2" onClick={props.onClick}>
            {props.children}
       </button>
    )
}