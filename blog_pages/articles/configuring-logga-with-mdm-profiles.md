---
outline: deep
title: Corporate macOS audit logging with MDM
description: Learn how to deploy logga on macOS in a corporate environment using MDM profiles.
---

# Corporate macOS audit logging with MDM

From day one, logga was built with Mobile Device Management in mind. logga is not a trivial product: it is "highly privileged" application that has access to sensitive system information. For this reason, macOS handles logga with extra caution, requiring extra approvals from the user to launch the application. That being said, we tried to make the onboarding experience as "dumb" and simple as possible: this is where MDM comes into picture.

## Deploy and configure logga with MDM

With MDM, system administrators and organizations can benefit from a "hands-free" (without physical access to the macOS machine) setup experience. Use your favorite MDM provider, like [Jamf](https://jamf.com) or [Kandji](https://www.kandji.io) to make managing logga frictionless.

1. Deploy System Policies to enable `Full Disk Access` for logga
    -  Allow loading logga `System Extension` automatically (without manual approval form user)
2. Deploy a Configuration Profile from your MDM provider to configure logga, and to keep logga managemnt in a single place
3. Use MDM to install logga on your macOS fleet via `pkg` installers
4. Run `/Applications/logga.app/Contents/MacOS/logga load` to load the Extension, and start to collecting **audit** and **access** logs

## Democratizing audit logging
Be a small team with a few MacBooks, or a big corporation with huge macOS fleet, we belive you can massively benefit from using MDM. That is why we don't want to charge extra for "enterprise" features. 

See more details on how logga can be deployed and configured using MDM in the [documentation](https://docs.getlogga.com/building-blocks/full-disk-access). If you need help with setting up logga, <a href="mailto:peter@getlogga.com">contact support</a> or open an issue on <a href="https://github.com/logga-app/logga-public/issues/new">Github</a>.