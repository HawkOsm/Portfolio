# 🧊 3D Portfolio with React.js & Three.js

This is my 3D portfolio project where I document how to develop a 3D web application using **React.js** and **Three.js**.

## 🙏 Credits

Thanks to [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) for their guidance and tutorials that inspired this project.

---

## 🚀 How It Works

1. **Scene** – The main container that holds all 3D elements.
2. **Camera/Viewpoint** – Determines what part of the scene is visible and from which angle.
3. **Objects** – 3D elements added to the scene.
4. **Lighting** – Simulates real-world light sources.
5. **Animation/Updates** – Apply changes or motion over time.
6. **Rendering** – Final step where everything is drawn and displayed.

---

## 🧱 3D Object Types

- **Mesh** – Geometry + Material (the most used object type).
- **Points** – Collection of dots in 3D space.
- **Line** – Connects points in 3D space.
- **Group** – A container for multiple 3D objects.
- **Sprite** – Always faces the camera (2D overlay).
- **3D Object** – Base class from which others extend.

---

## 🧭 Common Object Properties

- `position` – Location in the 3D world.
- `rotation` – Orientation of the object.
- `scale` – Size of the object.

> Most frequently, **Mesh** objects use these properties.

---

## 🧩 Mesh in Detail

**Geometry** defines the shape and structure of a 3D object:

- `vertices` – Corner points.
- `edges` – Lines between vertices.
- `faces` – 2D surfaces formed by edges (mostly triangles).

**Material** defines how the object looks:
- Color, texture, transparency, etc.

---

## 💡 Lighting Types

- `AmbientLight` – Even lighting like a cloudy day.
- `PointLight` – Emits from a single point in all directions.
- `DirectionalLight` – Like sunlight; directional rays.
- `SpotLight` – A cone-shaped spotlight.
- `HemisphereLight` – Light from above and below (e.g. sky and ground).

---

## 🎥 Camera Types

- `PerspectiveCamera` – Mimics human eye.
- `OrthographicCamera` – No perspective distortion.
- `StereoCamera` – Used for 3D movies.

### Camera Properties

- `FOV` (Field of View) – How wide the camera can see.
- `POV` (Point of View) – Position and orientation of the camera.
- `aspect ratio` – Changes with screen size.
- `near/far clipping planes` – Improves performance by limiting visible range (like Minecraft's render distance).

---

## 🎮 Camera Controls

- `OrbitControls` – Rotate around a point.
- `TrackballControls` – Free movement with rotation.
- `FlyControls` – Similar to flight simulators.
- `PointerLockControls` – Locks mouse for FPS movement.
- `FirstPersonControls` – First-person navigation.

---

## 📚 More Info

This README summarizes how I understand the concepts of 3D development with Three.js.  
For further details, visit the [official Three.js documentation](https://threejs.org/docs/).
Enchant with GPT.
