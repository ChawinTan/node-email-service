## Simple nodejs service to send email

A simple application to send outbound emails from an smtp server.

```
    host: 'smtp.gmail.com', // smtp server host
    port: 465, // port
    secure: true, 
    auth: {
       user: 'xxx@gmail.com',
       pass: 'pass'
    }
```

Remember to let google allow for less secure app before running this demo. https://support.google.com/a/answer/6260879?hl=en

### Instructions

1) `cd` into the root folder
2) run `node index.js`