/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "10123",
    title: "Nike Air-Force",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/20386886-e671-493e-b7f0-c701b2dc1560/air-force-1-lo-07-shoes-9WTbLX.png",
    description:
      "The radiance lives on in the Nike Air Force 1 LO '07. Crossing hardwood comfort with off-court flair, they put a fresh spin on what you know best: crisp leather, '80s construction, bold details and nothing-but-net style. A double Swoosh logo helps add just the right amount of flash to make you shine.",
    price: 20000,
    discontinued: false,
    categories: ["SNK-MEN"],
  },

  {
    id: "10124",
    title: "NOCTA Hot Step",
    imageUrl:
      "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/c58418bf-e9b8-4a2f-8a3c-d6084b173a19/nocta-hot-step-triple-black-dh4692-001-release-date.jpg",
    description:
      "The first signature shoe from NOCTA perfectly blends the ethos of the brand. The design effortlessly weaves together retro Nike familiarity, unparalleled comfort, functionality and a minimalistic yet subtly aggressive design. The sleek minimalist upper combined with the remastered classic 'Air Terra Humara' tooling create an incredibly versatile silhouette that can be worn day or night in just about any setting or condition. The mix of premium pebbled leather, 3M accents and G-TEK traction technology make for an everyday staple that offers a comfortable ride and ample support.",
    price: 23500,
    discontinued: false,
    categories: ["SNK-MEN", "SNK-WOMEN"],
  },

  {
    id: "10125",
    title: "Nike Air Zoom Rival Fly 3",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6f4bdf5d-fa57-4367-b0d5-84b84208f4c2/air-zoom-rival-fly-3-road-racing-shoes-sTqqkg.png",
    description:
      "When you're ready to ramp up the speed and go the distance, take off in a model that's built for training and racing. Our latest version includes foam cushioning that's softer than ever, and abrasion-resistant rubber for extra durability on rocky roads. With updates like these, you'll be able to stay focused as you push towards the finishing line.",
    price: 12000,
    discontinued: false,
    categories: ["SNK-MEN"],
  },

  {
    id: "10126",
    title: "Jordan Delta 3",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5ba2c577-e3d3-44a3-bbba-db7ede2ae474/jordan-delta-3-low-shoes-fDJ9vd.png",
    description:
      "Combining high-end craft with high-tech features, the Jordan Delta 3 lets you rep courtside to club. With Formula 23 underfoot, Jordan's signature foam, it delivers performance cushioning that's got you covered from lay-up to errand to swanky, make-those-reservations-now restaurants. Airy Ripstop lends urban appeal, while soft suede and organic design lines keep it classic and easy to style. Its zonal midfoot padding and plush collar add that luxury feel which makes them ideal for—well, any time. We've got you covered—mind, body and soul.",
    price: 19000,
    discontinued: false,
    categories: ["SNK-MEN"],
  },

  {
    id: "10127",
    title: "Nike Metcon 7 AMP",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b706e869-d010-49bc-a168-3d585f9c802a/metcon-7-amp-training-shoes-kH6Dzs.png",
    description:
      "The Nike Metcon 7 AMP is the gold standard for weight training—even tougher and more stable than previous versions. We've also added React foam that ups the comfort to keep you ready for high-intensity cardio. Plus, a tab locks down your laces so you can forget about them coming untied when you're focused on your next PR.",
    price: 18000,
    discontinued: false,
    categories: ["SNK-MEN"],
  },

  {
    id: "10128",
    title: "Air Kukini SE",
    imageUrl:
      "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/b572e581-37a3-4ea9-bf8a-14f1f89a397f/air-kukini-se-lemon-venom-and-aurora-dv1902-100-release-date.jpg",
    description:
      "Casual meets technical with the Air Kukini. Inspired by its connection to triathlons, its stretchy neoprene-like fabric gets updated with a gradient colour design that symbolises the movement between water and land. The webbed support system adds a sporty touch, while visible Air cushioning puts the cherry on the bottom for this boundary-pushing paradox.",
    price: 16000,
    discontinued: false,
    categories: ["SNK-MEN"],
  },

  {
    id: "11123",
    title: 'Kyrie Low 5 Community "Jewell Loyd"',
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4854700c-34ea-4270-b177-b6c68f84ca40/air-jordan-5-retro-low-shoes-LTTKzs.png",
    description:
      "Kyrie twists defenders into knots using his footwork and ball handling, creating the space he needs to make the play. Made for his quick, crafty game, the Kyrie Low 5 enables players who utilise their speed and multi-directional ability to stay in control, while taking advantage of the separation they create. This design is inspired by the shared goal NBA and WNBA stars have in bringing men's and women's basketball together.",
    price: 16000,
    discontinued: false,
    categories: ["SNK-WOMEN"],
  },

  {
    id: "11124",
    title: "Nike Free Metcon 4",
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6c248067-b97e-4f45-b17a-5a5e1c1c2423/free-metcon-4-training-shoes-2g2hts.png",
    description:
      'The Nike Free Metcon 4 combines flexibility with stability to help you get the most out of your training programme. Updated "chain-link" mesh cools and flexes as you speed through agility drills, while support at the midfoot and heel braces you for your heaviest sets in the weight room.',
    price: 16000,
    discontinued: false,
    categories: ["SNK-WOMEN"],
  },

  {
    id: "11125",
    title: "Nike Air Zoom Pegasus 39",
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7a563c5a-6048-4804-97a4-1cc4de6f6097/air-zoom-pegasus-39-road-running-shoes-fRzz2h.png",
    description:
      "Running is your daily ritual, with every step taking you closer to your personal goal. Let the Nike Air Zoom Pegasus 39 help you ascend to new heights—whether you're training or jogging—with its intuitive design. More lightweight up top than the Pegasus 38 and ideal to wear in any season, it has a supportive sensation to help keep your feet contained, while underfoot cushioning and double Zoom Air units (1 more than the Peg 38) give you an extra pop to your step. Your trusted workhorse with wings is back. Time to fly.",
    price: 17000,
    discontinued: false,
    categories: ["SNK-WOMEN"],
  },

  {
    id: "11126",
    title: "Nike Air Force 1 PLT.AF.ORM",
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/91f481e7-5887-454a-8d04-c485c70052fe/air-force-1-pltaform-shoes-dpz96J.png",
    description:
      "Let classic, easy-to-wear AF-1 style rise to the occasion with the Nike Air Force 1 PLT.AF.ORM. Its elegantly shaped and lifted midsole delivers a proud, new voice to the hoops franchise. The leather on the upper breaks in easily and ages to soft perfection while the sculpted collar and pillowy heel keep it comfy. Captivate your audience.",
    price: 14500,
    discontinued: false,
    categories: ["SNK-WOMEN"],
  },

  {
    id: "11127",
    title: "Nike Air Max 270 G",
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a11b2cf9-ba4e-4b98-8021-b1527da06169/air-max-270-g-golf-shoe-gTpCFg.png",
    description:
      "Look legendary in the Nike Air Max 270 G. The silhouette is a stitch-for-stitch reconstruction of the original big Air icon, with the addition of breathable mesh and innovative traction that performs at the highest level of play.",
    price: 19500,
    discontinued: false,
    categories: ["SNK-WOMEN"],
  },

  {
    id: "11128",
    title: "LeBron 19 Low",
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aecd480f-9cac-4580-ab0e-3f534e009cb4/lebron-19-low-basketball-shoes-DC1npm.png",
    description:
      "LeBron plays less in the paint and more at the point, so it makes sense that he wants to feel a little quicker. His 19th signature gives you the feeling of containment but with a lower, lighter design that's ideal for fast, strong players like LeBron who stretch the court.",
    price: 21000,
    discontinued: false,
    categories: ["SNK-WOMEN"],
  },

  {
    id: "12123",
    title: "Nike Dynamo Go",
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a327ce13-60ef-4b77-917a-263e6d274bc2/dynamo-go-younger-easy-on-off-shoes-K0Xlz0.png",
    description:
      "Easy, snug and built for play any time—the Nike Dynamo Go will be your little one's next fave. What we love most is that kiddos can stomp down on the collapsible heel and slip in quick and easy. And if they're not quite ready to do it themselves, you can show them how it works so they can be free and independent! It's also soft and plush in the best places, so the fun never stops.",
    price: 7500,
    discontinued: false,
    categories: ["SNK-CHILDREN"],
  },

  {
    id: "12124",
    title: "Nike Omni Multi-Court",
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/733a3371-b55b-4357-92d3-2b0d3bfc8e10/omni-multi-court-older-indoor-court-shoes-T0b6gm.png",
    description:
      "What's Omni, you ask? It means universal, inclusive and all. Durable and lightweight so moving fast is easy, these are the ultimate break-time shoe. And volleyball shoe. And tennis shoe. And handball shoe. And adventure shoe!",
    price: 7000,
    discontinued: false,
    categories: ["SNK-CHILDREN"],
  },

  {
    id: "12125",
    title: "Nike Air Max INTRLK Lite",
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cfbc4592-42a4-4c3d-ab5f-c6f306eb71b2/air-max-intrlk-lite-older-shoes-cV2zWX.png",
    description:
      "Who doesn't love a new Air Max experience? The Nike Air Max INTRLK Lite reshapes your favourite Air cushioning with a smooth and comfy feel. This lightweight shoe is super easy, durable and versatile for all of your needs, and flips the page into another evolution of our Air Max story.",
    price: 8000,
    discontinued: false,
    categories: ["SNK-CHILDREN"],
  },

  {
    id: "12126",
    title: "Nike Blazer Mid '77",
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3bdcf8a1-b301-4444-8dfd-92601bbf42ac/blazer-mid-77-vintage-shoe-GpF2lM.png",
    description:
      "Channel the old-school look of Nike Basketball in the Nike Blazer Mid '77. Throwback style (check out the vintage finish on the midsole) and modern materials mean you can run, skip and jump in comfort. A transparent Swoosh design reveals a swoop of colour underneath for a fun painted effect, making these a fun complement to your art projects.",
    price: 11000,
    discontinued: false,
    categories: ["SNK-CHILDREN"],
  },

  {
    id: "12127",
    title: "Nike Air Max 90 LTR",
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/34627b2f-87d6-4cd8-aae4-dc1e452679c6/air-max-90-ltr-shoe-zNM1n8.png",
    description:
      "The Nike Air Max 90 LTR returns with an even better feel for you. Cushioning is softer and more flexible, the Max Air unit is tuned for growing feet and the shape gives your toes more wiggle room. With a design and look that are still the same, it brings a '90s fave to a new generation.",
    price: 12000,
    discontinued: false,
    categories: ["SNK-CHILDREN"],
  },

  {
    id: "12128",
    title: "Nike Air Force 1",
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2910de26-90d7-46b8-9a9b-271c4f584b21/air-force-1-07-lv8-shoes-P1wNNK.png",
    description:
      "There's a reason the Nike AF-1 continues to be legendary. First seen on basketball courts in the '80s, they quickly took over streets and playgrounds to become a sneaker icon. Smooth durable synthetic leather, Nike Air cushioning and nothing-but-net style give these the same classic look and feel as the original. Could they be your new all-time fave?",
    price: 12000,
    discontinued: false,
    categories: ["SNK-CHILDREN"],
  },

  {
    id: "10456",
    title: "Nike ZoomX Streakfly",
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e8e530a3-2317-4783-819b-40860281daaf/zoomx-streakfly-road-racing-shoes-wWhMKs.png",
    description:
      "One of our lightest racing shoes, the Nike ZoomX Streakfly is all about the speed you need to take on the competition in a mile, 5K or 10K race. Low-profile with sleek details, it feels like it disappears on your foot to help you better connect with the road on the way to your personal best. This electric design is inspired by the soul and rebellious spirit of Eugene, Oregon—TrackTown USA—where contenders from all over the world test themselves against the globe's greatest athletes.",
    price: 21000,
    discontinued: false,
    categories: ["SNK-MEN"],
  },

  {
    id: "13457",
    title: "Nike Metcon 7",
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ff2ac1ae-32bf-49cb-bd54-c0781e658900/metcon-7-training-shoes-VZcBz4.png",
    description:
      "The Nike Metcon 7 is the gold standard for weight training—even tougher and more stable than previous versions.We've also added React foam that ups the comfort to keep you ready for high-intensity cardio.Plus, a tab locks down your laces so you can forget about them coming untied when you're focused on your next PR.",
    price: 17000,
    discontinued: false,
    categories: ["SNK-MEN", "SNK-WOMEN"],
  },

  {
    id: "11456",
    title: "Nike Air Force 1 LO '07",
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-shoe-Dz225W.png",
    description:
      "The radiance lives on in the Nike Air Force 1 LO '07. Crossing hardwood comfort with off-court flair, they put a fresh spin on what you know best: crisp leather, '80s construction, bold details and nothing-but-net style. A double Swoosh logo helps add just the right amount of flash to make you shine.",
    price: 14500,
    discontinued: false,
    categories: ["SNK-WOMEN"],
  },

  {
    id: "11457",
    title: "Nike Waffle 1 SE",
    imageUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c8a0e5f9-3a53-4465-8cc0-00a5c3e113df/waffle-1-se-shoes-8StTPJ.png",
    description:
      "Waffles aren't just for breakfast any more—you'll want to wear these kicks 'til dinnertime. We paired our now-iconic Waffle outsoles with fresh details, like a bold double Swoosh, tumbled leather and an exaggerated heel clip. Meanwhile, new moulded lugs give you even more support in every step.",
    price: 15000,
    discontinued: false,
    categories: ["SNK-WOMEN"],
  },
];
