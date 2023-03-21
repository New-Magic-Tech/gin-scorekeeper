type Props = {
    //children: JSX.Element | JSX.Element[],
    children: string
    onClick: React.MouseEventHandler<HTMLButtonElement>,
}

export default function Button(props: Props){
    
    return(
        <button onClick = {props.onClick}>
            {props.children}
        </button>
    )
}