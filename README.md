# Internal Content Tracker
Guide:
> https://www.rialtomarketing.com/push-messages-101-everything-you-need-to-know-about-using-push-messages-to-grow-your-small-business/ 

### Environment Variables

```
DB_HOST
DB_DATABASE
DB_USER
DB_PASS
DB_PORT
JWT_SECRET
```

### File Directory Structure

```
.
├── public
└── src
    ├── database
    ├── middleware
    └── models
    ├── routers
    ├── sass
    └── templates
        └── layouts
        └── partials
        └── views
```

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

### Questions
1. Maximum character for push messages/notifications?
  - 4 lines or 178 **characters**
