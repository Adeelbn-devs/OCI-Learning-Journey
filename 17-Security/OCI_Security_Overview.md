# Day 17: OCI Security Overview

This lesson introduces the foundational principles of security in OCI, including the Shared Security Model and the "Defense in Depth" strategy.

### The Shared Security Model
Security in the cloud is a partnership between the cloud provider and the customer.

| Responsibility Area | Oracle's Responsibility (Security **OF** the Cloud) | Customer's Responsibility (Security **IN** the Cloud) |
| :--- | :--- | :--- |
| **Physical** | Data Center facilities, Physical servers, Physical network | - |
| **Infrastructure** | Virtualization Layer (Hypervisor) | OS Patching, Network Configuration (VCN, Security Lists, etc.), Workload Security |
| **Data & Access** | - | Data Encryption, Identity & Access Management (IAM), Securing Application Code, Endpoint Security |

### Defense in Depth: The 5 Layers of OCI Security
OCI provides a comprehensive portfolio of security services organized into layers, based on use cases.

#### 1. Infrastructure Protection
Services that protect the VCN and applications from external threats.
-   **Web Application Firewall (WAF):** A cloud-based service that protects web applications from malicious traffic like SQL injection, cross-site scripting, and Layer 7 DDoS attacks.
-   **Network Firewall:** A managed firewall service that monitors network traffic and provides intrusion detection and prevention.

#### 2. Identity and Access Management (IAM)
Services that control who has access to what.
-   **IAM Service:** Manages users, groups, policies, and compartments.
-   **Multi-Factor Authentication (MFA):** Adds an extra layer of verification for user logins.

#### 3. OS & Workload Protection
Services that secure the compute instances.
-   **Shielded Instances:** VMs with enhanced security features like Secure Boot, which ensures only trusted software is loaded during startup.
-   **OS Management:** A service to automate patching and updates for OS environments at scale.

#### 4. Data Protection
Services that secure customer data.
-   **Vault:** A managed service for centrally storing and managing encryption keys and secrets (like passwords and API keys).
-   **Certificates:** A service to create and manage TLS certificates.

#### 5. Detection & Remediation (Cloud Security Posture Management - CSPM)
Services that continuously monitor the cloud environment and help fix security issues.
-   **Cloud Guard:** Automatically detects misconfigured resources, and suspicious user activity, and can be configured to auto-remediate problems.
-   **Security Zones:** A special type of compartment with a strict, pre-defined set of security policies. Any action that would violate a policy (e.g., creating a public bucket) is blocked by default.
