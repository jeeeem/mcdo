# Internal Content Tracker

### Environment Variables

```
DB_HOST
DB_DATABASE
DB_USER
DB_PASS
DB_PORT
```

### Packages Used
- Dependencies
  - sequelize
  - express
  - bcrypt
  - jsonwebtoken
  - dotenv
  - express-handlebars
- DevDependencies
  - node-sass
  - nodemon

### Features
- User Management
- Messages Tracker 
  - Pending/Scheduled Messages
  - Sent Messages

### Database Schema

#### User 
- Name of sender
- Recipient

#### Message Content
- Title
- Message
- Datetime (for when it is scheduled to send)
