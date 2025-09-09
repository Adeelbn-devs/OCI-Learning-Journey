# Day 12: VCN Security - Security Lists vs. Network Security Groups

OCI provides two mechanisms to act as virtual firewalls for your resources, controlling inbound (ingress) and outbound (egress) traffic.

### 1. Security Lists (SLs)

A Security List is the original firewall service for a VCN. It provides a set of security rules that apply uniformly to all resources within a subnet.

-   **Scope:** Associated with a **Subnet**. The rules apply to all VNICs (Virtual Network Interface Cards) in that subnet.
-   **Rules:** Consist of ingress and egress rules. The source or destination in these rules is always a **CIDR block**.
-   **State:** Rules are **stateful** by default. If you define an ingress rule for specific traffic, the corresponding egress traffic is automatically allowed. Stateless rules can also be created, where you must explicitly define both ingress and egress rules.

### 2. Network Security Groups (NSGs)

An NSG is a more modern and flexible firewall service that provides granular control over traffic.

-   **Scope:** Associated with a specific **VNIC**. You can add a VNIC (from a compute instance) to one or more NSGs.
-   **Granularity:** NSGs allow you to define different security postures for different resources, even if they are in the **same subnet**.
-   **Rules:** The key difference is that NSG rules can use **other NSGs** as the source or destination, in addition to CIDR blocks. This allows for an application-centric security model (e.g., allow traffic from the `App-Tier-NSG` to the `Database-Tier-NSG`).

### Key Differences: SL vs. NSG

| Feature | Security List (SL) | Network Security Group (NSG) |
| :--- | :--- | :--- |
| **Scope** | Applies to the entire **Subnet** | Applies to individual **VNICs** |
| **Granularity**| Coarse-grained (all or none in a subnet) | Fine-grained (per resource) |
| **Rule Source/Dest** | CIDR blocks only | CIDR blocks **OR** other NSGs |
