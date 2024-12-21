<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galactic Memories</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            color: white;
            background: url('https://myastrology.com/wp-content/uploads/2023/06/planets-of-the-solar-system-1.jpg') no-repeat center center fixed; /* Space background image */
            background-size: cover;
        }

        header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.7); /* Semi-transparent background for header */
            padding: 20px;
            text-align: center;
            transition: top 0.3s; /* Smooth transition for header */
            z-index: 1000; /* Ensure header is above other content */
        }

        nav ul {
            list-style: none;
            padding: 0;
        }

        nav ul li {
            display: inline;
            margin: 0 15px;
        }

        nav ul li a {
            color: #ffffff;
            text-decoration: none;
        }

        h1 {
            color: blue; /* Title color */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Text shadow for better readability */
            transition: opacity 1s ease; /* Smooth fade-out effect */
        }

        h2 {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Text shadow for better readability */
        }

        main {
            padding: 100px 20px 20px; /* Add padding to avoid content being hidden behind the fixed header */
        }

        ul {
            margin: 0;
            padding-left: 20px;
        }
    </style>
</head>
<body>
    <header id="header">
        <h1 id="title">Galactic Memories</h1>
        <nav>
            <ul>
                <li><a href="https://example.com/home" target="_blank">Home</a></li>
                <li><a href="https://example.com/albums" target="_blank">Albums</a></li>
                <li><a href="photos.html">Photos</a></li>
                <li><a href="https://example.com/account" target="_blank">Account</a></li>
                <li><a href="https://example.com/upload" target="_blank">Upload</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Description</h2>
        <p>Galactic Memories is a web application that allows users to create, manage, and share their photo albums. Users can upload photos, view albums, and manage their accounts.</p>
        
        <h2>Features</h2>
        <ul>
            <li>User account management</li>
            <li>Upload photos to albums</li>
            <li>View and manage photo albums</li>
            <li>Responsive design for mobile and laptop</li>
        </ul>

        <h2>Usage</h2>
        <ul>
            <li>To upload photos, navigate to the upload page.</li>
            <li>View your albums on the albums page.</li>
            <li>Manage your account settings on the account page.</li>
        </ul>

        <h2>Contributing</h2>
        <p>Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.</p>

        <h2>License</h2>
        <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
    </main>

    <script>
        // JavaScript for header visibility on scroll
        let lastScrollTop = 0;
        const header = document.getElementById('header');

        window.addEventListener('scroll', function()
