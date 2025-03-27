---
title: Local Runner FAQs
description: Common questions around Harness CI Local Runner.
sidebar_position: 2
---

# Local Runner

### Can I run builds locally? Can I run builds directly on my computer?

Yes. For instructions, go to [Set up a local runner build infrastructure](https://developer.harness.io/docs/continuous-integration/use-ci/set-up-build-infrastructure/define-a-docker-build-infrastructure).

### How do I check the runner status for a local runner build infrastructure?

To confirm that the runner is running, send a cURL request like `curl http://localhost:3000/healthz`.

If the running is running, you should get a valid response, such as:

```json
{
  "version": "0.1.2",
  "docker_installed": true,
  "git_installed": true,
  "lite_engine_log": "no log file",
  "ok": true
}
```

### How do I check the delegate status for a local runner build infrastructure?

The delegate should connect to your instance after you finish the installation workflow above. If the delegate does not connect after a few minutes, run the following commands to check the status:

```
docker ps
docker logs --follow <docker-delegate-container-id>
```

The container ID should be the container with image name `harness/delegate:latest`.

Successful setup is indicated by a message such as `Finished downloading delegate jar version 1.0.77221-000 in 168 seconds`.

### Runner can't find an available, non-overlapping IPv4 address pool.

The following runner error can occur during stage setup (the **Initialize** step in build logs):

```
Could not find an available, non-overlapping IPv4 address pool among the defaults to assign to the network.
```

This error means the number of Docker networks has exceeded the limit. To resolve this, you need to clean up unused Docker networks. To get a list of existing networks, run [`docker network ls`](https://docs.docker.com/engine/reference/commandline/network_ls/), and then remove unused networks with [`docker network rm`](https://docs.docker.com/engine/reference/commandline/network_rm/) or [`docker network prune`](https://docs.docker.com/engine/reference/commandline/network_prune/).

### Docker daemon fails with invalid working directory path on Windows local runner build infrastructure

The following error can occur in Windows local runner build infrastructures:

```
Error response from daemon: the working directory 'C:\harness-DIRECTORY_ID' is invalid, it needs to be an absolute path
```

This error indicates there may be a problem with the Docker installation on the host machine.

1. Run the following command (or a similar command) to check if the same error occurs:

   ```
   docker run -w C:\blah -it -d mcr.microsoft.com/windows/servercore:ltsc2022
   ```

2. If you get the `working directory is invalid` error again, uninstall Docker and follow the instructions in the Windows documentation to [Prepare Windows OS containers for Windows Server](https://learn.microsoft.com/en-us/virtualization/windowscontainers/quick-start/set-up-environment?tabs=dockerce#windows-server-1).
3. Restart the host machine.

### How do I check if the Docker daemon is running in a local runner build infrastructure?

To check if the Docker daemon is running, use the `docker info` command. An error response indicates the daemon is not running. For more information, go to the Docker documentation on [Troubleshooting the Docker daemon](https://docs.docker.com/engine/daemon/troubleshoot/)

### Runner process quits after terminating SSH connection for local runner build infrastructure

If you launch the Harness Docker Runner binary within an SSH session, the runner process can quit when you terminate the SSH session.

To avoid this with macOS runners, use this command when you [start the runner binary](https://developer.harness.io/docs/continuous-integration/use-ci/set-up-build-infrastructure/define-a-docker-build-infrastructure/#install-the-harness-docker-runner-1):

```
./harness-docker-runner-darwin-amd64 server >log.txt 2>&1 &
disown
```

For Linux runners, you can use a tool such as `nohup` when you start the runner, for example:

```
nohup ./harness-docker-runner-darwin-amd64 server >log.txt 2>&1 &
```

### Where does the harness-docker-runner create the hostpath volume directories on macOS?

The harness-docker-runner creates the host volumes under `/tmp/harness-*` on macOS platforms.

### Why do I get a "failed to create directory" error when trying to run a build on local build infra?

```
failed to create directory for host volume path: /addon: mkdir /addon: read-only file system
```

This error could occur when there's a mismatch between the OS type of the local build infrastructure and the OS type selected in the pipeline's infrastructure settings. For example, if your local runner is on a macOS platform, but the pipeline's infrastructure is set to Linux, this error can occur.

### Is there an auto-upgrade feature for the Harness Docker runner?

No. You must upgrade the Harness Docker runner manually.
