# Day 4: Skill Check & Practice Questions (OCI Introduction)

Documenting the questions from the 'Skill Check: OCI Introduction' quiz to reinforce my learning and prepare for the exam.

---

### Question 1
**Q: Which statement about regions and availability domains is true?**
- All OCI regions have three availability domains.
- Fault domains provide protection against failures across regions.
- **✅ An OCI region has one or more availability domains.**
- All OCI regions have a single availability domain.

**My Explanation:** This is true because some OCI regions have only one Availability Domain (AD), while others have three. Therefore, the general rule is "one or more".

---

### Question 2
**Q: Which Oracle Cloud Infrastructure service is NOT intended for a multicloud solution?**
- Oracle MySQL Heatwave on AWS
- Oracle Database Service for Azure
- Oracle Interconnect for Azure
- **✅ Oracle Roving Edge Infrastructure**

**My Explanation:** Roving Edge is designed for edge computing in rugged or disconnected environments, not for direct integration with other cloud providers like AWS or Azure.

---

### Question 3
**Q: You have a region with one AD. How would you place two servers and a 2-node database for high availability?**
- Place all the components in the same fault domain.
- Place the servers in one fault domain, and the database nodes in another fault domain.
- High availability is not possible as there is only one availability domain in the region.
- **✅ Place one server and a DB node in one fault domain, and the second server and DB node in another fault domain.**

**My Explanation:** When you only have one Availability Domain, the next level of protection is the Fault Domain. To achieve high availability, you must distribute your application components across different Fault Domains to avoid a single point of hardware failure.

---

### Question 4
**Q: Which capability can be used to protect against failures *within* an OCI availability domain?**
- Load Balancer
- Regions
- Compartments
- **✅ Fault Domain**

**My Explanation:** This is the definition of a Fault Domain. It is a grouping of hardware *within* a single Availability Domain to protect against localized failures like a server rack or power supply failure.

---

### Question 5
**Q: Which statement about OCI is NOT true?**
- An OCI region is a localized geographic area.
- **✅ A single fault domain can be associated with multiple availability domains.**
- An availability domain is one or more data centers located within a region.
- Availability domains do not share infrastructure, such as power or cooling, within a region.

**My Explanation:** This statement is false. A Fault Domain is always contained *inside* a single Availability Domain. Think of it like a room (FD) which can only be in one house (AD) at a time.
