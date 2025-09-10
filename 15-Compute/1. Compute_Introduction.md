# Day 15: Introduction to OCI Compute

The OCI Compute service provides virtual and physical servers (instances) to meet various application and workload requirements.

### Core Concept: Flexible Shapes
A key differentiator for OCI Compute is the concept of **Flexible Shapes**.
-   Instead of being restricted to predefined "t-shirt sizes" (e.g., Small, Medium, Large), OCI allows you to select a custom number of OCPUs (CPU cores) and a specific amount of memory.
-   This provides a perfect fit for your workload, preventing overprovisioning (wasted cost) or underprovisioning (poor performance).

### Compute Instance Types

1.  **Bare Metal Servers:**
    -   A dedicated, single-tenant physical server.
    -   Offers direct hardware access, providing the highest performance and strongest isolation.
    -   Ideal for performance-intensive workloads or applications with specific licensing requirements.

2.  **Virtual Machines (VMs):**
    -   A multi-tenant, virtualized environment where a single physical host runs VMs from multiple customers.
    -   Each VM is securely isolated.
    -   The most common and cost-effective type of compute instance.

3.  **Dedicated Virtual Machine Host:**
    -   A single-tenant physical server that is dedicated to a single customer.
    -   The customer can then run their own VMs on this dedicated hardware.
    -   This combines the control and isolation of Bare Metal with the flexibility of VMs.

### Processor Choices
OCI provides a variety of processor options to optimize for different workloads:
-   **Intel**
-   **AMD**
-   **ARM (Ampere A1):** Offers significant price-performance advantages for scale-out workloads like web servers, API gateways, and microservices.

### Pricing Models

-   **Pay As You Go (PAYG):** Standard on-demand pricing.
-   **Preemptible VMs:**
    -   Short-lived instances that are priced at a **50% discount** compared to regular on-demand instances.
    -   OCI can reclaim (terminate) these instances with a short notice.
    -   They are ideal for fault-tolerant and interruptible workloads, such as batch processing, rendering, and big data analysis.
