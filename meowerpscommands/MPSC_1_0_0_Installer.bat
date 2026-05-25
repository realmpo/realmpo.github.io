@echo off
echo ====== MPSC Installer ======
title MPSC 1.0.0 Installer
set "ANSIEcsape= "
set "blackT=%ANSIEcsape%[30m"
set "redT=%ANSIEcsape%[31m"
set "greenT=%ANSIEcsape%[32m"
set "yellowT=%ANSIEcsape%[33m"
set "blueT=%ANSIEcsape%[34m"
set "magentaT=%ANSIEcsape%[35m"
set "cyanT=%ANSIEcsape%[36m"
set "whiteT=%ANSIEcsape%[37m"
set "defaultText=%ANSIEcsape%[0m"

set /p wantToShowFirstTimeNotes="Do you want tips to learn some basics? (Y/N):"
if /i "%wantToShowFirstTimeNotes%" == "y" (
  echo %magentaT%==== MPSC First-Time Tips ====
  echo All these tips and more can be found when you type "mpsc help 0" in PowerShell
  echo The version you have installed is %cyanT%1.0.0%magentaT%, but if you forget, type "mpsc ver" in PowerShell.
)
echo You will now install MPSC 1.0.0.
pause
@echo off
set "OUTPUT_FILE=%USERPROFILE%\Documents\my_generated_file.txt"

:: Clear the target file if it already exists
if exist "%OUTPUT_FILE%" del "%OUTPUT_FILE%"

:: Loop through this script and extract the data lines
for /f "tokens=* delims=" %%a in ('findstr /v /b /c:"::" "%~f0" ^| findstr /n "^"') do (
    set "line=%%a"
    setlocal enabledelayedexpansion
    set "line=!line:*:=!"
    
    :: Check if we reached the data section
    if defined data_start (
        echo(!line!>>"%OUTPUT_FILE%"
    )
    if "!line!"==":BEGIN_DATA" (
        endlocal
        set "data_start=1"
    ) else (
        endlocal
    )
)

echo Done generating 200 lines!
pause
exit /b

:: ==========================================
:: DO NOT REMOVE THIS LINE
:BEGIN_DATA
:: ==========================================
@echo off
title This is my 200 line payload script
echo Line 3 of my new script
echo Line 4 of my new script
echo.
echo You can paste all 200 lines right here!
echo Normal text works perfectly.
echo No need to type the word echo at the start of raw text lines.
:: (Paste your massive 200-line block here)
