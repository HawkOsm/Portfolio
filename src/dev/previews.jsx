import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import WorkExperience from "../sections/Experience.jsx";
import Developer from "../components/Developer.jsx";
import App from "../App.jsx";
import Navbar from "../sections/Navbar.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/WorkExperience">
                <WorkExperience/>
            </ComponentPreview>
            <ComponentPreview path="/Developer">
                <Developer/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews