locals {
  environment   = "prod"
  aws_region    = "us-east-1"  # Required for CloudFront + ACM
  project_name  = "gcharest-ca-website"
  domain_name   = "gcharest.ca"

  tags = {
    Environment = "production"
    Terraform   = "true"
  }
}
