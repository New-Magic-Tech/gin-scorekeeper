type Props = {
    children: JSX.Element | JSX.Element[]
    centered?: boolean,
}

export default function Stacked (props : Props){
    return(
        <div className={`flex flex-col ${props.centered?'items-center':''}`}>
            {props.children}
        </div>
    )
}