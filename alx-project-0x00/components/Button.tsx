import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title, styles }) => {

    const finalStyles = `bg-red-400 text-center p-2 mx-5`


    return (
        <button className={`${styles} ${finalStyles}`}>
            {title}
        </button>
    )
}

export default Button;