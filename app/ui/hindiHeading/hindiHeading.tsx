import "../hindiHeading/style.css"

const HindiHeading = ({heading}) => {
    return (
       <div className="hindi-heading flex items-center">
            <div className="horizontal"></div>
            {/* <h2>मेरा परिचय</h2> */}
            <h2>{heading}</h2>
        </div>
    )
}

export default HindiHeading;