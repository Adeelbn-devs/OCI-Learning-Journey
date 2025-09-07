# Day 2: OCI Physical Architecture

This lesson covers the most fundamental concepts of OCI's global infrastructure, designed for high availability.

### The Hierarchy of Resilience
The structure is designed to prevent failures at every level:
- **Region:** A large geographical area (e.g., a city like Mumbai).
- **Availability Domain (AD):** Independent data centers within a Region. Each has its own power, cooling, and network. A failure in one AD does not affect others.
- **Fault Domain (FD):** A grouping of hardware (like a server rack) within an AD. Each has its own power and switches. A failure in one FD does not affect other FDs in the same AD.

**Analogy:** City (Region) > Power Stations (ADs) > Server Racks (FDs)

### Main Goal
The primary goal of this architecture is to achieve **High Availability** and eliminate any **Single Point of Failure**.
