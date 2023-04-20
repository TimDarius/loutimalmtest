# Power Platform ALM Demo

## Summary

## Environments

## GitHub Actions

### Environment Variables / Secrets

| Name    | Description                 | 
|---------|:---------------------------:|
| CLIENT_ID | The Client ID from the App Registration for Power Platform |
| TENANT_ID | The Tenant ID for the Tenant hosting the Power Platform solution |
| ENVIRONMENT_URL | The URL for the Power Platform environment |
| PowerPlatformSPN | The Secret for the Client ID that has been registered for Power Platform. This is stored in secrets on GitHub |
| GITHUB_TOKEN | 

### backfill-main-to-dev.yml

### export-and-branch.yml
Export unmanaged solution from environmnet , unpack the solution, prepare for check-in, commit and create branch.
Once this workflow completes a Pull Request will be needed to merge the new branch into the Main branch.

Inputs:
solution_name: The name of the solution to be export from Power Platform Environment.
solution_exported_folder

| Input Name    | Required | Default    | Description                    |
|---------------|:--------:|-----------:|-------------------------------:|
| solution_name | Yes      | ALMLab     | name of the solution to worked on from Power Platform |
| solution_exported_folder | Yes      | out/exported/     | folder name for staging the exported solution *do not change* |
| solution_folder | Yes | out/solutions/ | staging the unpacked solution folder before check-in *do not change* |
| solution_target_folder | Yes | solutions/ | folder name to be created and checked in *do not change*|

Steps:
1. actions/checkout@v2
2. who-am-i action
3. export-solution action
4. unpack-solultion action
5. branch-solution, prepare it, for Pull Request


### hotfix-export-and-branch-solutions.yml

### release-action-call.yml

### release-solution-to-prod-with-inputs.yml

## Solution


