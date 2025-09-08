# Day 5: Demo - Creating Compartments and Identity Domains

This lesson was a practical walkthrough of how to create Compartments and Identity Domains within the OCI Console.

### Creating a Compartment
A compartment acts as a logical container for organizing and isolating cloud resources.

**Steps:**
1.  Navigate to the main menu: **Identity & Security -> Compartments**.
2.  Click the **Create Compartment** button.
3.  Provide a **Name** (e.g., `sandbox`) and a **Description**.
4.  Choose the **Parent Compartment** where the new compartment will reside (e.g., the Root compartment).
5.  Click **Create Compartment**.

The **Tenancy Explorer** can be used to view the resources contained within any compartment. A newly created compartment will be empty.

### Creating an Identity Domain
An Identity Domain acts as a container for users, groups, and their associated security configurations.

**Steps:**
1.  Navigate to the main menu: **Identity & Security -> Domains**.
2.  Click the **Create domain** button.
3.  Provide a **Display Name** (e.g., `sandbox-domain`) and a **Description**.
4.  Choose the **Domain Type** (e.g., Free).
5.  Assign the domain to a compartment (e.g., the Root compartment).
6.  Click **Create domain**.

### Key Use Case: Environment Isolation
The demo highlights a common best practice: creating separate compartments and identity domains for different environments.
- A `sandbox` compartment can hold all testing and development resources.
- A `sandbox-domain` can hold all temporary or test users and groups.
This keeps the test environment's resources and users completely separate from the production environment, which would use its own compartments and the `Default` identity domain.
