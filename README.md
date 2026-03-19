# VPLeo-Shop

## Project Overview

VPLeo-Shop is a modern, fast, and secure web application built with Next.js, designed to provide an engaging user experience. This project was initially a VPN service website and has been rebranded and optimized for static deployment on platforms like Cloudflare Pages.

## Features

*   **Responsive Design**: Optimized for various screen sizes, from mobile to desktop.
*   **Modern UI/UX**: Built with Tailwind CSS for a sleek and customizable interface.
*   **Smooth Animations**: Utilizes Framer Motion for fluid and interactive UI elements.
*   **3D Globe Visualization**: Interactive 3D globe powered by Three.js and React Three Fiber.
*   **Static Site Generation (SSG)**: Pre-rendered pages for optimal performance and SEO.
*   **Easy Deployment**: Configured for seamless deployment on Cloudflare Pages.

## Technologies Used

*   **Next.js 14**: React framework for production.
*   **React 18**: JavaScript library for building user interfaces.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **Framer Motion**: A production-ready motion library for React.
*   **Three.js & @react-three/fiber**: For 3D graphics and interactive globe visualization.
*   **Lucide React**: A collection of beautiful open-source icons.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (version 18 or higher) and npm installed on your machine.

*   Node.js: [https://nodejs.org/](https://nodejs.org/)
*   npm: (Comes with Node.js)

### Installation

1.  Clone the repository (or unzip the provided project files):
    ```bash
    git clone https://github.com/your-username/vpleo-shop.git
    cd vpleo-shop
    ```
2.  Install NPM packages:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4.  Build the project for production:
    ```bash
    npm run build
    ```
    This will generate the static `out` directory, which is ready for deployment.

## Deployment on Cloudflare Pages

This project is pre-configured for static deployment on Cloudflare Pages. Follow these steps to deploy your VPLeo-Shop website:

1.  **Push to GitHub**: Ensure your project files are pushed to a GitHub repository.

2.  **Connect to Cloudflare Pages**:
    *   Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and log in.
    *   Navigate to **Workers & Pages** from the left-hand menu.
    *   Click on **Create application** > **Pages** > **Connect to Git**.
    *   Select your GitHub account and choose the `vpleo-shop` repository.

3.  **Configure Build Settings**:
    On the 
 **Set up builds and deployments** page, configure the following:

    | Field                      | Value                       |
    | :------------------------- | :-------------------------- |
    | **Framework preset**       | `Next.js (Static Export)`   |
    | **Build command**          | `npm run build`             |
    | **Build output directory** | `out`                       |

    *Note: The `out` directory is crucial for static exports.*

4.  **Environment Variables (Optional)**:
    *   If your project uses environment variables (e.g., API keys), add them under the **Environment variables (advanced)** section.

5.  **Deploy**: Click **Save and Deploy**.
    *   Cloudflare will now build and deploy your project. This process may take a few minutes.
    *   Once deployed, Cloudflare will provide a unique `.pages.dev` URL where your website is live.

## Custom Domain (Optional)

To use a custom domain (e.g., `yourdomain.com`) with your Cloudflare Pages project:

1.  In your Cloudflare Pages project dashboard, navigate to the **Custom domains** tab.
2.  Click **Set up a custom domain** and follow the instructions to add and configure your domain.

## Contributing

Feel free to fork the repository, make changes, and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

**Author**: Manus AI
