$css = @"
.icon-chat { -webkit-mask-image: url("data:image/svg+xml,%3Svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 15a3 3 0 0 1-3 3H8l-4 3v-3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3z' fill='none' stroke='black' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); mask-image: url("data:image/svg+xml,%3Svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 15a3 3 0 0 1-3 3H8l-4 3v-3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3z' fill='none' stroke='black' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); }
.icon-child { -webkit-mask-image: url("data:image/svg+xml,%3Svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='9' r='2.5' fill='none' stroke='black' stroke-width='1.7'/%3E%3Ccircle cx='15.5' cy='8.5' r='2.2' fill='none' stroke='black' stroke-width='1.7'/%3E%3Cpath d='M3.5 18a4.8 4.8 0 0 1 9.6 0' fill='none' stroke='black' stroke-width='1.7' stroke-linecap='round'/%3E%3Cpath d='M12.2 18a4.2 4.2 0 0 1 8.3 0' fill='none' stroke='black' stroke-width='1.7' stroke-linecap='round'/%3E%3C/svg%3E"); mask-image: url("data:image/svg+xml,%3Svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='9' r='2.5' fill='none' stroke='black' stroke-width='1.7'/%3E%3Ccircle cx='15.5' cy='8.5' r='2.2' fill='none' stroke='black' stroke-width='1.7'/%3E%3Cpath d='M3.5 18a4.8 4.8 0 0 1 9.6 0' fill='none' stroke='black' stroke-width='1.7' stroke-linecap='round'/%3E%3Cpath d='M12.2 18a4.2 4.2 0 0 1 8.3 0' fill='none' stroke='black' stroke-width='1.7' stroke-linecap='round'/%3E%3C/svg%3E"); }
.icon-stats { -webkit-mask-image: url("data:image/svg+xml,%3Svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 19V11M12 19V7M19 19v-5' fill='none' stroke='black' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); mask-image: url("data:image/svg+xml,%3Svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 19V11M12 19V7M19 19v-5' fill='none' stroke='black' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); }
.icon-me { -webkit-mask-image: url("data:image/svg+xml,%3Svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='8' r='3' fill='none' stroke='black' stroke-width='1.7'/%3E%3Cpath d='M5 19a7 7 0 0 1 14 0' fill='none' stroke='black' stroke-width='1.7' stroke-linecap='round'/%3E%3C/svg%3E"); mask-image: url("data:image/svg+xml,%3Svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='8' r='3' fill='none' stroke='black' stroke-width='1.7'/%3E%3Cpath d='M5 19a7 7 0 0 1 14 0' fill='none' stroke='black' stroke-width='1.7' stroke-linecap='round'/%3E%3C/svg%3E"); }
.tab-icon {
  width: 44rpx;
  height: 44rpx;
  background-color: #8d8a85;
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  transition: background-color 0.2s;
}
.tab.on .tab-icon {
  background-color: #e59554;
}
"@
Add-Content "d:\Freya MOC\100-Projects\101-AI+??\NuanYuan\packages\client\app.wxss" -Value $css -Encoding UTF8
