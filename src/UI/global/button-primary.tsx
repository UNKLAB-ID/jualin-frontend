interface ButtonPrimaryProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    width?: string;
    className?: string;
}

const ButtonPrimary = ({ text, onClick, disabled, type, width, className="px-3 sm:px-6 py-1.5 sm:py-3 bg-[var(--primary)] text-white rounded-md font-medium hover:bg-[var(--primary)]/90 transition text-xs sm:text-base" }: ButtonPrimaryProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{ width: width }}
            className={className}>
            {text}
        </button>
    )
}

export default ButtonPrimary;