# Script PowerShell para commits automáticos
# Uso: .\auto-commit.ps1 "Mensagem do commit"

param(
    [string]$commitMessage = "Auto-commit: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
)

Write-Host "Iniciando processo de commit automático..." -ForegroundColor Green

# Verificar se há mudanças
$status = git status --porcelain
if ($status) {
    Write-Host "Mudanças detectadas. Fazendo commit..." -ForegroundColor Yellow
    
    # Adicionar todos os arquivos
    git add .
    
    # Fazer commit
    git commit -m $commitMessage
    
    # Fazer push
    git push origin main
    
    Write-Host "Commit realizado com sucesso!" -ForegroundColor Green
    Write-Host "Mensagem: $commitMessage" -ForegroundColor Cyan
} else {
    Write-Host "Nenhuma mudança detectada. Nada para commitar." -ForegroundColor Yellow
}

Write-Host "Processo concluído." -ForegroundColor Green
