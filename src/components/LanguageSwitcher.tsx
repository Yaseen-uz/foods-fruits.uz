const LanguageSwitcher = () => {
    if (!window) return null;

    const currUrl = window && window.location.pathname;

    return (
        <div className="flex flex-col text-white">
            <select
                value={currUrl.replace("/", "")}
                onChange={(e) => {
                    window.location.href = `/${e.currentTarget.value}`;
                }}
            >
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="uz">O'zbek</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
