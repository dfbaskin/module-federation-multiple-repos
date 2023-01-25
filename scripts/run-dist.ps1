$rootPath = Join-Path $PSScriptRoot ".." -Resolve

$commands = @(
    @{
        Title = "Host App"
        Command = "dotnet serve --directory .\repo-one\dist\apps\host-app\ --port 4200"
    }
    @{
        Title = "Module One"
        Command = "dotnet serve --directory .\repo-one\dist\apps\interop-app\ --port 4201 --cors"
    }
)

Push-Location -Path $rootPath

$commands |
    ForEach-Object {
        $cmd = $_

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
    }

Pop-Location
