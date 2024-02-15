
type DisplayType = {
    children: any;
    visibility: boolean;
}
const Display = (props: DisplayType) => {
    const {children, visibility} = props;
    return (
        <>
            {
                visibility && children
            }
        </>
    )
}

export default Display;
