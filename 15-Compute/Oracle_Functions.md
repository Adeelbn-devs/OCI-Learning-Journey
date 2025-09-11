# Day 15: Oracle Functions (Serverless / FaaS)

Oracle Functions is a fully managed, multi-tenant, highly scalable, on-demand, Function-as-a-Service (FaaS) platform. It is built on enterprise-grade OCI and powered by the open-source Fn Project engine.

### What is Serverless Computing?
Serverless is a cloud computing model that represents the next step in the evolution of compute abstraction (Bare Metal -> VMs -> Containers -> Functions).
-   In this model, the cloud provider dynamically manages the allocation and provisioning of servers.
-   The developer's focus shifts entirely from managing infrastructure to just writing and deploying code.
-   While it's called "serverless," servers are still used, but they are completely managed by the cloud provider.

### Key Characteristics of Oracle Functions
-   **Event-Driven:** Functions are designed to be short-lived and are executed in response to a trigger or event. Triggers can be:
    -   Direct invocation via the API or SDK.
    -   OCI service events (e.g., a new file uploaded to an Object Storage bucket).
-   **Underlying Technology:** Built on the open-source **Fn Project**. Behind the scenes, the function code is packaged as a Docker container, stored in OCI Container Registry (OCIR), and executed when invoked.
-   **Stateless:** Functions are typically stateless by design, meaning they do not store any data from one execution to the next.

### The Pricing Model: True Consumption-Based
This is a major benefit of serverless functions.
-   You are billed **only** for the resources consumed during the execution of your function.
-   The two metrics are:
    1.  **Execution Duration:** The time your code is running, measured in milliseconds.
    2.  **Memory Allocated:** The amount of memory configured for your function.
-   There is **no charge** for the time your function is idle, waiting to be invoked.
