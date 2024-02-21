
type FieldErrorType = {
    error: string;
}

const FieldError = (props: FieldErrorType) => {
    const {error} = props;
    return (
        <span style={{color: "red", fontStyle: "italic", fontSize: 12}}>{error}</span>
    )
}

export default FieldError
