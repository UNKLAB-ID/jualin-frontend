interface ButtonSecundaryProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    width?: string;
}

const ButtonSecundary = ({ text, onClick, disabled, type, width }: ButtonSecundaryProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{ width: width }}
            className="px-2 sm:px-6 py-1.5 sm:py-3 border border-[var(--primary)] text-[var(--primary)] rounded-md font-medium hover:bg-[var(--primary)]/10 transition text-xs sm:text-base">
            {text}
        </button>
    )
}

export default ButtonSecundary;