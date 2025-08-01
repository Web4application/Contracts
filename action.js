name: 'Setup .NET Core SDK'
description: 'Used to build and publish .NET source. Set up a specific version of the .NET and authentication to private NuGet repository'
author: 'GitHub'
branding:
  icon: play
  color: green
inputs:
  dotnet-version:
    description: 'Optional SDK version(s) to use. If not provided, will install global.json version when available. Examples: 2.2.104, 3.1, 3.1.x, 3.x, 6.0.2xx'
  dotnet-quality:
    description: 'Optional quality of the build. The possible values are: daily, signed, validated, preview, ga.'
  global-json-file:
    description: 'Optional global.json location, if your global.json isn''t located in the root of the repo.'
  source-url:
    description: 'Optional package source for which to set up authentication. Will consult any existing NuGet.config in the root of the repo and provide a temporary NuGet.config using the NUGET_AUTH_TOKEN environment variable as a ClearTextPassword'
  owner:
    description: 'Optional OWNER for using packages from GitHub Package Registry organizations/users other than the current repository''s owner. Only used if a GPR URL is also provided in source-url'
  config-file:
    description: 'Optional NuGet.config location, if your NuGet.config isn''t located in the root of the repo.'
  cache:
    description: 'Optional input to enable caching of the NuGet global-packages folder'
    required: false
    default: false
  cache-dependency-path:
    description: 'Used to specify the path to a dependency file: packages.lock.json. Supports wildcards or a list of file names for caching multiple dependencies.'
    required: false
outputs:
  cache-hit:
    description: 'A boolean value to indicate if a cache was hit.'
  dotnet-version:
    description: 'Contains the installed by action .NET SDK version for reuse.'
runs:
  using: 'node20'
  main: 'dist/setup/index.js'
  post: 'dist/cache-save/index.js'
  post-if: success()