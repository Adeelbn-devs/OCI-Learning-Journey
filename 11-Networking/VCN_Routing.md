# Day 11: VCN Routing and Peering

This lesson covers how OCI directs traffic from a VCN to destinations outside the VCN using Route Tables and how to connect multiple VCNs using Peering.

### What is a Route Table?
A Route Table is a set of **Route Rules** that are used to determine where network traffic is directed. Each subnet in a VCN is associated with a single route table, which acts as a virtual router for that subnet.

- **Route Rule:** A rule consists of two main components:
    1.  **Destination CIDR Block:** The IP address range that the rule applies to.
    2.  **Route Target:** The gateway or "next hop" for traffic matching the destination CIDR.
- **Local VCN Routing:** Traffic between subnets within the same VCN is managed by the VCN's built-in routing logic and does not require any route rules.
- **Route Precedence:** When multiple route rules could apply to a packet's destination, OCI uses the **most specific rule** (the one with the longest prefix match). For example, a rule for `10.0.0.0/16` will take precedence over a rule for `0.0.0.0/0`.

### Connecting VCNs (Peering)
Peering is the process of connecting two VCNs to enable private communication between their resources.

1.  **Local VCN Peering:**
    -   **Purpose:** To connect two VCNs in the **same region**.
    -   **Component:** Uses a **Local Peering Gateway (LPG)** on each VCN.
    -   The CIDR blocks of the two VCNs must not overlap.

2.  **Remote VCN Peering:**
    -   **Purpose:** To connect two VCNs in **different regions**.
    -   **Component:** Uses a **Dynamic Routing Gateway (DRG)** on each VCN.
    -   The CIDR blocks must not overlap.

### Scalable Networking with DRG as a Hub
-   **Problem:** Point-to-point peering (using LPGs) becomes complex and hard to manage when you have many VCNs (a "mesh" topology).
-   **Solution:** The modern Dynamic Routing Gateway (DRG v2) can function as a central **transit routing hub**.
    -   Multiple VCNs (up to 300) can attach to a single DRG.
    -   The DRG manages routing between all attached VCNs, creating a simpler and more scalable "hub-and-spoke" topology.
