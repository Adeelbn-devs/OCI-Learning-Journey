# Day 14: Demo - Creating an OCI Load Balancer

This lesson provides a hands-on demonstration of how to provision and configure a complete, highly-available web service using an OCI Load Balancer.

### Demo Goal & Topology
The goal is to create a public-facing load balancer that distributes traffic across two backend web servers.
- **VCN:** Contains one public and one private subnet.
- **Load Balancer:** A public Layer 7 Load Balancer, placed in the public subnet.
- **Backend Servers:** Two compute instances (web servers), placed in the private subnet for security.

### Step 1: Network Preparation
1.  A VCN with public and private subnets is created using the **VCN Wizard**.
2.  The **Security List** for the public subnet is modified to add an ingress rule allowing traffic from any source (`0.0.0.0/0`) on destination **port 80** (HTTP). This allows the load balancer to receive web traffic.

### Step 2: Creating Backend Servers
1.  Two compute instances (`web-server-1`, `web-server-2`) are created.
2.  Crucially, they are placed in the **private subnet**, so they are not assigned public IP addresses.
3.  A **startup script (cloud-init)** is used to automatically install an Apache web server on each instance and create a unique `index.html` file to identify the server.

### Step 3: Creating and Configuring the Load Balancer
1.  Navigate to **Networking -> Load Balancer** and click **Create Load Balancer**.
2.  Choose the **Layer 7 Load Balancer**.
3.  **Details:**
    -   **Visibility:** Public.
    -   **Networking:** The Load Balancer is placed in the **Public Subnet** of the VCN.
4.  **Backend Set Configuration:**
    -   The two previously created web server instances are added to the backend set.
    -   A **Health Check** is configured to monitor the health of the backends. The demo uses an HTTP health check on port 80.
5.  **Listener Configuration:**
    -   A **Listener** is configured to listen for incoming **HTTP** traffic on **port 80**.

### Step 4: Testing the Setup
-   Once the Load Balancer is active and the backend health status is "OK" (green), its public IP address is copied.
-   Pasting the IP address into a web browser shows the homepage from one of the web servers.
-   Refreshing the browser multiple times demonstrates the **round-robin** load balancing policy, as the content switches between "web server 1" and "web server 2".
