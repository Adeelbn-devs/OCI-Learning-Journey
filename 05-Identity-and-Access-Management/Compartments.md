# Day 5: OCI Compartments

Compartments are a fundamental component of OCI, acting as a primary method for organizing, isolating, and controlling access to cloud resources.

### What is a Compartment?
A compartment is a logical container for your OCI resources. Think of it like a folder on your computer or a secure floor in an office building dedicated to a specific department.

- **Root Compartment:** When an OCI account (Tenancy) is created, a default top-level compartment called the **Root Compartment** is created with it. It holds all cloud resources.
- **Best Practice:** Avoid placing all your resources directly in the Root Compartment. Instead, create dedicated compartments to maintain better organization and security.

### Key Characteristics of Compartments

- **Isolation & Access Control:** This is the primary purpose of compartments. **Policies** are written to grant groups access to resources within specific compartments.
- **Single Membership:** A resource can belong to **exactly one** compartment at a time.
- **Cross-Compartment Interaction:** Resources in different compartments **can** interact with each other (e.g., a compute instance in `Comp-A` can use a Virtual Cloud Network in `Comp-B`), provided the IAM policies allow it.
- **Global Scope:** Compartments are a global resource, meaning they are not tied to a specific region. A compartment you create is visible in all regions you have access to.
- **Nesting:** Compartments can be nested to create a hierarchy, up to **six levels deep**. This allows you to mirror your organization's structure.
- **Moving Resources:** Most resources can be moved from one compartment to another after they have been created.

### Management Features

You can apply specific management controls at the compartment level:

1.  **Quotas:** Set limits on the number of resources that can be created in a compartment (e.g., "Allow a maximum of 10 VMs in the 'Dev-Compartment'").
2.  **Budgets:** Set spending limits on a compartment. You can create alerts to get notified when the cost of resources within a compartment exceeds a certain threshold (e.g., "Notify me when 'Project-X-Compartment' spending exceeds $500").
