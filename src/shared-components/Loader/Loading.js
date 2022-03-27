import "../../assets/styles/loading_style.css";

const Loading = ({ text = "Loading" }) => {
    return (
        <>
            <div classNameName="flex flex-col justify-center items-center">
                <span classNameName="font-medium">{text}</span>
                <div classNameName="lds-ellipsis">
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
