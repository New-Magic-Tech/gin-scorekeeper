type Props = {
    children: JSX.Element | JSX.Element[]
}

export default function Stacked (props : Props){
    return(
        <div className="flexflex-col">
            {props.children}
        </div>
    )
}