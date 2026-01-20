@echo off
echo ========================================
echo Qatar Tech Hub - Dashboard Quick Launch
echo ========================================
echo.
echo Starting development server...
echo.
cd /d "%~dp0"
start http://localhost:5173/login
call npm run dev
