# Day 5: Introduction to OCI IAM (Identity and Access Management)

IAM is the core security service in OCI that controls who can access your cloud resources and what actions they can perform.

---
## The Two Pillars of IAM

The entire IAM service is built on two fundamental concepts:

1.  **Authentication (AuthN):**
    -   **Question:** "Who are you?"
    -   **Purpose:** To verify the identity of a user or service (a **principal**).
    -   **Method:** Typically done via username/password, API keys, etc.

2.  **Authorization (AuthZ):**
    -   **Question:** "What are you allowed to do?"
    -   **Purpose:** To determine the permissions a principal has after they have been authenticated.
    -   **Method:** Implemented through **Policies**.

---
## Core IAM Concepts

-   **Principals:** An IAM entity that is allowed to interact with OCI resources. The main types are **Users** and **Instance Principals** (letting servers make API calls).
-   **Groups:** A collection of users. It's easier to grant permissions to a group than to individual users.
-   **Compartments:** A logical container to organize and isolate your cloud resources (like folders).
-   **Policies:** The rules that connect a **Group** with permissions to access resources in a specific **Compartment**.
    -   **Policy Syntax (Human Readable):** `Allow group <group_name> to <verb> <resource-type> in compartment <compartment_name>`
-   **Identity Domains:** A container for managing users and groups.

---
## OCID (Oracle Cloud ID)

-   An OCID is a unique, Oracle-assigned identifier for every resource in OCI.
-   It acts as a permanent name for a resource.
-   **Syntax:** `ocid1.<resource-type>.<realm>.<region>.<unique-id>`
    -   `ocid1`: OCID version marker.
    -   `resource-type`: The type of resource (e.g., `instance`, `volume`).
    -   `realm`: A set of regions (e.g., commercial realm `oc1`).
    -   `region`: The region where the resource is located (e.g., `ap-mumbai-1`).
    -   `unique-id`: A unique portion for the resource.
