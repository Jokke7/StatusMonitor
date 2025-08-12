# Security Setup Instructions

## ⚠️ IMPORTANT SECURITY NOTICE

This repository had sensitive configuration files removed from git history due to exposed secrets. 

## Compromised Secrets (NEED IMMEDIATE ACTION)

The following secrets were exposed and need to be rotated:

1. **Azure SQL Database**: 
   - Server: `valid-prod.database.windows.net`
   - Username: `ValidStatusAdmin` 
   - Password: `Z3KPsGbgrxn9yDDG` ⚠️ **CHANGE IMMEDIATELY**

2. **Azure AD Application**:
   - Client ID: `dbb3660d-0f3d-4e3c-901f-b8f88dc27604`
   - Tenant ID: `3707f7ff-e571-48a1-aae1-41ed040a41d8`
   - ⚠️ **Rotate client secrets immediately**

## Setup Instructions

1. **Copy template files**:
   ```bash
   cp ValidStatusMonitor/appsettings.json.template ValidStatusMonitor/appsettings.json
   ```

2. **Edit configuration files** and replace placeholders:
   - `YOUR_SERVER` - Your database server
   - `YOUR_DATABASE` - Your database name  
   - `YOUR_USERNAME` - Database username
   - `YOUR_PASSWORD` - Database password (NEW password after rotation)
   - `YOUR_CLIENT_ID` - Azure AD client ID
   - `YOUR_API_ID` - Azure AD API ID
   - `YOUR_TENANT_ID` - Azure AD tenant ID
   - `YOUR_RESOURCE_URL` - Resource URL

3. **Never commit actual configuration files** - they are in .gitignore

## Recommended Security Practices

- Use Azure Key Vault for production secrets
- Use environment variables for development
- Implement Azure Managed Identity where possible
- Regular secret rotation
- Never commit secrets to version control

## Emergency Contacts

If you suspect further security breaches, contact your security team immediately.
