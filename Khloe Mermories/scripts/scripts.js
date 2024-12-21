// Shell Class Definition
class Shell {
    constructor() {
        this.history = [];
        this.historyIndex = -1;
        this.commands = {
            help: () => this.showHelp(),
            clear: () => this.clearTerminal(),
            ls: () => this.listFiles(),
            cd: (dir) => this.changeDirectory(dir),
            upload: () => this.uploadFile(),
            mkdir: (name) => this.createDirectory(name),
            rm: (path) => this.removeFile(path),
            cat: (file) => this.viewFile(file)
        };
        this.currentDir = '/';
    }

    setupTerminal() {
        const terminal = document.createElement('div');
        terminal.className = 'terminal';
        terminal.innerHTML = `
            <div class="terminal-tabs">
                <div class="terminal-tab active">TERMINAL</div>
                <div class="terminal-tab">OUTPUT</div>
                <div class="terminal-tab">PROBLEMS</div>
                <div class="terminal-tab">EXTENSIONS</div>
            </div>
            <div class="terminal-header">
                <span>PowerShell</span>
                <button class="terminal-close">×</button>
            </div>
            <div class="terminal-output"></div>
            <div class="terminal-input-line">
                <span class="prompt">PS C:\\Users\\guest></span>
                <input type="text" class="terminal-input" spellcheck="false">
            </div>
            <div class="terminal-status-bar">
                <span>Galactic Shell</span>
            </div>
        `;
        document.body.appendChild(terminal);

        const input = terminal.querySelector('.terminal-input');
        const closeBtn = terminal.querySelector('.terminal-close');
        
        // Setup tab panels
        const terminalContent = terminal.querySelector('.terminal-output');
        const outputPanel = document.createElement('div');
        outputPanel.className = 'terminal-panel';
        outputPanel.style.display = 'none';
        outputPanel.innerHTML = '<div class="terminal-line">Output panel</div>';
        
        const problemsPanel = document.createElement('div');
        problemsPanel.className = 'terminal-panel';
        problemsPanel.style.display = 'none';
        problemsPanel.innerHTML = '<div class="terminal-line">No problems found</div>';

        const extensionsPanel = document.createElement('div');
        extensionsPanel.className = 'terminal-panel extensions-panel';
        extensionsPanel.style.display = 'none';
        extensionsPanel.innerHTML = `
            <div class="extension-search">
                <input type="text" placeholder="Search Extensions in Marketplace" class="extension-search-input">
            </div>
            <div class="extension-list">
                <div class="extension-item">
                    <div class="extension-icon">🤖</div>
                    <div class="extension-info">
                        <div class="extension-name">BlackBox AI</div>
                        <div class="extension-description">AI-powered code completion and chat</div>
                        <div class="extension-stats">
                            <span>⭐ 4.8</span>
                            <span>↓ 1M+</span>
                            <button class="extension-install installed">Installed</button>
                        </div>
                    </div>
                </div>
                <div class="extension-item">
                    <div class="extension-icon">🎨</div>
                    <div class="extension-info">
                        <div class="extension-name">Theme - Space Dark</div>
                        <div class="extension-description">Dark theme optimized for space themes</div>
                        <div class="extension-stats">
                            <span>⭐ 4.6</span>
                            <span>↓ 500K+</span>
                            <button class="extension-install">Install</button>
                        </div>
                    </div>
                </div>
                <div class="extension-item">
                    <div class="extension-icon">🚀</div>
                    <div class="extension-info">
                        <div class="extension-name">Galactic Snippets</div>
                        <div class="extension-description">Code snippets for space-themed projects</div>
                        <div class="extension-stats">
                            <span>⭐ 4.7</span>
                            <span>↓ 200K+</span>
                            <button class="extension-install">Install</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        terminal.insertBefore(outputPanel, terminalContent.nextSibling);
        terminal.insertBefore(problemsPanel, outputPanel.nextSibling);
        terminal.insertBefore(extensionsPanel, problemsPanel.nextSibling);

        // Setup tab functionality
        const tabs = terminal.querySelectorAll('.terminal-tab');
        const panels = [terminalContent, outputPanel, problemsPanel, extensionsPanel];

        // Add extension search functionality
        const searchInput = extensionsPanel.querySelector('.extension-search-input');
        const extensionList = extensionsPanel.querySelector('.extension-list');
        const installButtons = extensionsPanel.querySelectorAll('.extension-install');

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const extensions = extensionList.querySelectorAll('.extension-item');
            
            extensions.forEach(ext => {
                const name = ext.querySelector('.extension-name').textContent.toLowerCase();
                const desc = ext.querySelector('.extension-description').textContent.toLowerCase();
                if (name.includes(searchTerm) || desc.includes(searchTerm)) {
                    ext.style.display = 'flex';
                } else {
                    ext.style.display = 'none';
                }
            });
        });

        installButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.classList.contains('installed')) {
                    button.textContent = 'Install';
                    button.classList.remove('installed');
                } else {
                    button.textContent = 'Installed';
                    button.classList.add('installed');
                }
            });
        });
        
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                panels.forEach(panel => panel.style.display = 'none');
                panels[index].style.display = 'block';
            });
        });

        input.addEventListener('keydown', (e) => this.handleInput(e));
        closeBtn.addEventListener('click', () => terminal.classList.toggle('hidden'));

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'terminal-toggle';
        toggleBtn.innerHTML = '>';
        toggleBtn.addEventListener('click', () => terminal.classList.toggle('hidden'));
        document.body.appendChild(toggleBtn);

        this.terminal = terminal;
        this.output = terminal.querySelector('.terminal-output');
        this.input = input;
        this.print('Welcome to Galactic Shell! Type "help" for available commands.');
    }

    handleInput(e) {
        if (e.key === 'Enter') {
            const cmd = this.input.value.trim();
            if (cmd) {
                this.history.push(cmd);
                this.historyIndex = this.history.length;
                this.executeCommand(cmd);
                this.input.value = '';
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (this.historyIndex > 0) {
                this.historyIndex--;
                this.input.value = this.history[this.historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (this.historyIndex < this.history.length - 1) {
                this.historyIndex++;
                this.input.value = this.history[this.historyIndex];
            } else {
                this.historyIndex = this.history.length;
                this.input.value = '';
            }
        }
    }

    executeCommand(cmdString) {
        const [cmd, ...args] = cmdString.split(' ');
        this.print(`<span class="prompt">PS C:\\Users\\guest></span> ${cmdString}`);
        
        if (this.commands[cmd]) {
            try {
                this.commands[cmd](...args);
            } catch (error) {
                this.print(`Error: ${error.message}`, 'error');
            }
        } else {
            this.print(`Command not found: ${cmd}. Type "help" for available commands.`, 'error');
        }
    }

    print(message, type = '') {
        const line = document.createElement('div');
        line.className = `terminal-line ${type}`;
        line.innerHTML = message;
        this.output.appendChild(line);
        this.output.scrollTop = this.output.scrollHeight;
    }

    showHelp() {
        const help = `
Available commands:
  help    - Show this help message
  clear   - Clear terminal
  ls      - List files in current directory
  cd      - Change directory
  upload  - Upload a file
  mkdir   - Create a new directory
  rm      - Remove a file
  cat     - View file contents`;
        this.print(help);
    }

    clearTerminal() {
        this.output.innerHTML = '';
    }

    listFiles() {
        const files = [
            'photos/',
            'albums/',
            'uploads/',
            'README.md'
        ];
        this.print(files.join('\n'));
    }

    changeDirectory(dir) {
        if (!dir) {
            this.print('Usage: cd <directory>', 'error');
            return;
        }
        this.currentDir = dir;
        this.print(`Changed directory to: ${dir}`);
    }

    uploadFile() {
        const input = document.createElement('input');
        input.type = 'file';
        input.style.display = 'none';
        document.body.appendChild(input);
        
        input.click();
        input.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                this.print(`Uploading: ${file.name}`);
                setTimeout(() => {
                    this.print(`Successfully uploaded: ${file.name}`);
                    document.body.removeChild(input);
                }, 1000);
            }
        });
    }

    createDirectory(name) {
        if (!name) {
            this.print('Usage: mkdir <directory_name>', 'error');
            return;
        }
        this.print(`Created directory: ${name}`);
    }

    removeFile(path) {
        if (!path) {
            this.print('Usage: rm <file_path>', 'error');
            return;
        }
        this.print(`Removed: ${path}`);
    }

    viewFile(file) {
        if (!file) {
            this.print('Usage: cat <file_path>', 'error');
            return;
        }
        this.print(`Contents of ${file}:\n---\nSimulated file contents\n---`);
    }
}

// Helper Functions
function createFullscreenView() {
    const fullscreenView = document.createElement('div');
    fullscreenView.className = 'fullscreen-view';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'close-fullscreen';
    closeButton.innerHTML = '×';
    closeButton.onclick = () => fullscreenView.classList.remove('active');
    
    const image = document.createElement('img');
    fullscreenView.appendChild(image);
    fullscreenView.appendChild(closeButton);
    document.body.appendChild(fullscreenView);
    
    return { fullscreenView, image };
}

// Main Application Code
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Shell
    const shell = new Shell();
    shell.setupTerminal();

    // Header Toggle Functionality
    let lastScrollY = window.scrollY;
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        lastScrollY = window.scrollY;
    });

    // Sun Button Toggle
    const toggleButton = document.querySelector('.toggle-button');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            header.classList.toggle('header-hidden');
        });
    }

    // Dynamic Photo Slots
    const photoSlots = document.querySelectorAll('.photo-slot');
    const galaxyPhotos = [
        'https://source.unsplash.com/random/400x400/?galaxy',
        'https://source.unsplash.com/random/400x400/?nebula',
        'https://source.unsplash.com/random/400x400/?space'
    ];

    function updatePhotoSlots() {
        photoSlots.forEach((slot, index) => {
            const img = new Image();
            img.src = galaxyPhotos[index % galaxyPhotos.length];
            img.onload = () => {
                slot.style.backgroundImage = `url(${img.src})`;
                slot.style.backgroundSize = 'cover';
                slot.style.backgroundPosition = 'center';
            };
        });
    }

    updatePhotoSlots();
    setInterval(updatePhotoSlots, 10000);

    // Gallery Permission Handler
    async function requestGalleryPermission() {
        try {
            const permission = await navigator.permissions.query({ name: 'camera' });
            if (permission.state === 'granted') {
                console.log('Gallery access granted');
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error requesting gallery permission:', error);
            return false;
        }
    }

    // Fullscreen View Functionality
    const { fullscreenView, image } = createFullscreenView();

    // Handle Gallery Images
    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', () => {
            image.src = img.src;
            fullscreenView.classList.add('active');
        });
    });

    // Admin Access Control
    class AdminControl {
        constructor() {
            this.isAdmin = localStorage.getItem('isAdmin') === 'true';
            this.setupAdminFeatures();
        }

        setupAdminFeatures() {
            // Add admin panel button if admin
            if (this.isAdmin) {
                this.createAdminPanel();
            }

            // Setup admin login
            window.promptAdminPassword = () => this.promptAdminPassword();

            // Add admin-only features to pages
            this.setupPageSpecificFeatures();
        }

        createAdminPanel() {
            const adminPanel = document.createElement('div');
            adminPanel.className = 'admin-panel';
            adminPanel.innerHTML = `
                <div class="admin-header">
                    <h3>Admin Panel</h3>
                    <button class="admin-close">×</button>
                </div>
                <div class="admin-content">
                    <div class="admin-stats">
                        <div class="stat">
                            <span class="stat-value" id="totalUsers">0</span>
                            <span class="stat-label">Users</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value" id="totalPhotos">0</span>
                            <span class="stat-label">Photos</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value" id="totalStorage">0</span>
                            <span class="stat-label">Storage Used</span>
                        </div>
                    </div>
                    <div class="admin-actions">
                        <button onclick="adminControl.manageUsers()">Manage Users</button>
                        <button onclick="adminControl.manageContent()">Manage Content</button>
                        <button onclick="adminControl.viewLogs()">View Logs</button>
                        <button onclick="adminControl.systemSettings()">System Settings</button>
                    </div>
                </div>
            `;
            document.body.appendChild(adminPanel);

            // Add admin toggle button
            const adminToggle = document.createElement('button');
            adminToggle.className = 'admin-toggle';
            adminToggle.innerHTML = '⚙️';
            adminToggle.onclick = () => adminPanel.classList.toggle('show');
            document.body.appendChild(adminToggle);

            // Close button functionality
            adminPanel.querySelector('.admin-close').onclick = () => 
                adminPanel.classList.remove('show');

            // Load initial stats
            this.updateAdminStats();
        }

        promptAdminPassword() {
            const password = prompt('Enter admin password:');
            if (password === 'Takudzwa011#') {
                localStorage.setItem('isAdmin', 'true');
                this.isAdmin = true;
                this.createAdminPanel();
                alert('Admin access granted!');
                location.reload();
            } else {
                alert('Access denied!');
            }
        }

        setupPageSpecificFeatures() {
            if (!this.isAdmin) return;

            const currentPage = window.location.pathname.split('/').pop();
            
            switch(currentPage) {
                case 'photos.html':
                    this.setupPhotoAdminFeatures();
                    break;
                case 'albums.html':
                    this.setupAlbumAdminFeatures();
                    break;
                case 'account.html':
                    this.setupAccountAdminFeatures();
                    break;
            }
        }

        setupPhotoAdminFeatures() {
            // Add delete and feature buttons to photos
            document.querySelectorAll('.photo-item').forEach(photo => {
                const adminControls = document.createElement('div');
                adminControls.className = 'admin-controls';
                adminControls.innerHTML = `
                    <button onclick="adminControl.deletePhoto('${photo.dataset.id}')">Delete</button>
                    <button onclick="adminControl.featurePhoto('${photo.dataset.id}')">Feature</button>
                `;
                photo.appendChild(adminControls);
            });
        }

        setupAlbumAdminFeatures() {
            // Add manage buttons to albums
            document.querySelectorAll('.album-item').forEach(album => {
                const adminControls = document.createElement('div');
                adminControls.className = 'admin-controls';
                adminControls.innerHTML = `
                    <button onclick="adminControl.deleteAlbum('${album.dataset.id}')">Delete</button>
                    <button onclick="adminControl.editAlbum('${album.dataset.id}')">Edit</button>
                `;
                album.appendChild(adminControls);
            });
        }

        setupAccountAdminFeatures() {
            // Add user management section
            const accountSection = document.querySelector('.account-section');
            if (accountSection) {
                const adminSection = document.createElement('div');
                adminSection.className = 'admin-section';
                adminSection.innerHTML = `
                    <h3>User Management</h3>
                    <div class="user-list">
                        <!-- User list will be populated dynamically -->
                    </div>
                `;
                accountSection.appendChild(adminSection);
                this.loadUserList();
            }
        }

        updateAdminStats() {
            // Simulate loading stats
            document.getElementById('totalUsers').textContent = '1,234';
            document.getElementById('totalPhotos').textContent = '45.6K';
            document.getElementById('totalStorage').textContent = '789GB';
        }

        // Admin Actions
        async manageUsers() {
            const users = await this.fetchUsers();
            const userList = users.map(user => `
                <div class="user-item">
                    <span>${user.name}</span>
                    <span>${user.email}</span>
                    <button onclick="adminControl.editUser('${user.id}')">Edit</button>
                    <button onclick="adminControl.deleteUser('${user.id}')">Delete</button>
                </div>
            `).join('');

            this.showAdminModal('Manage Users', userList);
        }

        async manageContent() {
            const content = await this.fetchContent();
            const contentList = content.map(item => `
                <div class="content-item">
                    <span>${item.type}</span>
                    <span>${item.name}</span>
                    <button onclick="adminControl.editContent('${item.id}')">Edit</button>
                    <button onclick="adminControl.deleteContent('${item.id}')">Delete</button>
                </div>
            `).join('');

            this.showAdminModal('Manage Content', contentList);
        }

        async viewLogs() {
            const logs = await this.fetchLogs();
            const logList = logs.map(log => `
                <div class="log-item ${log.type}">
                    <span>${log.timestamp}</span>
                    <span>${log.action}</span>
                    <span>${log.user}</span>
                </div>
            `).join('');

            this.showAdminModal('System Logs', logList);
        }

        systemSettings() {
            const settings = `
                <div class="settings-form">
                    <div class="setting-group">
                        <label>Max Upload Size</label>
                        <input type="number" value="100" min="1" max="1000"> MB
                    </div>
                    <div class="setting-group">
                        <label>Auto Backup</label>
                        <select>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                        </select>
                    </div>
                    <div class="setting-group">
                        <label>Maintenance Mode</label>
                        <input type="checkbox">
                    </div>
                    <button onclick="adminControl.saveSettings()">Save Settings</button>
                </div>
            `;

            this.showAdminModal('System Settings', settings);
        }

        showAdminModal(title, content) {
            const modal = document.createElement('div');
            modal.className = 'admin-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>${title}</h3>
                        <button class="modal-close">×</button>
                    </div>
                    <div class="modal-body">${content}</div>
                </div>
            `;
            document.body.appendChild(modal);

            modal.querySelector('.modal-close').onclick = () => 
                modal.remove();
        }

        // Simulated API calls
        async fetchUsers() {
            return [
                { id: 1, name: 'John Doe', email: 'john@example.com' },
                { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
            ];
        }

        async fetchContent() {
            return [
                { id: 1, type: 'Photo', name: 'Galaxy.jpg' },
                { id: 2, type: 'Album', name: 'Nebulae' }
            ];
        }

        async fetchLogs() {
            return [
                { timestamp: '2023-10-15 14:30', action: 'Login', user: 'admin', type: 'info' },
                { timestamp: '2023-10-15 14:35', action: 'Upload', user: 'john', type: 'success' }
            ];
        }
    }

    // Initialize Admin Control
    const adminControl = new AdminControl();

// Auto-save functionality
class AutoSave {
    constructor() {
        this.delay = 1000; // Save after 1 second of inactivity
        this.timeoutId = null;
        this.setupAutoSave();
    }

    setupAutoSave() {
        // Auto-save for account form
        const accountForm = document.getElementById('accountForm');
        if (accountForm) {
            // Load saved data
            this.loadAccountData();

            // Auto-save on input changes
            accountForm.querySelectorAll('input, select').forEach(input => {
                input.addEventListener('input', () => {
                    this.debounce(() => this.saveAccountData());
                });
            });

            // Save on form submit
            accountForm.addEventListener('submit', (event) => {
                event.preventDefault();
                this.saveAccountData();
                this.showSaveNotification('Account information saved!');
            });
        }

        // Auto-save for albums
        const albumItems = document.querySelectorAll('.album-item');
        if (albumItems.length > 0) {
            this.loadAlbums();
            albumItems.forEach(album => {
                album.addEventListener('click', () => {
                    this.saveAlbumState(album);
                });
            });
        }

        // Auto-save for photos
        const photoItems = document.querySelectorAll('.photo-item');
        if (photoItems.length > 0) {
            this.loadPhotos();
            photoItems.forEach(photo => {
                photo.addEventListener('click', () => {
                    this.savePhotoState(photo);
                });
            });
        }

        // Auto-save terminal state
        const terminal = document.querySelector('.terminal');
        if (terminal) {
            this.loadTerminalState();
            terminal.addEventListener('click', () => {
                this.debounce(() => this.saveTerminalState());
            });
        }
    }

    debounce(func) {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => {
            func();
            this.showSaveNotification('Auto-saved');
        }, this.delay);
    }

    showSaveNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'save-notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        // Remove notification after 2 seconds
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    loadAccountData() {
        const savedData = localStorage.getItem('accountData');
        if (savedData) {
            const data = JSON.parse(savedData);
            Object.entries(data).forEach(([id, value]) => {
                const element = document.getElementById(id);
                if (element) {
                    if (element.type === 'checkbox') {
                        element.checked = value;
                    } else {
                        element.value = value;
                    }
                }
            });
        }

        // Load profile picture
        const savedPic = localStorage.getItem('profilePic');
        if (savedPic) {
            const profilePic = document.getElementById('profilePic');
            if (profilePic) {
                profilePic.src = savedPic;
                profilePic.style.display = 'block';
            }
        }
    }

    saveAccountData() {
        const form = document.getElementById('accountForm');
        if (form) {
            const data = {};
            form.querySelectorAll('input, select').forEach(input => {
                if (input.type === 'checkbox') {
                    data[input.id] = input.checked;
                } else if (input.type !== 'file') {
                    data[input.id] = input.value;
                }
            });
            localStorage.setItem('accountData', JSON.stringify(data));
        }
    }

    loadAlbums() {
        const savedAlbums = localStorage.getItem('albums');
        if (savedAlbums) {
            const albums = JSON.parse(savedAlbums);
            albums.forEach(album => {
                // Implement album loading logic
            });
        }
    }

    saveAlbumState(album) {
        const albums = JSON.parse(localStorage.getItem('albums') || '[]');
        const albumData = {
            id: album.dataset.id,
            name: album.querySelector('.album-info h3').textContent,
            photoCount: album.querySelector('.album-overlay span').textContent
        };
        
        const index = albums.findIndex(a => a.id === albumData.id);
        if (index > -1) {
            albums[index] = albumData;
        } else {
            albums.push(albumData);
        }
        
        localStorage.setItem('albums', JSON.stringify(albums));
    }

    loadPhotos() {
        const savedPhotos = localStorage.getItem('photos');
        if (savedPhotos) {
            const photos = JSON.parse(savedPhotos);
            photos.forEach(photo => {
                // Implement photo loading logic
            });
        }
    }

    savePhotoState(photo) {
        const photos = JSON.parse(localStorage.getItem('photos') || '[]');
        const photoData = {
            id: photo.dataset.id,
            src: photo.querySelector('img').src,
            title: photo.querySelector('.photo-info h3').textContent,
            date: photo.querySelector('.photo-info p').textContent
        };
        
        const index = photos.findIndex(p => p.id === photoData.id);
        if (index > -1) {
            photos[index] = photoData;
        } else {
            photos.push(photoData);
        }
        
        localStorage.setItem('photos', JSON.stringify(photos));
    }

    loadTerminalState() {
        const savedState = localStorage.getItem('terminalState');
        if (savedState) {
            const state = JSON.parse(savedState);
            const terminal = document.querySelector('.terminal');
            if (terminal && state.hidden) {
                terminal.classList.add('hidden');
            }
        }
    }

    saveTerminalState() {
        const terminal = document.querySelector('.terminal');
        if (terminal) {
            const state = {
                hidden: terminal.classList.contains('hidden')
            };
            localStorage.setItem('terminalState', JSON.stringify(state));
        }
    }
}

// Initialize auto-save
const autoSave = new AutoSave();
});
