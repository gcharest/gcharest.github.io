# GitHub Actions Workflows

This directory contains automated workflows for infrastructure and site deployment.

## Workflows

### 1. Terragrunt Plan (`terragrunt-plan.yml`)

**Triggers:**
- Pull requests to `main` branch that modify `terragrunt/**` files
- Manual dispatch

**Purpose:**
- Plans infrastructure changes across all Terragrunt modules
- Posts plan results as PR comments for review
- Validates Terraform syntax and dependencies

**What it does:**
1. Checks out code
2. Sets up Terraform and Terragrunt
3. Authenticates with AWS using OIDC
4. Runs `terragrunt run --all init`
5. Runs `terragrunt run --all plan`
6. Comments plan output on PR

### 2. Terragrunt Apply (`terragrunt-apply.yml`)

**Triggers:**
- Pushes to `main` branch that modify `terragrunt/**` files
- Manual dispatch

**Purpose:**
- Deploys infrastructure changes to AWS
- Creates/updates: Route53, ACM certificates, CloudFront, S3 bucket

**What it does:**
1. Checks out code
2. Sets up Terraform and Terragrunt
3. Authenticates with AWS using OIDC
4. Runs `terragrunt run --all init`
5. Runs `terragrunt run --all apply -auto-approve`
6. Outputs Route53 nameservers for domain registration

**Important:** After first run, manually update your domain registrar with the Route53 nameservers shown in the workflow output.

### 3. Deploy Jekyll Site (`deploy-site.yml`)

**Triggers:**
- Pushes to `main` branch that modify site content (pages, posts, assets, config)
- Manual dispatch

**Purpose:**
- Builds Jekyll site for production
- Deploys to S3 bucket
- Invalidates CloudFront cache for immediate updates

**What it does:**
1. Checks out code
2. Sets up Ruby and installs dependencies
3. Builds Jekyll site with `JEKYLL_ENV=production`
4. Authenticates with AWS using OIDC
5. Syncs `_site/` to S3 with appropriate cache headers:
   - Static assets: 1 hour cache
   - HTML files: 5 minute cache
   - Manifest: no cache
6. Finds CloudFront distribution
7. Creates cache invalidation for immediate updates
8. Reports deployment status

**Cache Strategy:**
- **Assets (CSS, JS, images):** 1 hour (`max-age=3600`)
  - Balance between CDN efficiency and update speed
- **HTML files:** 5 minutes (`max-age=300`)
  - Quick content updates while still leveraging cache
- **manifest.json:** No cache
  - Always gets latest version

## Workflow Order

For initial setup:

1. **First:** Run `terragrunt-apply` to create infrastructure
   - Creates S3 bucket, CloudFront distribution, ACM certificate, Route53 zone
   - Note the Route53 nameservers output

2. **Second:** Update domain nameservers at your registrar
   - Use nameservers from previous step
   - Wait for DNS propagation (can take 24-48 hours)

3. **Third:** Run `deploy-site` to upload website
   - Builds and deploys Jekyll site to S3
   - Configures CloudFront for global distribution

For ongoing development:

- **Content changes** (posts, pages) → triggers `deploy-site` only
- **Infrastructure changes** (terragrunt configs) → triggers `terragrunt-plan` on PRs, `terragrunt-apply` on merge

## Required Secrets

Set these in GitHub repository settings (`Settings` → `Secrets and variables` → `Actions`):

- `AWS_ACCOUNT_ID` - Your 12-digit AWS account ID

## IAM Role Setup

The workflows use AWS OIDC authentication (no access keys stored in GitHub).

**One-time setup required:**

```bash
cd terragrunt/bootstrap
terraform init
terraform apply
```

This creates:
- GitHub OIDC provider
- `github-actions-terragrunt-role` IAM role
- Necessary permissions for S3, CloudFront, Route53, ACM

See [terragrunt/bootstrap/README.md](../terragrunt/bootstrap/README.md) for details.

## Manual Workflow Dispatch

All workflows can be triggered manually:

1. Go to `Actions` tab in GitHub
2. Select workflow from left sidebar
3. Click `Run workflow` button
4. Select branch (usually `main`)
5. Click green `Run workflow` button

## Monitoring

- **Plan/Apply progress:** Check `Actions` tab for real-time logs
- **Infrastructure state:** Stored in S3 bucket `gcharest-terraform-state-{account-id}`
- **Website:** https://www.gcharest.ca/
- **CloudFront:** View distribution in AWS Console

## Troubleshooting

### "403 Forbidden" errors
- IAM role not set up or lacks permissions
- Run bootstrap terraform (see above)
- Verify `AWS_ACCOUNT_ID` secret is set correctly

### CloudFront cache not invalidating
- Check CloudFront distribution exists
- Workflow queries by comment: "Blog distribution for gcharest"
- Verify distribution was created by terragrunt-apply

### Jekyll build failures
- Check Ruby version in `deploy-site.yml` matches local development
- Verify Gemfile.lock is committed
- Review build logs in Actions tab

### DNS not resolving
- Nameservers updated at domain registrar?
- DNS propagation can take 24-48 hours
- Use `dig gcharest.ca NS` to check current nameservers
