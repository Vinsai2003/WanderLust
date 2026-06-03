const sampleListings = [

{
title:"Beachfront Paradise",
description:"Beautiful beach house with ocean views.",
image:{
url:"https://images.unsplash.com/photo-1505691723518-36a5ac3b2d4e",
filename:"listingimage"
},
price:2500,
location:"Malibu",
country:"United States",
geometry:{type:"Point",coordinates:[-118.7798,34.0259]}
},

{
title:"City Lights Apartment",
description:"Modern apartment in the heart of the city.",
image:{
url:"https://images.unsplash.com/photo-1493809842364-78817add7ffb",
filename:"listingimage"
},
price:1800,
location:"New York City",
country:"United States",
geometry:{type:"Point",coordinates:[-74.0060,40.7128]}
},

{
title:"Mountain Escape",
description:"Cabin retreat surrounded by mountains.",
image:{
url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470",
filename:"listingimage"
},
price:1500,
location:"Aspen",
country:"United States",
geometry:{type:"Point",coordinates:[-106.8175,39.1911]}
},

{
title:"Historic Italian Villa",
description:"Classic villa in the Tuscan countryside.",
image:{
url:"https://images.unsplash.com/photo-1507089947367-19c1da9775ae",
filename:"listingimage"
},
price:3000,
location:"Florence",
country:"Italy",
geometry:{type:"Point",coordinates:[11.2558,43.7696]}
},

{
title:"Forest Treehouse",
description:"Stay among the trees in a cozy eco treehouse.",
image:{
url:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
filename:"listingimage"
},
price:900,
location:"Portland",
country:"United States",
geometry:{type:"Point",coordinates:[-122.6765,45.5231]}
},

{
title:"Cancun Beach Resort",
description:"Luxury stay beside the Caribbean Sea.",
image:{
url:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
filename:"listingimage"
},
price:2200,
location:"Cancun",
country:"Mexico",
geometry:{type:"Point",coordinates:[-86.8515,21.1619]}
},

{
title:"Lake Tahoe Cabin",
description:"Relaxing lakeside cabin getaway.",
image:{
url:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
filename:"listingimage"
},
price:1400,
location:"Lake Tahoe",
country:"United States",
geometry:{type:"Point",coordinates:[-120.0324,39.0968]}
},

{
title:"Hollywood Penthouse",
description:"Luxury penthouse with skyline views.",
image:{
url:"https://images.unsplash.com/photo-1494526585095-c41746248156",
filename:"listingimage"
},
price:4200,
location:"Los Angeles",
country:"United States",
geometry:{type:"Point",coordinates:[-118.2437,34.0522]}
},

{
title:"Swiss Ski Chalet",
description:"Perfect winter escape in the Alps.",
image:{
url:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
filename:"listingimage"
},
price:3200,
location:"Verbier",
country:"Switzerland",
geometry:{type:"Point",coordinates:[7.2263,46.0967]}
},

{
title:"Safari Lodge",
description:"Experience wildlife in luxury.",
image:{
url:"https://images.unsplash.com/photo-1519681393784-d120267933ba",
filename:"listingimage"
},
price:5000,
location:"Serengeti",
country:"Tanzania",
geometry:{type:"Point",coordinates:[34.6857,-2.3333]}
},

{
title:"Amsterdam Canal House",
description:"Historic home beside the canals.",
image:{
url:"https://images.unsplash.com/photo-1505691938895-1758d7feb511",
filename:"listingimage"
},
price:2100,
location:"Amsterdam",
country:"Netherlands",
geometry:{type:"Point",coordinates:[4.9041,52.3676]}
},

{
title:"Private Island Resort",
description:"Ultimate luxury island retreat.",
image:{
url:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
filename:"listingimage"
},
price:9000,
location:"Fiji",
country:"Fiji",
geometry:{type:"Point",coordinates:[178.0650,-17.7134]}
},

{
title:"Countryside Cottage",
description:"Charming English countryside stay.",
image:{
url:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
filename:"listingimage"
},
price:1600,
location:"Cotswolds",
country:"United Kingdom",
geometry:{type:"Point",coordinates:[-1.8433,51.8330]}
},

{
title:"Boston Brownstone",
description:"Classic historic Boston apartment.",
image:{
url:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
filename:"listingimage"
},
price:2400,
location:"Boston",
country:"United States",
geometry:{type:"Point",coordinates:[-71.0589,42.3601]}
},

{
title:"Bali Beach Villa",
description:"Tropical villa with private pool.",
image:{
url:"https://images.unsplash.com/photo-1560448075-bb485b067938",
filename:"listingimage"
},
price:2800,
location:"Bali",
country:"Indonesia",
geometry:{type:"Point",coordinates:[115.1889,-8.4095]}
},

{
title:"Banff Mountain Lodge",
description:"Cozy lodge with breathtaking mountain views.",
image:{
url:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
filename:"listingimage"
},
price:2000,
location:"Banff",
country:"Canada",
geometry:{type:"Point",coordinates:[-115.5708,51.1784]}
},

{
title:"Miami Beach Condo",
description:"Sunny beachfront condo.",
image:{
url:"https://images.unsplash.com/photo-1505691723518-36a5ac3b2d4e",
filename:"listingimage"
},
price:2100,
location:"Miami",
country:"United States",
geometry:{type:"Point",coordinates:[-80.1918,25.7617]}
},

{
title:"Phuket Tropical Villa",
description:"Luxury tropical stay in Thailand.",
image:{
url:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
filename:"listingimage"
},
price:2600,
location:"Phuket",
country:"Thailand",
geometry:{type:"Point",coordinates:[98.3381,7.8804]}
},

{
title:"Scottish Castle",
description:"Historic castle stay in the Highlands.",
image:{
url:"https://images.unsplash.com/photo-1505843513577-22bb7d21e455",
filename:"listingimage"
},
price:3800,
location:"Scottish Highlands",
country:"United Kingdom",
geometry:{type:"Point",coordinates:[-4.2026,57.1200]}
},

{
title:"Dubai Luxury Villa",
description:"Luxury desert oasis.",
image:{
url:"https://images.unsplash.com/photo-1518684079-3c830dcef090",
filename:"listingimage"
},
price:4500,
location:"Dubai",
country:"United Arab Emirates",
geometry:{type:"Point",coordinates:[55.2708,25.2048]}
},

{
title:"Montana Log Cabin",
description:"Rustic cabin in the wilderness.",
image:{
url:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
filename:"listingimage"
},
price:1200,
location:"Montana",
country:"United States",
geometry:{type:"Point",coordinates:[-110.3626,46.8797]}
},

{
title:"Greek Island Villa",
description:"Mediterranean sea views.",
image:{
url:"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f",
filename:"listingimage"
},
price:2900,
location:"Mykonos",
country:"Greece",
geometry:{type:"Point",coordinates:[25.3289,37.4467]}
},

{
title:"Costa Rica Jungle Lodge",
description:"Eco friendly jungle stay.",
image:{
url:"https://images.unsplash.com/photo-1488462237308-ecaa28b729d7",
filename:"listingimage"
},
price:1400,
location:"Costa Rica",
country:"Costa Rica",
geometry:{type:"Point",coordinates:[-83.7534,9.7489]}
},

{
title:"Charleston Historic House",
description:"Classic southern charm.",
image:{
url:"https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904",
filename:"listingimage"
},
price:1900,
location:"Charleston",
country:"United States",
geometry:{type:"Point",coordinates:[-79.9311,32.7765]}
},

{
title:"Tokyo Modern Apartment",
description:"High rise city living.",
image:{
url:"https://images.unsplash.com/photo-1480796927426-f609979314bd",
filename:"listingimage"
},
price:2300,
location:"Tokyo",
country:"Japan",
geometry:{type:"Point",coordinates:[139.6917,35.6895]}
},

{
title:"New Hampshire Lake House",
description:"Quiet lake retreat.",
image:{
url:"https://images.unsplash.com/photo-1578645510447-e20b4311e3ce",
filename:"listingimage"
},
price:1600,
location:"New Hampshire",
country:"United States",
geometry:{type:"Point",coordinates:[-71.5724,43.1939]}
},

{
title:"Maldives Water Villa",
description:"Overwater luxury villa.",
image:{
url:"https://images.unsplash.com/photo-1439066615861-d1af74d74000",
filename:"listingimage"
},
price:6500,
location:"Maldives",
country:"Maldives",
geometry:{type:"Point",coordinates:[73.2207,3.2028]}
},

{
title:"Ski Resort Chalet",
description:"Luxury ski chalet.",
image:{
url:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
filename:"listingimage"
},
price:3600,
location:"Aspen",
country:"United States",
geometry:{type:"Point",coordinates:[-106.8175,39.1911]}
},

{
title:"Costa Rica Beach House",
description:"Surf and relax on the pacific coast.",
image:{
url:"https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
filename:"listingimage"
},
price:2000,
location:"Costa Rica",
country:"Costa Rica",
geometry:{type:"Point",coordinates:[-83.7534,9.7489]}
},

{
title:"Luxury Island Resort",
description:"Ultimate tropical escape.",
image:{
url:"https://images.unsplash.com/photo-1618140052121-39fc6db33972",
filename:"listingimage"
},
price:9500,
location:"Fiji",
country:"Fiji",
geometry:{type:"Point",coordinates:[178.0650,-17.7134]}
}

];

module.exports = { data: sampleListings };