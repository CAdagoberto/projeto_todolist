export default function Button({classe, type, text}) {

    return (
        <button className={classe} type={type}>{text}</button>
    )
}