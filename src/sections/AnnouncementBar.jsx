import { Link } from '../router.jsx';
import useLang from '../i18n/useLang.js';

const AnnouncementBar = () => {
    const { t } = useLang();
    return (
        <div className="bg-accent text-ink text-[12.5px] py-2.5 px-5 sm:px-10 flex justify-center items-center gap-3 flex-wrap">
            <strong className="font-semibold">{t.announce.available}</strong>
            <span className="opacity-60">{t.announce.location}</span>
            <Link href="/contact" className="announcement-link font-semibold text-ink">{t.announce.getInTouch}</Link>
        </div>
    );
};

export default AnnouncementBar;
