---
id: platform-002
title: Access Control and RBAC FAQs
description: Common questions around Harness Access Control.
sidebar_position: 2
---

## Access Control/RBAC

### What is RBAC and how do I manage users and roles?

Harness NextGen platform utilizes Role-Based Access Control (RBAC). For more information, go to this [blog post](https://www.harness.io/blog/user-role-management) and [RBAC in Harness](https://developer.harness.io/docs/platform/role-based-access-control/rbac-in-harness/) in the documentation.

### Are there any built-in roles I can use?

Yes, for more information on built-in roles, go to [RBAC in Harness](https://developer.harness.io/docs/platform/role-based-access-control/rbac-in-harness/).

### What is the best way to implement Harness RBAC?

Following a workflow can be a useful process for implementing and understanding RBAC:

To configure RBAC in Harness, you must:

1. Create roles.
2. Create resource groups and, optionally, apply RBAC.
3. Create user groups, create service accounts, and add users.
4. Assign roles and resource groups to users, user groups, and service accounts.
5. If you have not already done so, configure authentication.

### What are the main components of RBAC?

RBAC uses Principals, Resource Groups, and Roles to control access.

- Principals are entities taking action in the system. These include users, user groups, and service accounts.
- Resource Groups define what objects can be acted on. Objects include organizations, projects, pipelines, connectors, users, and more.
- Roles define what actions can be taken on objects. Actions include view, create, edit, delete, and so on.

### Are there any features in Harness that I can prevent a pipeline from re-running via RBAC?

Rerun shares the same RBAC as RUN features. Therefore, users who can run the pipeline can also re-run, as there is no separate RBAC for Rerun.

### Does Harness NextGen Free edition support RBAC?

Yes, Harness NextGen Free edition supports RBAC. For a feature comparison and supported functionality, go to the [pricing](https://www.harness.io/pricing) page on `Harness.io`.

### What is a Resource Group?

Resource groups are an RBAC component that defines the objects that a user or service account can access. Objects are any Harness resource, including projects, pipelines, connectors, secrets, delegates, environments, users, and more.

For more information, go to [Add resource groups](https://developer.harness.io/docs/platform/role-based-access-control/add-resource-groups).

### Does Harness support provisioning users and user groups via GitHub?

No. Harness currently supports the following provisioning methods:

- Okta SCIM
- Microsoft Entra ID SCIM
- OneLogin SCIM
- Just-in-time provisioning

### I'm a user of multiple accounts. Why am I getting an error when I try to redirect to a specific account?

Use the direct URL with the `accountId` for the desired account, such as `https://app.harness.io/ng/account/:accountId/settings/overview`.

You can then sign in and change your default account from your profile.

### Currently, Azure only supports view access at the project level. However, documentation suggests that view access is only available at the account level. How can we achieve project-level view access using Azure AD?

The access depends on how and where you have added the user. If the user is added at the account level manually or via SCIM, they are automatically part of the All Account Users group, inheriting permissions associated with that group.

However, if the user is only added at the project level, they are added to the All Project Users group, and permissions associated with that user group apply.

Additionally, you can add a user at the account level and manage project-level permissions through Access Control at the project level. The same principle applies to organization-level access.

### What is Role Binding, and how does it relate to Harness RBAC?

Role binding refers to the process of assigning roles and resource groups to principals (users, user groups, and service accounts). Role binding can be configured at all scopes.

### Is there an overview doc on Harness RBAC and permissions?

Yes, for more information, go to [Permissions reference](https://developer.harness.io/docs/platform/role-based-access-control/permissions-reference).


### Can I configure RBAC for the environment based on the stage?

No, you can only configure RBAC for the environment based on environment type.

### Does Harness log GET Calls in the audit logs?

No, Harness doesn't support audit trails for read API requests like GET.

### Why are RBAC checks different for pipelines stored inline vs. Git?

You can set Harness to by default, before running any pipeline, check whether the user has access to all of the environments and other resources that the pipeline accesses. This check is run only for inline pipelines, not those stored in Git or other repositories.

:::note
Currently, this feature is behind the feature flags `CDS_PIPELINE_ABORT_RBAC_PERMISSION_MIGRATION` and `CDS_PIPELINE_ABORT_RBAC_PERMISSION`. Contact Harness Support to enable the feature.
:::

Turn off this setting if the check isn't required. Turning this off can cause pipelines to fail partway through execution (since later stages could have permission issues that haven't been checked beforehand).

For more information, go to [Run RBAC Validation before executing Inline Pipelines](https://developer.harness.io/docs/platform/pipelines/pipeline-settings/#run-rbac-validation-before-executing-inline-pipelines).

### What is the purpose of linkedSsoDisplayName?

`LinkedSsoDisplayName` is the same SSO setting name in Harness. For SAML, the value provided for both `ssoGroupId` and `ssoGroupName` must be the same.

### Will creating an administrator role at the account level and assigning it to a resource group with specific scope for a Harness organization grant admin access only to that organization?

To achieve your use case, it is recommended that you create a user with limited access at the account level. Then, add the same user to the organization level where you require admin access. This way, you can have control over user RBAC at the organization level scope.

### How can I view the de-factor roles/permissions assigned to a user?

You can view all permissions for a user by going to **Access Control**. Search for and then select the user. Select **Role Bindings** to view permissions for the user at all scopes.

If you want to review permissions within a role like Account Viewer or any custom-created role, as well as within a Resource Group, you must select each role or resource group individually, as they are not displayed on the User Permissions page.

Harness solely displays permissions at the Account/Project/Organization level along with the assigned role and resource group, whether assigned through a user group or directly. However, you can view all permissions together by selecting the scope as **All** instead of **Individual**.

### How do we provision users with pre-defined or custom roles?

With Harness, users and groups can be created automatically via SCIM. Permissions in Harness are granted via roles. You can use built-in roles or create your own at every Harness scope (account, organization, and project). You can assign roles to groups, and assigning roles to groups gives all the users in the group the permissions spelled out in the role. For more information, go to [Role-Based Access Control (RBAC) in Harness](https://developer.harness.io/docs/platform/role-based-access-control/rbac-in-harness/).

### Can an admin user assume the same role as an alternate user for testing permission issues?

No, there is no such option currently. To debug permission related issues, check the groups and roles assigned to user.
