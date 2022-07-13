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
    description:
      "The radiance lives on in the Nike Air Force 1 LO '07. Crossing hardwood comfort with off-court flair, they put a fresh spin on what you know best: crisp leather, '80s construction, bold details and nothing-but-net style. A double Swoosh logo helps add just the right amount of flash to make you shine.",
    price: 20000,
    discontinued: false,
    categories: ["SNK-MEN"]
  },

  {
    id: "10124",
    title: "NOCTA Hot Step",
    description:
      "The first signature shoe from NOCTA perfectly blends the ethos of the brand. The design effortlessly weaves together retro Nike familiarity, unparalleled comfort, functionality and a minimalistic yet subtly aggressive design. The sleek minimalist upper combined with the remastered classic 'Air Terra Humara' tooling create an incredibly versatile silhouette that can be worn day or night in just about any setting or condition. The mix of premium pebbled leather, 3M accents and G-TEK traction technology make for an everyday staple that offers a comfortable ride and ample support.",
    price: 23500,
    discontinued: false,
    categories: ["SNK-MEN", "SNK-WOMEN"]
  },

  {
    id: "10125",
    title: "Nike Air Zoom Rival Fly 3",
    description:
      "When you're ready to ramp up the speed and go the distance, take off in a model that's built for training and racing. Our latest version includes foam cushioning that's softer than ever, and abrasion-resistant rubber for extra durability on rocky roads. With updates like these, you'll be able to stay focused as you push towards the finishing line.",
    price: 12000,
    discontinued: false,
    categories: ["SNK-MEN"]
  },

  {
    id: "10126",
    title: "Jordan Delta 3",
    description:
      "Combining high-end craft with high-tech features, the Jordan Delta 3 lets you rep courtside to club. With Formula 23 underfoot, Jordan's signature foam, it delivers performance cushioning that's got you covered from lay-up to errand to swanky, make-those-reservations-now restaurants. Airy Ripstop lends urban appeal, while soft suede and organic design lines keep it classic and easy to style. Its zonal midfoot padding and plush collar add that luxury feel which makes them ideal for—well, any time. We've got you covered—mind, body and soul.",
    price: 19000,
    discontinued: false,
    categories: ["SNK-MEN"]
  },

  {
    id: "10127",
    title: "Nike Metcon 7 AMP",
    description:
      "The Nike Metcon 7 AMP is the gold standard for weight training—even tougher and more stable than previous versions. We've also added React foam that ups the comfort to keep you ready for high-intensity cardio. Plus, a tab locks down your laces so you can forget about them coming untied when you're focused on your next PR.",
    price: 18000,
    discontinued: false,
    categories: ["SNK-MEN"]
  },

  {
    id: "10128",
    title: "Air Kukini SE",
    description:
      "Casual meets technical with the Air Kukini. Inspired by its connection to triathlons, its stretchy neoprene-like fabric gets updated with a gradient colour design that symbolises the movement between water and land. The webbed support system adds a sporty touch, while visible Air cushioning puts the cherry on the bottom for this boundary-pushing paradox.",
    price: 16000,
    discontinued: false,
    categories: ["SNK-MEN"]
  },

  {
    id: "11123",
    title: 'Kyrie Low 5 Community "Jewell Loyd"',
    description:
      "Kyrie twists defenders into knots using his footwork and ball handling, creating the space he needs to make the play. Made for his quick, crafty game, the Kyrie Low 5 enables players who utilise their speed and multi-directional ability to stay in control, while taking advantage of the separation they create. This design is inspired by the shared goal NBA and WNBA stars have in bringing men's and women's basketball together.",
    price: 16000,
    discontinued: false,
    categories: ["SNK-WOMEN"]
  },

  {
    id: "11124",
    title: "Nike Free Metcon 4",
    description:
      'The Nike Free Metcon 4 combines flexibility with stability to help you get the most out of your training programme. Updated "chain-link" mesh cools and flexes as you speed through agility drills, while support at the midfoot and heel braces you for your heaviest sets in the weight room.',
    price: 16000,
    discontinued: false,
    categories: ["SNK-WOMEN"]
  },

  {
    id: "11125",
    title: "Nike Air Zoom Pegasus 39",
    description:
      "Running is your daily ritual, with every step taking you closer to your personal goal. Let the Nike Air Zoom Pegasus 39 help you ascend to new heights—whether you're training or jogging—with its intuitive design. More lightweight up top than the Pegasus 38 and ideal to wear in any season, it has a supportive sensation to help keep your feet contained, while underfoot cushioning and double Zoom Air units (1 more than the Peg 38) give you an extra pop to your step. Your trusted workhorse with wings is back. Time to fly.",
    price: 17000,
    discontinued: false,
    categories: ["SNK-WOMEN"]
  },

  {
    id: "11126",
    title: "Nike Air Force 1 PLT.AF.ORM",
    description:
      "Let classic, easy-to-wear AF-1 style rise to the occasion with the Nike Air Force 1 PLT.AF.ORM. Its elegantly shaped and lifted midsole delivers a proud, new voice to the hoops franchise. The leather on the upper breaks in easily and ages to soft perfection while the sculpted collar and pillowy heel keep it comfy. Captivate your audience.",
    price: 14500,
    discontinued: false,
    categories: ["SNK-WOMEN"]
  },

  {
    id: "11127",
    title: "Nike Air Max 270 G",
    description:
      "Look legendary in the Nike Air Max 270 G. The silhouette is a stitch-for-stitch reconstruction of the original big Air icon, with the addition of breathable mesh and innovative traction that performs at the highest level of play.",
    price: 19500,
    discontinued: false,
    categories: ["SNK-WOMEN"]
  },

  {
    id: "11128",
    title: "LeBron 19 Low",
    description:
      "LeBron plays less in the paint and more at the point, so it makes sense that he wants to feel a little quicker. His 19th signature gives you the feeling of containment but with a lower, lighter design that's ideal for fast, strong players like LeBron who stretch the court.",
    price: 21000,
    discontinued: false,
    categories: ["SNK-WOMEN"]
  },

  {
    id: "12123",
    title: "Nike Dynamo Go",
    description:
      "Easy, snug and built for play any time—the Nike Dynamo Go will be your little one's next fave. What we love most is that kiddos can stomp down on the collapsible heel and slip in quick and easy. And if they're not quite ready to do it themselves, you can show them how it works so they can be free and independent! It's also soft and plush in the best places, so the fun never stops.",
    price: 7500,
    discontinued: false,
    categories: ["SNK-CHILDREN"]
  },

  {
    id: "12124",
    title: "Nike Omni Multi-Court",
    description:
      "What's Omni, you ask? It means universal, inclusive and all. Durable and lightweight so moving fast is easy, these are the ultimate break-time shoe. And volleyball shoe. And tennis shoe. And handball shoe. And adventure shoe!",
    price: 7000,
    discontinued: false,
    categories: ["SNK-CHILDREN"]
  },

  {
    id: "12125",
    title: "Nike Air Max INTRLK Lite",
    description:
      "Who doesn't love a new Air Max experience? The Nike Air Max INTRLK Lite reshapes your favourite Air cushioning with a smooth and comfy feel. This lightweight shoe is super easy, durable and versatile for all of your needs, and flips the page into another evolution of our Air Max story.",
    price: 8000,
    discontinued: false,
    categories: ["SNK-CHILDREN"]
  },

  {
    id: "12126",
    title: "Nike Blazer Mid '77",
    description:
      "Channel the old-school look of Nike Basketball in the Nike Blazer Mid '77. Throwback style (check out the vintage finish on the midsole) and modern materials mean you can run, skip and jump in comfort. A transparent Swoosh design reveals a swoop of colour underneath for a fun painted effect, making these a fun complement to your art projects.",
    price: 11000,
    discontinued: false,
    categories: ["SNK-CHILDREN"]
  },

  {
    id: "12127",
    title: "Nike Air Max 90 LTR",
    description:
      "The Nike Air Max 90 LTR returns with an even better feel for you. Cushioning is softer and more flexible, the Max Air unit is tuned for growing feet and the shape gives your toes more wiggle room. With a design and look that are still the same, it brings a '90s fave to a new generation.",
    price: 12000,
    discontinued: false,
    categories: ["SNK-CHILDREN"]
  },

  {
    id: "12128",
    title: "Nike Air Force 1",
    description:
      "There's a reason the Nike AF-1 continues to be legendary. First seen on basketball courts in the '80s, they quickly took over streets and playgrounds to become a sneaker icon. Smooth durable synthetic leather, Nike Air cushioning and nothing-but-net style give these the same classic look and feel as the original. Could they be your new all-time fave?",
    price: 12000,
    discontinued: false,
    categories: ["SNK-CHILDREN"]
  },

  {
    id: "10456",
    title: "Nike ZoomX Streakfly",
    description:
      "One of our lightest racing shoes, the Nike ZoomX Streakfly is all about the speed you need to take on the competition in a mile, 5K or 10K race. Low-profile with sleek details, it feels like it disappears on your foot to help you better connect with the road on the way to your personal best. This electric design is inspired by the soul and rebellious spirit of Eugene, Oregon—TrackTown USA—where contenders from all over the world test themselves against the globe's greatest athletes.",
    price: 21000,
    discontinued: false,
    categories: ["SNK-MEN"]
  },

  {
    id: "13457",
    title: "Nike Metcon 7",
    description:
      "The Nike Metcon 7 is the gold standard for weight training—even tougher and more stable than previous versions.We've also added React foam that ups the comfort to keep you ready for high-intensity cardio.Plus, a tab locks down your laces so you can forget about them coming untied when you're focused on your next PR.",
    price: 17000,
    discontinued: false,
    categories: ["SNK-MEN", "SNK-WOMEN"]
  },

  {
    id: "11456",
    title: "Nike Air Force 1 LO '07",
    description:
      "The radiance lives on in the Nike Air Force 1 LO '07. Crossing hardwood comfort with off-court flair, they put a fresh spin on what you know best: crisp leather, '80s construction, bold details and nothing-but-net style. A double Swoosh logo helps add just the right amount of flash to make you shine.",
    price: 14500,
    discontinued: false,
    categories: ["SNK-WOMEN"]
  },

  {
    id: "11457",
    title: "Nike Waffle 1 SE",
    description:
      "Waffles aren't just for breakfast any more—you'll want to wear these kicks 'til dinnertime. We paired our now-iconic Waffle outsoles with fresh details, like a bold double Swoosh, tumbled leather and an exaggerated heel clip. Meanwhile, new moulded lugs give you even more support in every step.",
    price: 15000,
    discontinued: false,
    categories: ["SNK-WOMEN"]
  }
];
