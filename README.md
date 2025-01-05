# 🌎 Website Portfolio

### Welcome to my personal portfolio! 

A space where I showcase my professional journey, including work experiences, completed projects, notable achievements, and a way to get in touch with me. 
This website features interactive 3D visuals, dynamic effects, and a responsive design, providing an engaging user experience while reflecting my technical expertise.

Feel free to explore, discover my work, and connect through the contact section!

![image](https://github.com/user-attachments/assets/0cf34da9-d5d8-4d01-b02b-d01a1143c429)

## Features  
- **Video Background:** A captivating video background at the top of the page adds a modern aesthetic.
- **Navigation Bar:** Quick and easy navigation to different sections of the website.
- **Dynamic Animations:** Components feature smooth transitions and hover effects for an engaging user experience.
- **Interactive 3D Component:** Engaging 3D visuals, including spinning and interactive models built with Three.js.
- **Compatible Design:** Fully optimized for both computers and phones to ensure a smooth experience across devices.
- **Fast Loading Times:** Optimized for performance using modern tools like Vite and efficient asset management.
- **Backend Service:** Powered by Render for handling email submissions and other server-side tasks.
- **Hosting:** Deployed on GitHub Pages for easy accessibility.

## Technologies Used
- **React:** For building the dynamic and interactive user interface.
- **Vite:** A fast and modern build tool for better performance.
- **Three.js:** For creating engaging 3D visuals and models.
- **TailwindCSS:** For styling the website with a modern and consistent design.
- **Node.js Backend Service:** To manage backend functionalities, including POST requests for the contact form. This service runs in Render.
- **GitHub Pages:** For hosting the website and ensuring easy access.

## Installation Instructions
**Clone the repository**
```bash
git clone https://github.com/MasterPancho/Website-Portfolio.git
```
**Navigate to the project directory**
```bash
cd Website-Portfolio
```
**Install dependencies**
```bash
npm install
```
**Start the development server**
```bash
npm run dev
```
## Notes
- The free version of Render introduces a delay of 50 seconds or more for POST requests made after a period of inactivity, potentially causing the contact information to take up to a minute to process. However, during active periods, emails are typically sent in under 5 seconds.
- The image folders are currently missing. The images are configured in assets/index.js. You can update the paths in this file to point to your preferred directory structure.
