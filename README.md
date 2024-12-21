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
            transition: top 0.3s; /* Smooth transition for header */
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

        h2 {
            margin-top: 40px; /* Add margin for section titles */
        }

        /* Additional styles for better layout */
        .feature {
            margin: 20px 0;
            padding: 15px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
        }

        .admin-prompt {
            display: none; /* Initially hide the admin prompt */
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px;
            border-radius: 10px;
            z-index: 1002; /* Ensure prompt is above other content */
        }

        .admin-prompt input {
            padding: 10px;
            margin-top: 10px;
            width: 100%;
        }

        .admin-prompt button {
            margin-top: 10px;
            padding: 10px;
            background-color: yellow;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <button class="toggle-button" onclick="toggleBlackBox()">☀️</button> <!-- Yellow sun button -->
    
    <header id="header">
        <h1 id="title">Galactic Memories</h1>
        <nav>
            <ul>
                <li><a href="https://galacticmemories.github.io/Galactic-Memories/index.html" target="_self">Home</a></li>
                <li><a href="https://galacticmemories.github.io/Galactic-Memories/albums.html" target="_self">Albums</a></li>
                <li><a href="https://galacticmemories.github.io/Galactic-Memories/photos.html"
                                <li><a href="https://galacticmemories.github.io/Galactic-Memories/photos.html" target="_self">Photos</a></li>
                <li><a href="https://galacticmemories.github.io/Galactic-Memories/account.html" target="_self">Account</a></li>
                <li><a href="https://galacticmemories.github.io/Galactic-Memories/upload.html" target="_self">Upload</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h2>Description</h2>
        <p>Galactic Memories is an innovative web application designed to help users effortlessly create, manage, and share their photo albums. The platform serves as a digital scrapbook, allowing users to store and organize their cherished memories in a visually appealing and user-friendly environment.</p>
        
        <p>Upon entering the site, users are greeted with a stunning cosmic-themed background that sets the tone for a journey through their personal memories. The interface is clean and intuitive, making navigation simple for users of all ages. The homepage features a prominent title, "Galactic Memories," and a navigation menu that provides easy access to various functionalities, including:</p>
        
        <div class="feature">
            <h3>1. User Account Management</h3>
            <p>Users can create and manage their accounts, ensuring that their personal information and galleries are secure. This feature allows for a personalized experience, where users can easily access their albums and settings.</p>
        </div>

        <div class="feature">
            <h3>2. Upload Photos to Albums</h3>
            <p>The upload process is designed to be seamless, allowing users to select and upload multiple images at once from their devices. This feature ensures that adding new memories is quick and efficient, enabling users to keep their albums up to date.</p>
        </div>

        <div class="feature">
            <h3>3. View and Share Albums</h3>
            <p>Users can create multiple albums, each serving as a unique collection of photos. The application encourages sharing, allowing users to share their albums with friends and family, fostering connections and allowing loved ones to experience their memories.</p>
        </div>

        <div class="feature">
            <h3>4. Access to Other Users' Galleries</h3>
            <p>The application includes an admin feature that enables authorized users to access other users' galleries. This ensures that the platform remains secure while allowing for collaborative sharing among trusted users.</p>
        </div>

        <div class="feature">
            <h3>5. Mobile Accessibility</h3>
            <p>The site incorporates responsive design, ensuring that it functions beautifully on both desktop and mobile devices. Mobile users are prompted to create a copy of their gallery, enhancing accessibility and convenience.</p>
        </div>

        <div class="feature">
            <h3>6. Admin Access</h3>
            <p>Authorized users can access other users' galleries by entering a password. This feature ensures that sensitive information is protected while allowing for collaborative sharing.</p>
        </div>

        <div class="feature">
            <h3>7. User-Friendly Interface</h3>
            <p>The interface is designed to be user-friendly, with clear navigation and easy access to all features. Users can quickly find what they need without confusion.</p>
        </div>

        <div class="feature">
            <h3>8. Cosmic Theme</h3>
            <p>The cosmic theme adds a unique touch to the application, making it visually appealing and engaging for users. The background and design elements create an immersive experience.</p>
        </div>

        <div class="feature">
            <h3>9. Security Features</h3>
            <p>Security is a top priority, with measures in place to protect user data and ensure that only authorized users can access sensitive information.</p>
        </div>

        <div class="feature">
            <h3>10. Community Engagement</h3>
            <p>The platform encourages community engagement by allowing users to share their albums and memories with others, fostering a sense of connection and belonging.</p>
        </div>

        <div class="admin-prompt" id="adminPrompt">
            <h3>Admin Access</h3>
            <p>Please enter the admin password to access other users' galleries:</p>
            <input type="password" id="adminPassword" placeholder="Enter password">
            <button onclick="checkAdminPassword()">Submit</button>
            <button onclick="closeAdminPrompt()">Cancel</button>
                    </div>

        <div class="black-box" id="blackBox">
            <p>Made by Daddy</p>
        </div>
    </main>

    <script>
        let lastScrollTop = 0;
        const header = document.getElementById("header");
        const blackBox = document.getElementById("blackBox");
        const adminPrompt = document.getElementById("adminPrompt");

        window.addEventListener("scroll", function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                header.style.top = "-100px"; // Hide header
                blackBox.style.display = "none"; // Hide black box
            } else {
                // Scrolling up
                header.style.top = "0"; // Show header
                if (blackBox.style.display === "block") {
                    blackBox.style.display = "block"; // Keep black box visible
                }
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        });

        function toggleBlackBox() {
            if (blackBox.style.display === "none" || blackBox.style.display === "") {
                blackBox.style.display = "block"; // Show black box
            } else {
                blackBox.style.display = "none"; // Hide black box
            }
        }

        blackBox.addEventListener("click", function() {
            adminPrompt.style.display = "block"; // Show admin prompt on black box click
        });

        function checkAdminPassword() {
            const password = document.getElementById("adminPassword").value;
            if (password === "admin123") {
                window.location.href = "https://galacticmemories.github.io/Galactic-Memories/user-galleries.html"; // Redirect to user galleries
            } else {
                alert("Incorrect password. Please try again.");
            }
        }

        function closeAdminPrompt() {
            adminPrompt.style.display = "none"; // Hide admin prompt
        }

        // Mobile prompt for gallery copy
        if (window.innerWidth <= 768) {
            alert("Please make a copy of your gallery for better accessibility on mobile devices.");
        }
    </script>
</body>
</html>
