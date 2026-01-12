---
title: Shor's Algorithm
description: A quantum algorithm for integer factorization
---

Shor's algorithm is a quantum algorithm for finding the prime factors of an integer. It was developed by Peter Shor in 1994 and demonstrates that quantum computers could theoretically break widely used cryptographic systems like RSA.

<br />

<fermion-boson-title>Key Points</fermion-boson-title>

1. <fermion-boson-notes>Exponentially faster than classical factorization algorithms</fermion-boson-notes>
1. <fermion-boson-notes>Uses quantum Fourier transform to find the period of a function</fermion-boson-notes>
1. <fermion-boson-notes>Can factor large integers in polynomial time on a quantum computer</fermion-boson-notes>
1. <fermion-boson-notes>Threatens current RSA encryption if large-scale quantum computers become practical</fermion-boson-notes>
1. <fermion-boson-notes>Combines classical and quantum computation steps</fermion-boson-notes>

<br />

<fermion-boson-title>Algorithm Overview</fermion-boson-title>

1. <fermion-boson-notes>Choose a random integer a that is coprime to N (the number to factor)</fermion-boson-notes>
1. <fermion-boson-notes>Use quantum period finding to determine the period r of the function f(x) = a^x mod N</fermion-boson-notes>
1. <fermion-boson-notes>If r is even and a^(r/2) ≠ ±1 mod N, compute gcd(a^(r/2) ± 1, N) to find factors</fermion-boson-notes>
1. <fermion-boson-notes>The quantum speedup comes from efficiently finding the period using quantum Fourier transform</fermion-boson-notes>

<br />

<fermion-boson-title>Applications and Impact</fermion-boson-title>

1. <fermion-boson-notes>Demonstrates the potential power of quantum computing for specific problems</fermion-boson-notes>
1. <fermion-boson-notes>Motivates research into post-quantum cryptography</fermion-boson-notes>
1. <fermion-boson-notes>Shows quantum advantage for number-theoretic problems</fermion-boson-notes>
1. <fermion-boson-notes>Requires error correction and large qubit counts for practical implementation</fermion-boson-notes>
