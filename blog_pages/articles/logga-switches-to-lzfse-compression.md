---
outline: deep
title: "logga switches to lzfse compression"
description: Learn how logga achives better compression ratio with less resources.
---

# 🗜️ logga switches to lzfse compression

## Why the switch?

Altough gzip is a decent algorithm, it is not "the best" choice for compressing log files, especially not on macOS. LZFSE is a lossless compression algorithm made by engineers at Apple. Their main principle was energy efficiency while maintaining speed and compression ratio. The result is a quite CPU efficient compression algorithm, which cached our eyes during research. We want logga to utilize as little system resource as possible, so lzfse seemed like an an obvious iteration after gzip.

## What does it mean for you?

Not only logga uses less cpu cycles to achive a better compression ratio, based on our measurements logga compresses a 10MB log file to 120KB! That is ~1% of the original size!

**This is big news to our storage sensitive users, who might have to store logs for long periods of time for compliece reasons :tada:**

## How to work with the compressed archive?

Modern macOS ships with the `Apple Archives` (aa) tool which is the primary interface to work with lzfse file formats. logga stores the compressed files with the `.archive` suffix. To extract / decompress an lzfse archieve created by logga, run the following command:

```
sudo aa extract  -i audit.log.archive
```
The command will restore the original log file to working directory.

We hope that you will like this change as much as we do, happy logging!