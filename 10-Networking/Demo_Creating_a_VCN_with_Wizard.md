# Day 10: Demo - Creating a VCN with the Wizard

This lesson demonstrates the simplest and fastest way to create a fully functional Virtual Cloud Network (VCN) using the VCN Wizard in the OCI Console.

### What is the VCN Wizard?
The VCN Wizard is a guided, template-based tool that simplifies VCN creation. It automates the setup of the VCN itself along with its related components like subnets, gateways, route tables, and security lists, based on common networking patterns.

### Step-by-Step Process

1.  **Navigation:** In the OCI Console, go to **Networking -> Virtual Cloud Networks**.
2.  **Start Wizard:** Click the **"Start VCN Wizard"** button.
3.  **Select Template:** Choose the desired template. The demo uses **"VCN with Internet Connectivity,"** which is suitable for applications that need both public-facing and private internal tiers.
4.  **Configuration:**
    -   Provide a **VCN Name**.
    -   Select the **Compartment** where the VCN will be created.
    -   Review and accept the pre-filled CIDR blocks for the VCN and its public/private subnets. These can be customized if needed.
5.  **Review and Create:** The wizard displays a summary of all the components it will create. Clicking **Create** provisions the entire network topology.

### Verifying the VCN with Network Visualizer
After creation, the **Network Visualizer** can be used to see a graphical representation of the new VCN.
-   It provides a clear topology diagram showing the VCN, its subnets, and all the gateways (IGW, NAT, Service Gateway).
-   It also has a "VCN Routing Map" view that visually shows how subnets are routed to their respective gateways, which is excellent for verifying connectivity.
