# Day 7: Demo - Authentication & Authorization in Action

This lesson provided a practical, step-by-step demonstration of the entire IAM workflow, from user creation to granting specific permissions.

### Demo Workflow Overview
The demo illustrates the core security principle of "Deny by Default" and shows how policies are used to grant granular access.

### Step 1: Create a Principal (User and Group)
1.  A new user (`ociadmin`) was created within a specific Identity Domain (`Sandbox Domain`).
2.  A new group (`OCI Admin group`) was created.
3.  The `ociadmin` user was added as a member of this new group.

### Step 2: Authentication in Action
1.  The new user receives an activation email.
2.  Upon clicking the activation link, they are prompted to set a new password.
3.  The user then logs into the OCI Console, making sure to select the correct Identity Domain (`Sandbox Domain`) during the login process.
4.  **Result:** The user is successfully authenticated and can see the OCI Console dashboard.

### Step 3: The "Deny by Default" Principle
-   After logging in, the new user attempts to view resources (e.g., Compute instances, Storage buckets).
-   **Result:** They receive an **authorization error** in every service. This demonstrates that a successfully authenticated user has **zero permissions** by default.

### Step 4: Granting Permissions (Writing a Policy)
-   The tenancy administrator navigates to **Identity & Security -> Policies**.
-   Using the **Policy Builder**, they create a new policy with a specific statement.
-   **Example Policy Statement:** `Allow group 'Sandbox-Domain/OCI-Admin-group' to manage object-storage in compartment 'sandbox'`

### Step 5: Verifying Authorization
-   The new user refreshes the console.
-   They still cannot access services not mentioned in the policy (e.g., Compute).
-   When they navigate to Object Storage and select the `sandbox` compartment, they can now successfully create and manage buckets.
-   If they switch to another compartment (e.g., `root`), they are denied access, proving the policy is correctly scoped.
