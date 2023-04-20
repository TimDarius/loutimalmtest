# Power Platform ALM Demo

## Summary

## Environments

## GitHub Actions

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



### hotfix-export-and-branch-solutions.yml

### release-action-call.yml

### release-solution-to-prod-with-inputs.yml

## Solution


