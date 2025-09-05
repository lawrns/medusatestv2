# PostgreSQL Database Setup for Render

## Automatic Database Creation

The `render.yaml` file is configured to automatically create a PostgreSQL database for your Medusa project with the following specifications:

- **Database Name**: `bellustore`
- **Username**: `bellustore`
- **Plan**: Starter (free tier)
- **PostgreSQL Version**: 15
- **Region**: Oregon

## Database Connection

The database connection is automatically handled through the `DATABASE_URL` environment variable, which Render populates from the database service.

## Database Migration and Setup

Your Dockerfile is already configured to handle database migrations automatically on startup:

```bash
CMD sh -lc "npx medusa db:migrate || npx medusa db:setup; npx medusa start"
```

This command will:
1. Try to run migrations first (`npx medusa db:migrate`)
2. If migrations fail (first deployment), it will set up the database (`npx medusa db:setup`)
3. Start the Medusa server

## Manual Database Operations

If you need to run database operations manually, you can use Render's shell access:

### Access your service shell
1. Go to your service dashboard in Render
2. Click on "Shell" in the left sidebar
3. Run the following commands:

```bash
# Run migrations
npx medusa db:migrate

# Create admin user (if needed)
npx medusa user:create

# Seed data (if you have seed files)
npx medusa db:seed
```

## Database Backup and Restore

### Backup
Render automatically backs up your PostgreSQL database. You can also create manual backups:

1. Go to your database dashboard in Render
2. Click on "Backups" tab
3. Click "Create Backup"

### Restore
1. Go to your database dashboard
2. Click on "Backups" tab
3. Select the backup you want to restore
4. Click "Restore"

## Database Monitoring

Render provides built-in monitoring for your PostgreSQL database:

- **Metrics**: CPU, Memory, Disk usage
- **Logs**: Database query logs and errors
- **Alerts**: Set up alerts for high resource usage

## Scaling Considerations

### Starter Plan Limitations
- 1 GB storage
- 1 GB RAM
- Shared CPU
- 30-day backup retention

### Upgrading
When your application grows, consider upgrading to:
- **Standard Plan**: More storage and dedicated resources
- **Pro Plan**: High availability and advanced features

## Troubleshooting

### Connection Issues
1. Check that `DATABASE_URL` is properly set
2. Verify database service is running
3. Check network connectivity

### Migration Failures
1. Check database logs in Render dashboard
2. Verify your migration files are correct
3. Ensure database has sufficient permissions

### Performance Issues
1. Monitor database metrics
2. Check for slow queries
3. Consider adding database indexes
4. Upgrade to a higher plan if needed