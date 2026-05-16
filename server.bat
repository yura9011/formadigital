@echo off
cd /d "%~dp0"
echo Iniciando servidor local en http://localhost:3000
echo Presiona Ctrl+C para cerrar
bun x serve . --port 3000
pause
