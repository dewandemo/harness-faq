---
title: Build Infrastrucuture FAQs
description: Common questions around Harness CI Build Infrastrucuture.
sidebar_position: 1
---

# Build Infrastructure

### What is build infrastructure and why do I need it for Harness CI?

A build stage's infrastructure definition, the _build infrastructure_, defines "where" your stage runs. It can be a Kubernetes cluster, a VM, or even your own local machine. While individual steps can run in their own containers, your stage itself requires a build infrastructure to define a common workspace for the entire stage. For more information about build infrastructure and CI pipeline components go to:

- [CI key concepts](https://developer.harness.io/docs/continuous-integration/get-started/key-concepts/)
- [CI pipeline creation overview](https://developer.harness.io/docs/continuous-integration/use-ci/prep-ci-pipeline-components)
- [Which build infrastructure is right for me](https://developer.harness.io/docs/continuous-integration/use-ci/set-up-build-infrastructure/which-build-infrastructure-is-right-for-me)

### What kind of build infrastructure can I use? Which operating systems are supported?

For support operating systems, architectures, and cloud providers, go to [Which build infrastructure is right for me](https://developer.harness.io/docs/continuous-integration/use-ci/set-up-build-infrastructure/which-build-infrastructure-is-right-for-me).

### Can I use multiple build infrastructures in one pipeline?

Yes, each stage can have a different build infrastructure. Additionally, depending on your stage's build infrastructure, you can also run individual steps on containers rather than the host. This flexibility allows you to choose the most suitable infrastructure for each part of your CI pipeline.

### I have a MacOS build, do I have to use homebrew as the installer?

No. Your build infrastructure can be configured to use whichever tools you like. For example, Harness Cloud build infrastructure includes pre-installed versions of xcode and other tools, and you can install other tools or versions of tools that you prefer to use. For more information, go to the [CI macOS and iOS development guide](https://developer.harness.io/docs/continuous-integration/development-guides/ci-ios).

### What's the difference between CI_MOUNT_VOLUMES, ADDITIONAL_CERTS_PATH, and DESTINATION_CA_PATH?

`CI_MOUNT_VOLUMES` - An environment variable used for CI Build Stages. This variable should be set to a comma-separated list of `source:destination` mappings for certificates where source is the certificate path on the delegate, and destination is the path where you want to expose the certificates on the build containers. For example,

```
- name: CI_MOUNT_VOLUMES
  value: "/tmp/ca.bundle:/etc/ssl/certs/ca-bundle.crt,/tmp/ca.bundle:/kaniko/ssl/certs/additional-ca-cert-bundle.crt"
```

`ADDITIONAL_CERTS_PATH` - An environment variable used for CI Build Stages. This variable should be set to the path where the certificates exist in the delegate. For example,

```
- name: ADDITIONAL_CERTS_PATH
  value: "/tmp/ca.bundle"
```

`DESTINATION_CA_PATH` - An environment variable used for CI Build Stages. This variable should be set to a comma-separated list of files where the certificate should be mounted. For example,

```
- name: DESTINATION_CA_PATH
  value: "/etc/ssl/certs/ca-bundle.crt,/kaniko/ssl/certs/additional-ca-cert-bundle.crt"
```

`ADDTIONAL_CERTS_PATH` and `CI_MOUNT_VOLUMES` work in tandem to ensure certificates are mounted on the Kubernetes Build Infrastructure, whereas `DESTINATION_CA_PATH` does not require other environment variables to mount certificates. Instead, `DESTINATION_CA_PATH` relies on the certificate being mounted at `/opt/harness-delegate/ca-bundle` in order to copy the certificate to the provided comma-separated list of file paths.

`DESTINATION_CA_PATH` and `ADDTIONAL_CERTS_PATH`/`CI_MOUNT_VOLUMES` both perform the same operation of mounting certificates to Kubernetes Build Infrastructure. Harness recommends `DESTINATION_CA_PATH` over `ADDTIONAL_CERTS_PATH`/`CI_MOUNT_VOLUMES` however, if both are defined, `DESTINATION_CA_PATH` will be consumed over `ADDTIONAL_CERTS_PATH`/`CI_MOUNT_VOLUMES`.

For more information and instructions on how to mount certificates, please visit the [Configure a Kubernetes build farm to use self-signed certificates](https://developer.harness.io/docs/continuous-integration/use-ci/set-up-build-infrastructure/k8s-build-infrastructure/configure-a-kubernetes-build-farm-to-use-self-signed-certificates/) documentation.