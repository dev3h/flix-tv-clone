@echo off
echo Starting Flix TV Cloneecho Choose a server option:
echo 1. Development server with auto-reload (live-server)
echo 2. Production server (Node.js custom server)
echo 3. Alternative http-server
echo.
set /p choice="Enter your choice (1, 2, or 3): "

if "%choice%"=="1" (
    echo Starting development server with live-reload...
    echo Note: Browser will automatically refresh when you edit files!
    npm run dev
) else if "%choice%"=="2" (
    echo Starting production server...
    npm start
) else if "%choice%"=="3" (
    echo Starting http-server...
    npm run serve
) else (
    echo Invalid choice, starting development server with live-reload...
    npm run dev
)ver...
echo.
echo Make sure you have Node.js installed on your system.
echo If you don't have Node.js, download it from: https://nodejs.org/
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not found in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if package.json exists
if not exist package.json (
    echo Error: package.json not found
    echo Make sure you're running this script from the project root directory
    pause
    exit /b 1
)

REM Install dependencies if node_modules doesn't exist
if not exist node_modules (
    echo Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo Error: Failed to install dependencies
        pause
        exit /b 1
    )
    echo.
)

echo Starting development server...
echo.
echo You can choose one of these options:
echo 1. Run with custom Node.js server (recommended)
echo 2. Run with http-server package
echo.
set /p choice="Enter your choice (1 or 2): "

if "%choice%"=="1" (
    echo Starting custom server...
    node server.js
) else if "%choice%"=="2" (
    echo Starting http-server...
    npm run serve
) else (
    echo Invalid choice, starting custom server...
    node server.js
)

pause