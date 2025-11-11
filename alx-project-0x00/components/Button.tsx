import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
    const sizeclasses = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg'
    }
    const baseClass = 'bg-red-400 text-center p-2'
    const finalSizeClass = size ? sizeclasses[size] : sizeclasses.medium;

    return (
        <button className={` ${baseClass} ${finalSizeClass} ${shape}`}>
            {title}
        </button>
    )
}

export default Button;