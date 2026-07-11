const Alert = ({ type, text }) => (
    <div className="fixed bottom-6 right-6 z-50">
        <div
            className={`flex items-center gap-3 bg-panel border px-5 py-4 ${
                type === 'danger' ? 'border-signal' : 'border-line'
            }`}
            role="alert"
        >
            <span
                className={`font-mono text-xs uppercase tracking-widest ${
                    type === 'danger' ? 'text-signal' : 'text-buff'
                }`}
            >
                {type === 'danger' ? 'Failed' : 'Sent'}
            </span>
            <p className="text-paper text-sm">{text}</p>
        </div>
    </div>
);

export default Alert;
