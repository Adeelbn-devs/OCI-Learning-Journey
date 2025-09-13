# Day 16: OCI Object Storage Deep Dive

This lesson explores the core concepts, storage tiers, and advanced features of the OCI Object Storage service.

### Core Object Storage Concepts
-   **Object:** Any type of data (a file) is stored as an object. It consists of the object data itself and metadata about the object.
-   **Bucket:** A logical container for storing objects. Bucket names must be unique within a tenancy's namespace.
-   **Namespace:** A logical entity that spans a region and serves as a top-level container for all buckets and objects. Each tenancy is provided one unique, unchangeable namespace.
-   **Flat Hierarchy:** Object Storage has a flat structure. There are no actual directories or folders. A folder hierarchy is simulated by using prefixes in object names (e.g., `logs/2025/september/log1.txt`).

### Object Storage Tiers
OCI offers different storage tiers to optimize for cost and performance based on data access patterns.

1.  **Standard (Hot) Tier:**
    -   **Use Case:** For frequently accessed ("hot") data that requires fast, immediate, and frequent access.
    -   **Retrieval:** Instantaneous.
    -   **Cost:** Highest storage cost.

2.  **Infrequent Access (Cool) Tier:**
    -   **Use Case:** For long-lived data that is accessed infrequently but must be available immediately when needed (e.g., backups).
    -   **Retrieval:** Instantaneous, but incurs a per-GB retrieval fee.
    -   **Cost:** Lower storage cost than Standard.
    -   **Minimum Duration:** Data must be stored for at least 31 days.

3.  **Archive (Cold) Tier:**
    -   **Use Case:** For long-term data that is rarely accessed, such as archives and compliance records.
    -   **Retrieval:** Not instantaneous. Objects must first be "restored," which takes time (minimum 1 hour). After restoration, the object can be downloaded.
    -   **Cost:** The lowest storage cost.
    -   **Minimum Duration:** Data must be stored for at least 90 days.

### Cost Optimization & Management Features

1.  **Auto-Tiering:**
    -   A feature that automatically monitors data access patterns.
    -   It transitions objects that are not accessed for a certain period from the Standard tier to the Infrequent Access tier to reduce costs.
    -   If the data becomes "hot" again (frequently accessed), it is moved back to the Standard tier.
    -   This process does not incur any data retrieval fees.

2.  **Lifecycle Management:**
    -   Allows you to automate the management of your objects' lifecycle.
    -   You can create policies (rules) to automatically:
        -   Transition objects from one tier to another (e.g., move from Standard to Archive after 60 days).
        -   Delete objects after a specified period.

3.  **Versioning:**
    -   When enabled on a bucket, it automatically creates a new version of an object every time it is overwritten or deleted. This protects against accidental data loss.
