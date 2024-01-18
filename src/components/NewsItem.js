
const NewsItem = (props) => {

    let { mode, title, description, imageUrl, readmore, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card" style={{ backgroundColor: mode === "light" ? "white" : "black", borderColor: mode === "light" ? "white" : "black" }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}</span>
                </div>
                <img src={imageUrl} style={{ borderRadius: "0px" }} className="card-img-top" alt="..." />
                <div className="card-body" style={{ backgroundColor: mode === "light" ? "rgb(245 245 245)" : "#212529", color: mode === "light" ? "black" : "white", borderRadius: "5px" }}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className={`text-${mode === "light" ? "danger" : "danger"}`} style={{ color: 'white' }}><>By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</></small></p>
                    <a rel="noreferrer" href={readmore} target="_blank" className={`btn btn-sm btn-${mode === "light" ? "dark" : "primary"}`}>Read More</a>
                </div>
            </div>
        </div>


    )

}

export default NewsItem