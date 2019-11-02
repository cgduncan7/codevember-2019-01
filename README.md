# codevember-2019-01
codevember-01 // 2019.11.01 // contrast

30 days, 30 creative experiments. CodeVember is a challenge for developers creating a creative sketch by day during the whole month of November.

## Description
contrast (noun): the state of being strikingly different from something else in juxtaposition or close association.

These words come to mind when I hear 'contrast':
- black & white
- hot & cold
- fast & slow
- good & bad

We can translate some of these into attributes for particles:
- color
- velocity
- acceleration
- size
- pathing

And each of these must be scaled from 0.0 to 1.0 in order to be able to measure contrast. Thus:
- color: 0 = blue; color: 1 = red;
- velocity: 0 = slow; velocity: 1 = fast;
- acceleration: 0 = none; acceleration: 1 = quick;
- size: 0 = big; size: 1 = small;
- pathing: 0 = smooth; pathing: 1 = jagged;

Particles will be generated with a value from 0 to 1 and this value will be used to calculate all other attributes that correspond to the behaviour of the particle.
