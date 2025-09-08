# Day 6: Authentication and Authorization in OCI

This lesson provides a deeper look into the mechanics of Authentication (AuthN) and Authorization (AuthZ) in OCI.

### What is a Principal?
A principal is an IAM entity that is allowed to interact with OCI resources.
- **User Principals:** Human users who access OCI via the Console, CLI, or SDK.
- **Instance Principals:** OCI instances (servers) that are authorized to make API calls to other OCI services.
- **Groups:** A collection of users. Permissions are granted to groups, not individual users, which simplifies access management.

### Authentication (AuthN) Methods
Authentication is the process of verifying a principal's identity. OCI uses three primary methods:
1.  **Username and Password:** Standard credentials used for logging into the OCI Console.
2.  **API Signing Keys:** An RSA public/private key pair used to authenticate API calls made via the SDK or CLI. This is the primary method for programmatic access.
3.  **Authentication Tokens (Auth Tokens):** Oracle-generated token strings used to authenticate with third-party APIs that do not support OCI's native signature-based authentication.

### Authorization (AuthZ) with IAM Policies
Authorization determines what an authenticated principal is allowed to do. This is managed through IAM Policies.

**Core Principle: Deny by Default**
- By default, all permissions are denied. Access must be explicitly granted via a policy. There is no `deny` statement.

**Policy Syntax**
Policies are human-readable statements that follow a consistent syntax:
`Allow group <group_name> to <verb> <resource-type> in <location> [where <conditions>]`

- **`group <group_name>`:** The group of users to whom the policy applies. Policies cannot be written for individual users.
- **`<verb>`:** The level of access granted. There are four verbs, in increasing order of permission:
    - `inspect`: List resources without seeing any confidential information.
    - `read`: `inspect` + get user-specified metadata and the actual resource.
    - `use`: `read` + work with existing resources (e.g., start/stop an instance). Cannot create or delete.
    - `manage`: All permissions for the resource, including create and delete.
- **`<resource-type>`:** The type of resource the policy applies to (e.g., `all-resources`, `database-family`, `instances`).
- **`<location>`:** The scope of the policy, which can be a `compartment` or the entire `tenancy`.
