---
title: Anatomy of a 2.4 CPM Beijing Booking
date: 2013-10-05
slug: "anatomy-of-a-2-4-cpm-beijing-booking"
---

Late morning in Sydney I got an e-mail into my inbox from [IFTTT](https://ifttt.com/), which I use to monitor mileage run posts, that there was a **$448 roundtrip fare from Philadelphia to Beijing**. Ever since booking a mileage run to Shanghai in December, I decided I'd get a Chinese 1 year visa and eventually go back to China next year for a proper visit. After relaying the news, some friends asked me how I was able to book such a complicated routing.

The routing I ended up getting was:

<pre>PHL-MIA-MCO(Overnight)-ORD-PEK, PEK-ORD-CMH-DFW-PHL</pre>

This will earn me 18,405 elite qualifying miles at a cost of 2.4 cents per mile, and with my soon-to-be AA ExecutivePlatinum status, 36,810 redeemable miles which I value at about $700.

<br />

<img src="/blog/2013/10/05/anatomy-of-a-2-4-cpm-beijing-booking/gcmap.png" alt="Map of Beijing Routing" />

The key tool to investigating any good fare is [ITA Matrix](http://matrix.itasoftware.com/?showCostPerMile=true), and you can start by putting in the origin/destination airports and "AA+" for advanced routing codes, since I knew this was an American Airlines fare. In my experience with ITA Matrix, failing to put in restricting airline routing codes will sometimes fail to show lots of complicated routing options. When I didn't put in "AA+", I only saw basic routings. When I did, a vast number of ridiculous routings appeared. I'm not sure why this is, but it's something to keep in mind for the future.

<br />
<img src="/blog/2013/10/05/anatomy-of-a-2-4-cpm-beijing-booking/ita.png" alt="ITA Matrix" />

Choosing amongst the routings can be difficult, but be sure to first "Sort by price per mile":
<br />
<img src="/blog/2013/10/05/anatomy-of-a-2-4-cpm-beijing-booking/ita_cpm.png" alt="ITA Matrix CPM" />

From there I don't necessarily choose the lowest CPM. When looking at complicated routings, I optimize mostly based on connection time and airport, within a narrow band of acceptable CPM. Especially in the winter, the possibility for irregular operations is high. One thing to consider for every segment is "Plan B" - what if your flight gets delayed? In my case, I deliberately chose a routing through Miami on the outbound, knowing that since that's an American Airlines hub, if something went wrong I could probably make it to Chicago (another American Airlines hub) pretty easily without actually flying through Orlando. I'm less concerned about delays on the return with no major flight to miss.

After settling on my routing, I now needed to find an OTA to book the itinerary. With United bookings I almost always use Hipmunk, trying to force the routing using Hipmunk's advanced routing codes. With American Airlines I haven't had much success doing this. Orbitz seems to work well with American Airlines bookings, so I headed over there. 

The key with Orbitz is to feed segments one-by-one into the Multi-City tool, but with a limitation: Orbitz only gives you six segments to enter. My particular itinerary had eight segments. The way around this is to reduce the number of segments you're searching for by skipping the most implied/obvious connections. On my routing, I choose to imply that MCO-PEK would be found as MCO-(ORD)-PEK, and that PEK-CMH would imply PEK-(ORD)-CMH. This reduced down the number of segments to six, which just fits for an Orbitz search:


<br />
<img src="/blog/2013/10/05/anatomy-of-a-2-4-cpm-beijing-booking/orbitz_outbound.png" alt="Orbitz Outbound" />
<img src="/blog/2013/10/05/anatomy-of-a-2-4-cpm-beijing-booking/orbitz_inbound.png" alt="Orbitz Inbound" />

Orbitz should then price the itinerary appropriately and you can book from there.

After booking, it should get ticketed with a few hours. You can then go to American Airlines and add the itinerary to your account under Travel Information > My Trips:

<img src="/blog/2013/10/05/anatomy-of-a-2-4-cpm-beijing-booking/aa_my_trips.png" alt="AA My Trips" />

