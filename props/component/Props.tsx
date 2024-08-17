
const Props = ({name="Fatima", cast} : {name?:string, cast:string}) => {
return (
        <div>
            <h3>{`Hello ${name} ${cast}`}</h3>
        </div>
    )
}

export default Props;

/* Props

Passing data

 In Next.js Props (Short for "Properties") are used to pass data from a parent component to a chid component.

Props are immutable, meaning they cannot be changed by the child component. */
