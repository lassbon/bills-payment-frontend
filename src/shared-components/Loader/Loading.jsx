import "../../assets/styles/loading_style.css";

const Loading = ({ text = "Loading" }) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <span className="font-medium">{text}</span>
                <div className="lds-ellipsis">
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </>
    );
};

export default Loading;
