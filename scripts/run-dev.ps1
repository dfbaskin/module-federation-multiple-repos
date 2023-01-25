$rootPath = Join-Path $PSScriptRoot ".." -Resolve

$commands = @(
    @{
        Title = "Host App"
        Path = "repo-one"
        Command = "npx nx serve host-app"
    }
    @{
        Title = "Module One"
        Path = "repo-one"
        Command = "npx nx serve interop-app"
    }
    @{
        Title = "Module Two"
        Path = "repo-two"
        Command = "npx nx serve addon-app"
    }
)

$commands |
    ForEach-Object {
        $cmd = $_

        Push-Location -Path $(join-path $rootPath $cmd.Path)

        $script = @"
Write-Output "Starting $($cmd.Title)`"
`$host.ui.RawUI.WindowTitle = "$($cmd.Title)`"
$($cmd.Command)
"@
        $bytes = [System.Text.Encoding]::Unicode.GetBytes($script)
        $encoded = [Convert]::ToBase64String($bytes)

        $options = @{
            FilePath = "pwsh.exe"
            WindowStyle = "Normal"
            ArgumentList = @(
                "-NoLogo"
                "-NoExit"
                "-EncodedCommand"
                $encoded
            )
        }
        Start-Process @options

        Pop-Location
    }
