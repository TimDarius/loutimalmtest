# Power Platform ALM Demo

## Summary

## Environments
The following Power Platforms are used as part of this project.

| Name    | Description                 | 
|---------|:---------------------------:|
| DEV | Main development environment will all work is performed on the solution |
| BUILD | Build environment that is used by GitHub actions for building solution  |
| TEST | Test environment that is used by GitHub actions |
| HOTFIX| Special hotfix environment to be used for working on hotfixes and keeping dev work isolated from hotfixes |
| PROD|  Production environment that will host the final solution for production use|


## GitHub Actions

### Environment Variables / Secrets

| Name    | Description                 | 
|---------|:---------------------------:|
| CLIENT_ID | The Client ID from the App Registration for Power Platform |
| TENANT_ID | The Tenant ID for the Tenant hosting the Power Platform solution |
| ENVIRONMENT_URL | The URL for the Power Platform environment |
| BUILD_ENVIRONMENT_URL | The URL for the Power Platform Build environment |
| TEST_ENVIRONMENT_URL | The URL for the Power Platform Test environment |
| PRODUCTION_ENVIRONMENT_URL | The URL for the Power Platform Production environmnet | 
| PowerPlatformSPN | The Secret for the Client ID that has been registered for Power Platform. This is stored in secrets on GitHub |
| GITHUB_TOKEN | 

### Create App Registration in Azure for Dataverse (Power Platform)
Within Azure, create an App Registration with API access to Dataverse.

### Store App Registration Secret in GitHub Environments
Within GitHub, create an environment to store the App Registration Secret. In GitHub under Environments you can store secrets (secure information) so that it will be available but is secured.

### backfill-main-to-dev.yml
Export solution from DEV as unmanaged, upload export solution to GitHub artifact store, pack solution as unmanaged and deploy to dev/hotfix

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
Trigger action that is initiated when a new release is created in GitHub. This action will then call *release-solution-to-prod-with-inputs* to handle importing a managed solution from the Main branch into the production Power Platform environment.

### release-solution-to-prod-with-inputs.yml
This action is called from *release-action-call* when a new release is created in GitHub. Once a new release create this action will use the Main branch to pack the solution and import into production as a managed solution.

Inputs

Steps:
*convert-to-managed*
1. actions/checkout@v2
2. Pack solution
3. Import solution as unmanaged to build env
4. Export solution as managed
5. Upload the ready to ship solution to GitHub artifact store
*release-to-staging*
1. actions/checkout@v2
2. Fetch the ready to ship solution from GitHub artifact store



## Solution


