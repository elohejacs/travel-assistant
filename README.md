## Deployment
- **Web Servers**:  
  1. `3.86.166.160` (web-01)  
  2. `54.174.13.108` (web-02)  
- **Load Balancer**: `3.92.205.154` (lb-01)  

### Steps to Deploy
1. Transfer code to web servers using `scp`.  
2. Install dependencies and start the Node.js server with PM2.  
3. Configure NGINX on the load balancer to proxy traffic to the web servers.  