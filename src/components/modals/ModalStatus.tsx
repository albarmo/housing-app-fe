import Image from "next/image";

type ModalProps = {
    isShow: boolean;
    title: string;
    type?: string;
    description: string;
    close: () => void;
    data: any;
};

const Modal: React.FC<ModalProps> = ({
    isShow,
    title,
    type,
    description,
    close,
    data,
}) => {
    if (!isShow) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-[#00000066]">
            <div className="relative  overflow-hidden">
                <div className="flex flex-col justify-center items-center bg-white p-6 rounded-[15px] gap-2">
                    <Image
                        src={"/assets/images/png/bg-white-home.png"}
                        alt="success"
                        width={200}
                        height={200}
                    />
                    <div className="flex flex-col items-center justify-center gap-1">
                        <h2 className="text-lg font-semibold">{data?.title}</h2>
                    </div>
                    <button onClick={() => close()}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
