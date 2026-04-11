$paths = @("d:\Freya MOC\100-Projects\101-AI+??\NuanYuan\packages\client\pages\teacher\teacher.wxss", "d:\Freya MOC\100-Projects\101-AI+??\NuanYuan\packages\client\pages\parent\parent.wxss")
foreach ($path in $paths) {
    if (Test-Path $path) {
        $content = Get-Content $path -Raw -Encoding UTF8
        $content = $content -replace '(?s)\.tab \{[^}]*color:\s*#[a-zA-Z0-9]+;[^}]*\}', ".tab {`n  flex: 1;`n  display: flex;`n  flex-direction: column;`n  align-items: center;`n  gap: 6rpx;`n  font-size: 20rpx;`n  color: #8d8a85;`n  transition: color 0.2s;`n}"
        $content = $content -replace '(?s)\.tab\.on \{[^}]*\}', ".tab.on {`n  color: #e59554;`n  font-weight: 700;`n}"
        Set-Content $path -Value $content -Encoding UTF8
    }
}
$appPath = "d:\Freya MOC\100-Projects\101-AI+??\NuanYuan\packages\client\app.wxss"
$appContent = Get-Content $appPath -Raw -Encoding UTF8
$appContent = $appContent -replace 'background-color: #8d8a85;', 'background-color: currentColor;'
$appContent = $appContent -replace '(?s)\.tab\.on \.tab-icon \{[^}]*\}', ''
Set-Content $appPath -Value $appContent -Encoding UTF8
