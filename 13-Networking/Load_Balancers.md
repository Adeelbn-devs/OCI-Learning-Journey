# Day 13: OCI Load Balancers

A load balancer acts as a reverse proxy to distribute network traffic across multiple backend servers, ensuring no single server becomes overwhelmed.

### Primary Benefits of a Load Balancer

1.  **High Availability:** If one backend server fails, the load balancer automatically redirects traffic to the remaining healthy servers, preventing application downtime.
2.  **Scalability:** As traffic to your application grows, you can easily add more backend servers. The load balancer will automatically begin distributing traffic to them, allowing your application to scale horizontally.

---
### Types of Load Balancers in OCI

OCI offers two main types of load balancers, operating at different layers of the OSI model.

#### 1. Load Balancer (Layer 7)
This is an HTTP/HTTPS load balancer that operates at the Application Layer (Layer 7). It is "content-aware," meaning it can inspect the content of the traffic (like HTTP headers, URLs, cookies) to make intelligent routing decisions.

-   **Protocols:** HTTP, HTTPS.
-   **Key Features:**
    -   **Public or Private:** Can have a public IP to accept traffic from the internet or a private IP for internal traffic.
    -   **Flexible Shapes:** Supports flexible bandwidth shapes where you can define a minimum and maximum range (e.g., 10 Mbps to 8 Gbps).
    -   **Content-Based Routing:** Can route requests to different backend sets based on the URL path.
    -   **SSL Termination:** Can handle SSL encryption/decryption, offloading this CPU-intensive task from backend servers.
-   **Best For:** Web applications that require advanced, intelligent traffic management.

#### 2. Network Load Balancer (NLB - Layer 4)
This is a high-performance load balancer that operates at the Transport Layer (Layer 4). It is not content-aware and makes routing decisions based on source/destination IP address and port.

-   **Protocols:** TCP, UDP, ICMP.
-   **Key Features:**
    -   **Public or Private:** Can be deployed as either public or private.
    -   **Extreme Performance:** Designed for high throughput and extremely low latency.
    -   **High Availability:** Highly available by design.
-   **Best For:** Performance-critical applications that require high speed and low latency, such as online gaming, streaming, or high-traffic database applications.
