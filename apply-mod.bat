:::::::::::::::::::::::::::::::::::::::::::
:: Script to copy over your Vivaldi mods ::
:: by Christoph142                       ::
:::::::::::::::::::::::::::::::::::::::::::

@echo off
setlocal enabledelayedexpansion

:: This is the folder that contains your modded files (make sure it uses similar folder structure):
set "modFolder=."
:: This is a list of your Vivaldi installations' Application folders (you can use the Vivaldi folder, too, but it takes longer to find the file):
set installPaths="%userprofile%\AppData\Local\Vivaldi\Application\" "%userprofile%\Test\Snapshot\Application\"

:: Don't alter anything below this point ;)

set nrOfInstalls=0
set nrOfSuccessfulPatches=0

for %%i in (%installPaths%) do (
	<NUL set /p=Searching for newest browser.html in %%~dpi... 
	set /a nrOfInstalls=nrOfInstalls+1

	set installPath=%%~dpi
	set latestVersionFolder=

	for /f "tokens=*" %%a in ('dir /a:-d /b /s "!installPath!"') do (
		if "%%~nxa"=="browser.html" set latestVersionFolder=%%~dpa
	)

	if not defined latestVersionFolder (
		echo.
		echo Couldn't find it. :(
		echo Is !installPath! the correct Vivaldi Application folder?
		echo.
	) else (
		echo Found it.
		echo.

		if exist !latestVersionFolder!\browser.bak.html (
			echo Backup is already in place.
		) else (
			echo Creating a backup of your original browser.html file.
			copy "!latestVersionFolder!\browser.html" "!latestVersionFolder!\browser.bak.html"
		)
		echo.

		echo Copying files
		echo    from %modFolder%
		echo    into !latestVersionFolder!:

		xcopy /s /y "%modFolder%" "!latestVersionFolder!"

		echo.

		set /a nrOfSuccessfulPatches=nrOfSuccessfulPatches+1
	)
)

echo All done^^! :)
echo Successfully patched %nrOfSuccessfulPatches% out of %nrOfInstalls% installs.
echo Dont forget to add `<script src="custom.js"></script>` to the browser.html 
echo.
