export default function Button({ type, children, padding, color, hover, border, onClick }) {
    return (
        <div>
            <button type={type ? type : 'button'} className={`${color ? color : 'bg-indigo-800'} flex gap-2 items-center justify-center text-white rounded-lg ${padding ? `${padding}` : null} ${hover ? `hover:${hover}` : 'hover:bg-indigo-700'} w-full ${border ? border : null}`} onClick={onClick}>
                {children}
            </button>
        </div >
    )
}