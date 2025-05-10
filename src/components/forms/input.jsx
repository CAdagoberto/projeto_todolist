export default function Input({type, place, name, classeInput}) {

    return (
        <input className={classeInput} type={type} placeholder={place} name={name} autoComplete='off'/>
    )
}