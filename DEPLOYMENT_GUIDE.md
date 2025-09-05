# Deploying Medusa v2 to Render - Complete Guide

## Prerequisites

- A Render account (sign up at [render.com](https://render.com))
- Your Medusa v2 project pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- Basic understanding of environment variables

## Deployment Methods

### Method 1: Automatic Deployment with render.yaml (Recommended)

This method uses the included `render.yaml` file for automatic setup.

#### Step 1: Prepare Your Repository
1. Ensure your code is pushed to a Git repository
2. Make sure the `render.yaml` file is in your project root
3. Verify your `Dockerfile` is properly configured

#### Step 2: Connect to Render
1. Log in to your Render dashboard
2. Click "New" → "Blueprint"
3. Connect your Git repository
4. Select the repository containing your Medusa project
5. Choose the branch you want to deploy (usually `main` or `master`)

#### Step 3: Configure Blueprint
1. Render will automatically detect the `render.yaml` file
2. Review the services that will be created:
   - Web service: `bellustore-backend`
   - PostgreSQL database: `bellustore-db`
3. Click "Apply" to create the services

#### Step 4: Monitor Deployment
1. Render will start building your Docker image
2. The database will be created automatically
3. Your application will deploy and run migrations
4. Check the logs for any errors

### Method 2: Manual Setup

If you prefer manual configuration:

#### Step 1: Create Database
1. In Render dashboard, click "New" → "PostgreSQL"
2. Configure:
   - Name: `bellustore-db`
   - Database: `bellustore`
   - User: `bellustore`
   - Region: Choose your preferred region
   - Plan: Start with Free tier
3. Click "Create Database"

#### Step 2: Create Web Service
1. Click "New" → "Web Service"
2. Connect your Git repository
3. Configure:
   - Name: `bellustore-backend`
   - Runtime: Docker
   - Build Command: (leave empty, handled by Dockerfile)
   - Start Command: (leave empty, handled by Dockerfile)
   - Plan: Start with Free tier

#### Step 3: Set Environment Variables
1. In your web service dashboard, go to "Environment"
2. Add the following variables:
   ```
   NODE_ENV=production
   PORT=8080
   DATABASE_URL=[Copy from your database dashboard]
   ```
3. Add any additional variables from `RENDER_ENV_VARS.md`

## Post-Deployment Steps

### 1. Verify Deployment
1. Check your service URL (provided in the dashboard)
2. Verify the health endpoint: `https://your-app.onrender.com/health`
3. Check logs for any errors

### 2. Create Admin User (if needed)
1. Access your service shell in Render dashboard
2. Run: `npx medusa user:create`
3. Follow the prompts to create an admin user

### 3. Test Your API
Test some basic endpoints:
- `GET /store/products` - List products
- `GET /admin/auth/me` - Admin authentication
- `GET /health` - Health check

## Custom Domain Setup

1. In your web service dashboard, go to "Settings"
2. Scroll to "Custom Domains"
3. Click "Add Custom Domain"
4. Enter your domain name
5. Configure DNS records as instructed by Render

## SSL Certificate

Render automatically provides SSL certificates for:
- Your `.onrender.com` subdomain
- Custom domains (after DNS verification)

## Monitoring and Logs

### Application Logs
1. Go to your web service dashboard
2. Click "Logs" to view real-time logs
3. Use filters to search for specific log levels

### Database Monitoring
1. Go to your database dashboard
2. Monitor metrics: CPU, Memory, Connections
3. Set up alerts for resource usage

### Health Checks
Render automatically monitors your service health:
- Health check path: `/health`
- Automatic restarts on failures
- Email notifications for downtime

## Scaling and Performance

### Vertical Scaling
1. Upgrade your service plan for more resources
2. Available plans: Free, Starter, Standard, Pro
3. Each plan offers different CPU, RAM, and bandwidth

### Horizontal Scaling
1. Enable auto-scaling in service settings
2. Set minimum and maximum instance counts
3. Configure scaling triggers (CPU, memory usage)

## Troubleshooting

### Common Issues

#### Build Failures
- Check Dockerfile syntax
- Verify all dependencies are listed in package.json
- Check build logs for specific errors

#### Database Connection Issues
- Verify DATABASE_URL is correctly set
- Check database service status
- Ensure database and web service are in the same region

#### Migration Failures
- Check database permissions
- Verify migration files are correct
- Run migrations manually via shell if needed

#### Performance Issues
- Monitor resource usage
- Check for memory leaks
- Consider upgrading service plan
- Optimize database queries

### Getting Help

1. **Render Documentation**: [render.com/docs](https://render.com/docs)
2. **Medusa Documentation**: [docs.medusajs.com](https://docs.medusajs.com)
3. **Render Support**: Available through dashboard
4. **Community Forums**: Render and Medusa community forums

## Cost Optimization

### Free Tier Limitations
- Services sleep after 15 minutes of inactivity
- 750 hours per month (shared across all services)
- Limited bandwidth and storage

### Optimization Tips
1. Use starter plans for production workloads
2. Monitor resource usage regularly
3. Implement caching to reduce database load
4. Optimize Docker image size
5. Use CDN for static assets

## Security Best Practices

1. **Environment Variables**: Never commit secrets to your repository
2. **Database Access**: Use strong passwords and limit access
3. **HTTPS**: Always use HTTPS in production
4. **Regular Updates**: Keep dependencies updated
5. **Monitoring**: Set up alerts for suspicious activity

## Backup Strategy

1. **Database Backups**: Render provides automatic backups
2. **Code Backups**: Use Git for version control
3. **Environment Config**: Document all environment variables
4. **Regular Testing**: Test backup restoration procedures

Congratulations! Your Medusa v2 application should now be successfully deployed on Render. 🎉