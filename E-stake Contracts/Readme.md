
Summary :
=======

Contract address :  0x6b86c8a9B8f12122910f587d2ac4644Add4190Cc

This is the report from a security audit performed on ETG Finance Staking contract .

staking.sol

Findings :
========

In total, 1 issue were reported including:

0 high severity issues.

0 medium severity issues.

0 owner privilegies issues.

1 low severity issues.

Security issues :
=================

1. Zero address checking
Severity: low severity

Description :
==============

There are no zero address checking in function withdrawTokens, so owner will be able to send his tokens to the zero address.

Recommendation :
===============

We recommend adding zero address checking in function withdrawTokens, but if the ETGF smart contract does not support zero address checking too, then this mechanism could be used for burning.

Conclusion :
============

Smart contract contains only low severity issue and could be deployed on mainnet without any threats to investors.
