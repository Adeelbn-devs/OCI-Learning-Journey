# Day 9: Introduction to OCI Networking - The VCN

The Virtual Cloud Network (VCN) is the foundational networking component of OCI. It is a private, software-defined network that you set up in an OCI region.

### Core VCN Components

1.  **CIDR Block:** A VCN is defined by an IPv4 CIDR block (e.g., `10.0.0.0/16`). This address range is used for all resources within the VCN.
2.  **Subnets:** The VCN's CIDR block is divided into smaller networks called subnets. All compute instances and other resources are deployed into subnets.
    -   **Public Subnet:** A subnet where instances can have public IP addresses and can be reached from the internet.
    -   **Private Subnet:** A subnet where instances only have private IP addresses and cannot be reached directly from the internet.

### VCN Gateways (Connectivity Routers)

Gateways provide paths for traffic to flow into and out of the VCN.

1.  **Internet Gateway (IGW):**
    -   **Purpose:** Provides a path for two-way (bidirectional) communication between the VCN and the internet.
    -   **Use Case:** Attached to a VCN to allow public subnets to access the internet. Essential for public-facing web servers.

2.  **NAT (Network Address Translation) Gateway:**
    -   **Purpose:** Allows resources in a private subnet to initiate outbound connections to the internet, but blocks inbound connections initiated from the internet.
    -   **Use Case:** Allows a database in a private subnet to download software patches and updates without exposing the database itself to the internet.

3.  **Service Gateway:**
    -   **Purpose:** Provides a private connection to supported public OCI services (like Object Storage, Autonomous Database) without the traffic having to traverse the public internet.
    -   **Use Case:** A secure way for resources in a private subnet to back up data to Object Storage.

4.  **Dynamic Routing Gateway (DRG):**
    -   **Purpose:** Acts as a virtual router to provide a private path for traffic between a VCN and networks outside the OCI region, such as an on-premises data center.
    -   **Use Case:** Used in hybrid cloud scenarios to connect your corporate network to your VCN via VPN or FastConnect.
