$wxml = Get-Content "d:\Freya MOC\100-Projects\101-AI+??\NuanYuan\packages\client\pages\teacher\teacher.wxml" -Encoding UTF8
$wxml = $wxml -replace '<view class="tab-icon">??</view>', '<view class="tab-icon icon-chat"></view>'
$wxml = $wxml -replace '<view class="tab-icon">??</view>', '<view class="tab-icon icon-child"></view>'
$wxml = $wxml -replace '<view class="tab-icon">??</view>', '<view class="tab-icon icon-stats"></view>'
$wxml = $wxml -replace '<view class="tab-icon">??</view>', '<view class="tab-icon icon-me"></view>'
Set-Content "d:\Freya MOC\100-Projects\101-AI+??\NuanYuan\packages\client\pages\teacher\teacher.wxml" -Encoding UTF8 -Value $wxml
