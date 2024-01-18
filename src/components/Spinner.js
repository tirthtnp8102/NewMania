const Spinner = (props) => {
   
    let mode = props.mode;
    return (
        <div className="d-flex justify-content-center">
            <div className={`my-3 spinner-border text-${mode === "light" ? "dark" : "light"}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )

}

export default Spinner