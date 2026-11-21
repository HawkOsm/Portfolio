import { Link } from '../router.jsx';

const AnnouncementBar = () => (
    <div className="bg-panel text-paper border-b border-border text-[12.5px] py-2.5 px-5 sm:px-10 flex justify-center items-center gap-3 flex-wrap">
        <strong className="font-semibold">Available for 2027 internships</strong>
        <span className="text-muted">Izmir · remote worldwide</span>
        <Link href="/contact" className="announcement-link font-semibold text-accent">Get in touch →</Link>
    </div>
);

export default AnnouncementBar;
