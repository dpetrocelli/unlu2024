#!/bin/bash

# Install Nginx
# apt-get update
# apt-get install -y nginx
# apt-get install -y stress-ng

# Get the instance ID and name
INSTANCE_ID=$(curl -H "Metadata-Flavor: Google" http://metadata.google.internal/computeMetadata/v1/instance/id)
INSTANCE_NAME=$(curl -H "Metadata-Flavor: Google" http://metadata.google.internal/computeMetadata/v1/instance/name)

# Create a custom index.html file
cat <<EOF > /var/www/html/index.html
<!DOCTYPE html>
<html>
<head>
  <title>Instance Information</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      color: #333;
      text-align: center;
      padding: 20px;
    }
    
    h1 {
      color: #4285f4;
    }
    
    p {
      font-size: 18px;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Instance Information</h1>
    <p><strong>Instance ID:</strong> $INSTANCE_ID</p>
    <p><strong>Instance Name:</strong> $INSTANCE_NAME</p>
  </div>
</body>
</html>
EOF

# Restart Nginx
systemctl restart nginx