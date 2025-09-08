# Day 08: OCI Tenancy Setup Best Practices

This lesson covers the recommended best practices for securely setting up a new OCI Tenancy (account) for long-term use.

### Core Principle: The Principle of Least Privilege
The default `Tenancy Administrator` has maximum privileges. For enhanced security, this account should not be used for daily tasks. Instead, administrative duties should be delegated.

### Three Key Best Practices

1.  **Delegate Administration:**
    -   **DON'T:** Use the `Tenancy Administrator` user for day-to-day operations.
    -   **DO:** Create a new IAM group (e.g., `OCI-Admins`) and add your daily-use administrator accounts to this group. This group will act as a proxy for the main admin.

2.  **Isolate Resources with Compartments:**
    -   **DON'T:** Place all your resources in the default `Root Compartment`.
    -   **DO:** Create a structured hierarchy of compartments to isolate and organize resources. This can be based on environment (Prod, Dev, Test), department (Finance, HR), or projects.

3.  **Enforce Multi-Factor Authentication (MFA):**
    -   **DO:** Enable and enforce MFA for all users.
    -   MFA provides an additional layer of security by requiring more than one factor to verify a user's identity, typically:
        -   Something you know (password).
        -   Something you have (a physical device like a phone).

### Essential Policies for the Admin Group
To make the `OCI-Admins` group effective, the `Tenancy Administrator` must grant it the necessary permissions by creating policies.

A typical setup requires two types of policies:

1.  **A policy to manage all resources:** This gives the group broad permissions over the tenancy's resources.
    ```
    Allow group OCI-Admins to manage all-resources in tenancy
    ```
2.  **Policies to manage the IAM service itself:** The IAM service does not have a single aggregate resource type, so individual policies are needed for its components.
    ```
    Allow group OCI-Admins to manage users in tenancy
    Allow group OCI-Admins to manage groups in tenancy
    Allow group OCI-Admins to manage policies in tenancy
    Allow group OCI-Admins to manage compartments in tenancy
    # ... and other IAM components like domains, tags, etc.
    ```
