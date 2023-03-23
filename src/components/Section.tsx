type Props = {
    children: JSX.Element | JSX.Element[]
}

export default function  Section (props : Props){
    return(
        <section className="border-solid border-8 border-gold rounded-xl p-2 bg-green max-w-[95%] min-w-[75%] sm:min-w-[30%] mt-2 sm:min-h-[312px]">
            {props.children}
        </section>
    )
}