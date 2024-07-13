interface TextProps {
    text: string;
    class?: string;
}

const ColorText = ( props: TextProps ) => {
    const definitiveClass = props.class || "text-gray-900"

    return (
        <span className={ definitiveClass } >
            { props.text }
        </span>
    )
}

export default ColorText