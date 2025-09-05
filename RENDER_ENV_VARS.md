# Environment Variables for Render Deployment

## Required Environment Variables

When deploying your Medusa v2 project to Render, you'll need to configure the following environment variables:

### Automatic Variables (Set by render.yaml)
- `NODE_ENV`: Set to `production`
- `PORT`: Set to `8080`
- `DATABASE_URL`: Automatically populated from the PostgreSQL database service

### Additional Variables You May Need

Depending on your Medusa configuration, you might need to add these variables manually in the Render dashboard:

#### JWT and Security
```
JWT_SECRET=your-super-secret-jwt-key-here
COOKIE_SECRET=your-cookie-secret-here
```

#### Redis (if using caching)
```
REDIS_URL=redis://your-redis-url
```

#### File Storage (if using S3 or other providers)
```
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=your-aws-region
AWS_S3_BUCKET=your-s3-bucket-name
```

#### Email Service (if using email notifications)
```
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASSWORD=your-smtp-password
```

#### Payment Providers (if using Stripe, PayPal, etc.)
```
STRIPE_API_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
```

## How to Set Environment Variables in Render

1. Go to your service dashboard in Render
2. Click on "Environment" in the left sidebar
3. Add each variable with its corresponding value
4. Click "Save Changes"
5. Your service will automatically redeploy with the new variables

## Security Notes

- Never commit sensitive environment variables to your repository
- Use strong, randomly generated secrets for JWT_SECRET and COOKIE_SECRET
- Rotate your secrets regularly
- Use Render's built-in secret management for sensitive data