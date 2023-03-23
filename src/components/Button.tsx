type Props = {
    //children: JSX.Element | JSX.Element[],
    children: string
    onClick: React.MouseEventHandler<HTMLButtonElement>,
}

export default function Button(props: Props){
    
    return(
        <button className='text-gold bg-darkGreen border-solid rounded-xl border-gold border-4 p-3 m-2 text-xl' onClick = {props.onClick}>
            {props.children}
        </button>
    )
}