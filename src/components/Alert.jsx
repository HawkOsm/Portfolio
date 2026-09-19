const Alert = ({ type, text }) => (
    <div className="fixed bottom-6 right-6 z-50">
        <div
            className={`flex items-center gap-3 bg-panel border rounded-xl px-5 py-4 ${
                type === 'danger' ? 'border-warn' : 'border-accent'
            }`}
            role="alert"
        >
            <span
                className={`text-xs font-semibold uppercase tracking-widest ${
                    type === 'danger' ? 'text-warn' : 'text-accent'
                }`}
            >
                {type === 'danger' ? 'Failed' : 'Sent'}
            </span>
            <p className="text-paper text-[15px]">{text}</p>
        </div>
    </div>
);

export default Alert;
