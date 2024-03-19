---
outline: deep
title: "New feature: Compressing rotated log files"
description: Learn how logga saves disk space by compressing rotated log files.
---

# :sparkles: New feature: Compressing rotated log files

One requested feature for logga was to compress rotated log files to save disk space. Well, we have good news: version [1.1.1](
https://storage.getlogga.com/logga-client-1.1.1.pkg) brings you log compression!

To start to use the feature, add the `compressArchives: true` to the `config.yaml` configuration file, or update your [MDM Configuration Profile](https://docs.getlogga.com/usage/configuration#configuration-with-custom-mdm-configuration-profile).

## How log compression works?

Log rotation is controlled by the `maxLogFileCount` and `maxLogFileSize` configuration keys.  
`maxLogFileCount` tells logga how many rotated log files to keep at once.
`maxLogFileSize` signals logga when to rotate the current log file: when the file size surpasses the configured bytes, the file gets rotated.

Initially, logs get written into `audit.log` (or `access.log`) file. A rotation event is shown in the following timeline:
```json
# maxLogFileCount: 2

1.
[logging] logga -> audit.log

2. maxLogFileSize reached
[rotation] audit.log -> audit.log.1
[logging] logga -> audit.log

3. maxLogFileSize reached again
[rotation] audit.log.1 -> audit.log.2
[rotation] audit.log -> audit.log.1
[logging] logga -> audit.log

4. maxLogFileSize reached again
[delete] audit.log.2
[rotation] audit.log.1 -> audit.log.2
[rotation] audit.log -> audit.log.1
[logging] logga -> audit.log
...
```

When log compression is turned on (`compressArchives: true`), the rotation rules still take effect, but the files will be a bit different.
```json
# maxLogFileCount: 2

1.
[logging] logga -> audit.log

2. maxLogFileSize reached
[rotation] audit.log -> audit.log.1 
|-> [compression] audit.log.1 -> audit.log.1710807884.gzip
[logging] logga -> audit.log

3. maxLogFileSize reached again
[no action] audit.log.1710807884.gzip
[rotation] audit.log -> audit.log.1 
|-> [compression] audit.log.1 -> audit.log.1710808030.gzip
[logging] logga -> audit.log

4. maxLogFileSize reached again
[delete] audit.log.1710807884.gzip
[no action] audit.log.1710808030.gzip
[rotation] audit.log -> audit.log.1 
|-> [compression] audit.log.1 -> audit.log.1710808102.gzip
[logging] logga -> audit.log

...
```

If log compression is turned **on**, it makes sense to bump `maxLogFileCount` to a high number, like **50-100**, so compressed files are kept and not frequently rotated.

We hope this feature will be a useful addition to your audit-logging toolchain! If you need help with setting up logga, <a href="mailto:peter@getlogga.com">contact support</a> or open an issue on <a href="https://github.com/logga-app/logga-public/issues/new">Github</a>.

