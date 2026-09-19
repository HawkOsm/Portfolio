import { RouterProvider, useRouter } from './router.jsx';
import AnnouncementBar from './sections/AnnouncementBar.jsx';
import Navbar from './sections/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

const pages = { '/': Home, '/about': About, '/projects': Projects, '/contact': Contact };

const Routes = () => {
    const { location } = useRouter();
    const Page = pages[location.pathname] ?? Home;
    return <Page />;
};

const App = () => (
    <RouterProvider>
        <main>
            <AnnouncementBar />
            <Navbar />
            <Routes />
        </main>
    </RouterProvider>
);

export default App;
