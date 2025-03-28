---
title: General FAQs
description: General questions around Harness CD.
sidebar_position: 1
---

# General FAQs

This article addresses some frequently asked questions about Harness Continuous Delivery & GitOps.

For an overview of Harness' support for platforms, methodologies, and related technologies, go to [Supported platforms and technologies](https://developer.harness.io/docs/platform/platform-whats-supported).

For a list of CD supported platforms and tools, go to [CD integrations](https://developer.harness.io/docs/continuous-delivery/cd-integrations).

For an overview of Harness concepts, see [Learn Harness' key concepts](https://developer.harness.io/docs/platform/get-started/key-concepts).

### General FAQs

#### Where can one find instanceKey and infrastructureMappingId values in Trigger Rollback API?

The Instance Key is a combination of the Infrastructure Key and the instance information available in the Instances Table.
Infrastructure key can be found as part of the infrastructure output variables.
Instance information can be found in the Instances Table.

Note that the infrastructureMappingId is not exposed as part of the Infrastructure.

#### Does Harness support migration of entities such as overrides into GitX or store them remotely?

Yes, Harness supports the migration of entities such as overrides, pipelines, templates, etc. Please contact [Harness support](mailto:support@harness.io) to learn more about the migration tool.

#### How does Harness calculate pricing for CD?

See [Service-based licensing and usage for CD](https://developer.harness.io/docs/continuous-delivery/get-started/service-licensing-for-cd/)

#### My definition of a service differs from the above standard definition. How will pricing work in my case?

Harness allows deployment of various custom technologies such as Terraform scripts, background jobs, and other non-specified deployments. These require custom evaluation to assess the correct Licensing model. Please contact the Harness Sales team to discuss your specific technologies and deployment use cases.

See the **Pricing FAQ** at [Harness pricing](https://harness.io/pricing/).
