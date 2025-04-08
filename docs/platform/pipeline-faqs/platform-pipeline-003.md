---
id: platform-pipeline-003
title: How does bidirectional sync for Git Experience handle a default pipeline repo with branch protection?
description: Common questions around Harness pipeline.
sidebar_position: 1
---

<!-- ## How does bidirectional sync for Git Experience handle a default pipeline repo with branch protection? -->

Branch protection rules in Git serve as safeguards that cannot be tampered with or bypassed by Harness. Therefore, our actions are restricted to the capabilities of the access token you provide.

When Harness initiates a push, it operates with the same authority as a user issuing commands through their CLI. Harness Git Experience ensures that you're always working with the latest updates, eliminating any chance of stale data.

If you're not utilizing bidirectional sync, Harness won't automatically update anything. While execution utilizes the latest version, outside of that, you might encounter outdated pipelines or entities based on the last time they were executed or manually reloaded. However, with bidirectional sync enabled, you'll consistently see the most up-to-date version pulled directly from Git.
