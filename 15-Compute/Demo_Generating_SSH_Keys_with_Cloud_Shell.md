# Day 15: Demo - Generating SSH Keys with Cloud Shell

This lesson demonstrates a convenient method for creating SSH key pairs directly within the OCI environment using the Cloud Shell.

### What is Cloud Shell?
Cloud Shell is a browser-based terminal accessible from the OCI Console. It provides a free-to-use Linux shell with the OCI CLI pre-authenticated and other developer tools (Git, Python, etc.) pre-installed.

### What is an SSH Key Pair?
An SSH key pair is a set of cryptographic keys used for authenticating to an SSH server.
-   **Public Key (.pub):** This key is placed on the remote server (e.g., a compute instance). It acts like a lock on a door.
-   **Private Key:** This key is kept secret and secure by the user. It acts as the unique key that can open the lock.

### Demo Steps: Generating SSH Keys in Cloud Shell

1.  **Launch Cloud Shell:** Click the Cloud Shell icon (`>_`) in the top-right of the OCI Console.
2.  **Create a Directory (Optional but Recommended):** It is a best practice to store SSH keys in a hidden directory.
    ```bash
    mkdir ~/.ssh
    ```
3.  **Navigate to the Directory:**
    ```bash
    cd ~/.ssh
    ```
4.  **Generate the Key Pair:** Use the `ssh-keygen` command.
    ```bash
    ssh-keygen -t rsa -b 2048 -f DemoKey
    ```
    -   `-t rsa`: Specifies the type of key to create (RSA).
    -   `-b 2048`: Specifies the number of bits in the key (2048 is a secure standard).
    -   `-f DemoKey`: Specifies the filename for the key.
5.  **Passphrase:** You will be prompted for a passphrase. For simplicity in the demo, this is left blank by pressing Enter.
6.  **Verify the Output:** Two files are created:
    -   `DemoKey`: The private key.
    -   `DemoKey.pub`: The public key.

This key pair can now be used when creating new compute instances.
