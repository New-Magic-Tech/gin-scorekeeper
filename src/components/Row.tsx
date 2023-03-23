type Props = {
    children: JSX.Element | JSX.Element[]
}

export default function Row (props : Props){
    //row on large screen, stacked on small
    return(
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-around">
            {props.children}
        </div>
    )
}