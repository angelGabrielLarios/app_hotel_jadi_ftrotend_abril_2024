
interface Props {
    counter: number
}
export const CounterChildren = ({ counter }: Props) => {
    return (
        <div>CounterChildren :{counter}</div>
    )
}
