type Props = {
    children: JSX.Element | JSX.Element[]
}

export default function Row (props : Props){
    return(
        <div className="flex flex-row">
            {props.children}
        </div>
    )
}