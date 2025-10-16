@echo off
echo Fazendo commit automatico...
git add .
git commit -m "Auto-commit: %date% %time%"
git push origin main
echo Commit realizado com sucesso!
pause
