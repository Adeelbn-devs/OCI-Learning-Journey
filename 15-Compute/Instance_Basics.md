# Day 15: OCI Instance Basics and Dependencies

An OCI Compute Instance is not a standalone entity. It has critical dependencies on the Networking and Storage services to function.

### Core Instance Dependencies

#### 1. Networking (VCN)
Before launching an instance, a Virtual Cloud Network (VCN) and a Subnet must exist.
-   When an instance is created, a **Virtual Network Interface Card (VNIC)** is created for it.
-   This VNIC is placed within the chosen Subnet.
-   The VNIC is responsible for the instance's network connectivity and is where the **private IP address** is assigned from the subnet's CIDR block.

#### 2. Storage (Block Volume Service)
OCI instances are essentially "diskless." The storage for the operating system and data is not on the local physical host but is attached over the network.
-   **Boot Volume:** This is a network-attached Block Volume that contains the bootable image of the instance's Operating System (OS). When you launch an instance, you are booting from this remote volume.
-   **Block Volume:** These are additional network-attached volumes used for persistent data storage, like data disks or file systems.

This decoupling of compute from storage provides flexibility and enables high-availability features.

### High Availability Feature: Live Migration
Live Migration is a key feature that leverages the decoupled architecture of OCI instances.
-   **Purpose:** To protect VMs from downtime due to underlying physical host maintenance or unexpected hardware failures.
-   **Process:** OCI can move an entire running VM—including its memory, state, and network connections—from one physical host to another.
-   **Benefit:** The migration is transparent to the user and the application. The VM is **not rebooted**, and applications continue to run without interruption, ensuring high availability.
