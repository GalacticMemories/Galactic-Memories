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
            z-index: 1000; /* Ensure header is above other content */
            display: none; /* Initially hide the header */
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
            color: white; /* Change title color to white */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Text shadow for better readability */
        }

        .toggle-button {
            position: fixed;
            top: 20px;
            left: 20px;
            background-color: yellow; /* Yellow sun button */
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            z-index: 1001; /* Ensure button is above other content */
        }

        .black-box {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: black;
            color: white;
            text-align: center;
            padding: 10px;
            display: none; /* Initially hide the black box */
        }

        main {
            padding: 100px 20px 20px; /* Add padding to avoid content being hidden behind the fixed header */
        }

        p {
            margin: 20px 0; /* Add margin for better spacing */
        }
    </style>
</head>
<body>
    <button class="toggle-button" onclick="toggleHeader()">☀️</button> <!-- Yellow sun button -->
    
    <header id="header">
        <h1 id="title">Galactic Memories</h1>
        <nav>
            <ul>
                <li><a href="https://galacticmemories.github.io/Galactic-Memories/index.html" target="_self">Home</a></li>
                <li><a href="https://galacticmemories.github.io/Galactic-Memories/albums.html" target="_self">Albums</a></li>
                <li><a href="https://galacticmemories.github.io/Galactic-Memories/photos.html" target="_self">Photos</a></li>
                <li><a href="https://galacticmemories.github.io/Galactic-Memories/account.html" target="_self">Account</a></li>
                <li><a href="https://galacticmemories.github.io/Galactic-Memories/upload.html" target="_self">Upload</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h2>Description</h2>
        <p>Galactic Memories is a web application designed to help users create, manage, and share their photo albums in a visually appealing and user-friendly environment. The platform allows users to upload their cherished memories, organize them into albums, and share them with friends and family. With a focus on simplicity and accessibility, Galactic Memories aims to provide a seamless experience for users of all ages.</p>
        
        <p>The application features a clean and modern interface, making it easy for users to navigate through their galleries. Users can create multiple albums, each containing a collection of photos that can be easily uploaded from their devices. The upload process is straightforward, allowing users to select multiple images at once, ensuring that they can quickly add new memories to their collections.</p>
        
        <p>In addition to personal
