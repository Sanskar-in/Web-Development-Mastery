$filePath = "index.html"
$cssPath = "style.css"
$jsPath = "script.js"

$lines = Get-Content $filePath -Raw
$lines = $lines -split "`r`n|`n"

$outHtml = @()
$outCss = @()
$outJs = @()

$state = "HTML"

for ($i = 0; $i -lt $lines.Length; $i++) {
    $line = $lines[$i]
    
    if ($state -eq "HTML" -and $line -match '^\s*<style id="baseStyles">\s*$') {
        $state = "CSS"
        $outHtml += '  <link rel="stylesheet" href="style.css">'
        continue
    }
    elseif ($state -eq "CSS" -and $line -match '^\s*</style>\s*$') {
        $state = "HTML"
        continue
    }
    elseif ($state -eq "HTML" -and $line -match '^\s*<script>\s*$' -and ($i + 1 -lt $lines.Length) -and $lines[$i+1] -match 'THEME DATA') {
        $state = "JS"
        $outHtml += '  <script src="script.js"></script>'
        continue
    }
    elseif ($state -eq "JS" -and $line -match '^\s*</script>\s*$') {
        $state = "HTML"
        continue
    }
    
    if ($state -eq "CSS") {
        $outCss += $line
    }
    elseif ($state -eq "JS") {
        $outJs += $line
    }
    else {
        $outHtml += $line
    }
}

Set-Content -Path $cssPath -Value $outCss -Encoding UTF8
Set-Content -Path $jsPath -Value $outJs -Encoding UTF8
Set-Content -Path $filePath -Value $outHtml -Encoding UTF8

Write-Host "✅ Success! The CSS and JS have been perfectly separated."
Write-Host "-> Created: Using Style for HTML Mastery.css"
Write-Host "-> Created: Using JS for HTML Mastery.js"
Write-Host "-> Updated: index.html"
