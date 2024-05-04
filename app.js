
// This Project is running on -> https://project-byte.onrender.com/   

                        if (process.env.NODE_ENV != "production") {
                          require('dotenv').config();
                        }

                        const express = require('express')
                        var bodyParser = require("body-parser")
                        var mongoose = require("mongoose")
                        const app = express()
                        const path = require('path');
                        const multer = require('multer');
                        const { storage } = require("./cloudConfig.js");
                        const upload = multer({ storage });


                        app.use(bodyParser.json())
                        app.set("view engine", "ejs");
                        app.use(express.static('./public'));
                        app.use(bodyParser.urlencoded({
                          extended: true
                        }))



                        app.get('/', function (req, res) {
                          res.render("index");
                        })

                        app.get('/index', function (req, res) {
                          res.render("index");
                        })

                        app.get('/contact', function (req, res) {
                          res.render("contact");
                        })
                        app.get('/blog', function (req, res) {
                          res.render("blog");
                        })

                        app.get('/service', function (req, res) {
                          res.render("service");
                        })
                        app.get('/about', function (req, res) {
                          res.render("about");
                        })
                        app.get('/hire', function (req, res) {
                          res.render("hire");
                        })
                        app.get('/apply', function (req, res) {
                          res.render("apply");
                        })

                        const dbUrl = process.env.ATLASDB_URL;
                        mongoose.connect(dbUrl)

                        var db = mongoose.connection
                        db.on('error', () => console.log("Error in Connecting to Database"))
                        db.once('open', () => console.log("Connected to Database"))


                        app.listen(process.env.PORT, () => {
                          console.log("Server is running on port 3002");
                        });











                      app.post("/msg_received", (req, res) => {
                        var name = req.body.name
                        var email = req.body.email
                        var address = req.body.address
                        var phno = req.body.phno
                        var subject = req.body.subject
                        var description = req.body.description

                        var data = {
                          "name": name,
                          "address": address,
                          "email": email,
                          "phno": phno,
                          "subject": subject,
                          "description": description
                        }

                        db.collection('contact-form').insertOne(data, (err, result) => {
                          if (err) {
                            console.error('Error inserting data:', err);
                            return res.status(500).send('Error inserting data');
                          }
                          console.log("Record Inserted Successfully");

                        });
                        return res.render('contact', {
                          flag: true
                        });
                      });



                      app.post("/form_submitted", upload.single('file'), (req, res) => {
                        var fname = req.body.first_name
                        var lname = req.body.last_name
                        var email = req.body.email
                        var phone = req.body.phone
                        var job_role = req.body.job_rol;
                        var portfolio_link = req.body.link
                        var address = req.body.address
                        var city = req.body.city
                        var pin = req.body.pin
                        var cv_file = req.file;

                        var data = {
                          "fname": fname,
                          "lname": lname,
                          "email": email,
                          "phone": phone,
                          "job_role": job_role,
                          "portfolio": portfolio_link,
                          "address": address,
                          "city": city,
                          "pin": pin,
                          "cv_file": cv_file
                        }

                        db.collection('apply-form').insertOne(data, (err, result) => {
                          if (err) {
                            console.error('Error inserting data:', err);
                            return res.status(500).send('Error inserting data');
                          }
                          console.log("Record Inserted Successfully");
                        });

                        return res.render('apply', {
                          flag: true
                        });
                      });








app.get('/Work/:content', function (req, res) {
  let content = req.params.content;
  let data;

  if (content === 'a') {
    data = {
      title: 'PREPLAY',
      description: 'Realply Industries is a premier natural veneer brand setting a precedent for excellence by manufacturing impressive and elegant natural veneers and plywood, utilizing superior quality raw materials, sourced from across the globe.',
      service1: 'Packaging Design',
      service2: 'Brand Identity',
      team1: ['Aditya', 'Priyanka Singh', 'Ramesh Chandra Singh'],
      team2: ['Riya Malhotra', 'Mohan Ram'],
      details1: "Despite being a major player in the industry, Realply struggled to differentiate itself from its competitors, leading to a lack of brand distinction and recognition. The company's visual identity and messaging resembled those of its competitors, causing confusion among potential customers and limiting its ability to stand out in the market.",
      details2: "Effectively communicate its USP to its target market and develop brand awareness in a way that makes Realply a household name.",
      details3: "The first step was to conduct in-depth research to gain a deep understanding of the market, competitors, and the unique strengths of Realply. This research served as the foundation for defining the company's brand positioning, helping them articulate their USP in a compelling way. To create a strong brand presence, ByteTabs implemented a marketing strategy that leveraged digital platforms, industry events, and targeted advertising campaigns. The strategy focused on highlighting Realply's unique offerings, sustainable practices, and the value they bring to their customers.",

    };
  } else if (content === 'b') {
    data = {
      title: 'MOTI MAHAL',
      description: "Moti Mahal, a culinary gem, is nestled in the vibrant city of Jodhpur, Rajasthan. This renowned restaurant is a testament to the rich culinary heritage of Rajasthan, offering a delightful array of traditional Indian dishes that capture the essence of the region's flavors and spices. With a history as rich as its dishes, Moti Mahal in Jodhpur is a must-visit destination for those seeking an authentic and memorable dining experience in the heart of Rajasthan.",
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "Moti Mahal, a legacy Indian food restaurant, faced challenges in modernizing its brand to stay relevant in a competitive market. Despite its rich history and culinary expertise, Moti Mahal struggled to differentiate itself and connect with a younger, more contemporary audience. The restaurant needed a brand overhaul to appeal to a new generation of diners while maintaining its traditional charm and authenticity.",
      details2: "The goal was to redesign Moti Mahal's brand identity to reflect its legacy and culinary excellence while appealing to a modern audience. The restaurant aimed to reposition itself as a vibrant and contemporary dining destination, offering a blend of traditional Indian flavors with a modern twist. The objective was to revitalize the brand to attract a wider range of customers and compete effectively in the evolving food industry landscape.",
      details3: "ByteTabs collaborated with Moti Mahal to create a new brand identity that honored its heritage while embracing modernity. The new identity incorporated elements of Indian culture and cuisine in a fresh and contemporary design. The logo and visual elements were inspired by traditional Indian motifs and colors, creating a cohesive and visually appealing brand image. In addition to the visual identity, ByteTabs worked with Moti Mahal to revamp its menu offerings and restaurant ambiance to align with its new brand positioning. The restaurant introduced innovative dishes and modern dining experiences while retaining its signature flavors and traditional recipes. This approach helped Moti Mahal attract a broader customer base and establish itself as a modern yet authentic Indian dining destination.",
    };
  }
  else if (content === 'c') {
    data = {
      title: 'ASSEMBLY',
      description: "Assembly aims to be the go-to travel store when it comes to anything travel-related. Assembly's catalog symbolizes the epitome of functional yet minimal design that is versatile in any part of life, just like you. We've worked on strategizing an identity for Assembly that seamlessly blends in with the versatility of its line of products to enhance & elevate the brand even further. We've worked on strategizing an identity for Assembly that seamlessly blends in with the versatility of its line of products to enhance & elevate the brand even further.",
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "Assembly Travel aims to redefine travel by making the experience of traveling memorable & hassle-free. Assembly believes that their products enhance people's journeys by being purposeful in functionality & aesthetics. For this reason, Assembly needs to establish its identity in the luggage industry by being truthful to its core values.",
      details2: "Our goal was to help Assembly identify areas of opportunity that would help in establishing them as an authentic & impactful luggage brand in a competitive market.",
      details3: "Our approach was rather simple: Assemble the foundations and core values of a brand that seemed to have lost its way on the journey. We did so by conversing a lot, we mean, a LOT. Our countless discussions, both with Assembly and internally, led us to identify a gap in the market: The absence of a luggage brand that resonated with an audience that was ever-so frustrated with the stigma around traveling to their destinations.",
    };
  }

  else if (content === 'd') {
    data = {
      title: 'RIDO SPORTS',
      description: 'Rido Sports is a sports equipment manufacturing brand in India with more than three decades of industry experience. It not only offers international quality sports equipment at competitive prices but also specializes in providing turfs for sports such as Basketball, Volleyball, Tennis etc. Rido Sports reached out to us for a complete Brand Overhaul.',
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "Rido Sports, despite its legacy and expertise, struggled to establish itself as a leading expert in the sports equipment industry, particularly with modern customers. This disconnect hindered its ability to connect effectively with its target audience and potential customers, necessitating a comprehensive rebranding effort.",
      details2: "The primary objective was to revamp Rido Sports' brand image and perception, positioning it as a top-tier provider of quality sports equipment in India. This involved conducting a thorough brand audit, customer research, and developing a new brand strategy, including brand purpose and positioning, to align with the company's vision and goals. Additionally, the goal was to create a cohesive brand identity and online presence through a redesigned website and updated marketing collateral.",
      details3: "ByteTabs undertook a meticulous process to reinvent Rido Sports, starting with a comprehensive discovery and alignment session to understand the company's history, values, and aspirations. This laid the groundwork for identifying the brand's unique selling points and setting short-term and long-term goals. Through discussions with employees and stakeholders, ByteTabs defined Rido Sports' brand purpose, including its vision, mission, and values.",
    };
  }
  else if (content === 'e') {
    data = {
      title: 'PRRATHAM',
      description: 'Pratham, a building project by famously reknowned Devika Builders is a luxurious take on a religious rest stop to shift the perspective in most devoted minds.',
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "Devika Builders is one of the oldest builders in India with its legacy dating back to 1956. The task was to develop a brand identity for its commercial project in Vrindavan - a project that is to be positioned as a combination of a rest stop and a luxury stay.",
      details2: "The rest stop to attract modern customers while also increasing the footfall of religious pilgrims in a community where luxury is usually looked down upon.",
      details3: "Building a brand identity that communicates the kind of premium that the person can feel comfortable with and can look at it as a way of taking care of their loved ones. The additional assets include a brochure and a coffee table book that communicate the information required by the target audience like information about Vrindavan, new developments, and amenities.",
    };
  }
  else if (content === 'f') {
    data = {
      title: 'GRANDEUR INTERIORS',
      description: "Grandeur, is more than just a design company. Picture them as a close-knit family of over 50 passionate souls, all united by a common mission – to redefine luxury living, one stunning residence at a time.  The primary goal is to overhaul the website to seamlessly translate the essence of the Grandeur's state of art work into the digital domain.",
      service1: 'Brand Identity',
      service2: 'Packaging Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "Grandeur sought to revamp its website to reflect its commitment to redefining luxury living through exceptional design. The challenge was to create a digital platform that captured the essence of Grandeur's work and ethos, showcasing their expertise and dedication to crafting stunning residences..",
      details2: "The primary goal was to overhaul Grandeur's website to seamlessly translate the essence of their state-of-the-art work into the digital domain. The website needed to reflect Grandeur's core principles and rich legacy while showcasing their contemporary aesthetics and unwavering commitment to clients.",
      details3: "ByteTabs worked closely with Grandeur to design a website that captured the essence of their work. The website's design focused on contemporary aesthetics, showcasing Grandeur's rich legacy and commitment to excellence. One of the key features was an on-scroll experience that highlighted the seamless transition between the outer and inner realms of wardrobes and kitchens, emphasizing the importance of attention to detail in Grandeur's designs. This approach helped create a digital space that not only showcased Grandeur's work but also engaged visitors and encouraged them to explore further.",
    };
  }
  else if (content === 'g') {
    data = {
      title: 'NIGHTOWL',
      description: 'NightOwl is a sleepwear brand based in Barcelona, Spain. We collaborated with NightOwl to redesign their identity to help them connect with their customers and tell their story.',
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "NightOwl faced challenges in standing out in the competitive garments market, especially with the impact of COVID-19. Despite gaining street credibility with two brick-and-mortar stores, the founders recognized the need to elevate their brand to compete with established players like Inditex.",
      details2: "The goal was to rebrand NightOwl to reflect its unique positioning in the market. NightOwl aimed to offer sleepwear that was stylish yet tasteful, quirky but not over-the-top, and affordable without compromising on quality. The objective was to revamp the brand's identity and packaging to better resonate with customers and differentiate itself from traditional, uninspiring nightwear designs.",
      details3: "ByteTabs collaborated with NightOwl to redesign its identity, focusing on storytelling and customer connection. Recognizing the brand's desire to disrupt the sleepwear market with its fresh approach, ByteTabs created a new brand identity and packaging design that reflected NightOwl's unique positioning. By infusing elements of snazziness, eccentricity, and affordability into the brand's visual identity, ByteTabs helped NightOwl stand out in a crowded market. The new identity and packaging design not only resonated with NightOwl's target audience but also garnered recognition, as evidenced by the brand being featured as one of The Best Fashion Logo Designs by DesignRush in 2023.",
    };
  }
  else if (content === 'h') {
    data = {
      title: 'SKIN CO.',
      description: 'Manicure, Pedicure, and Facial kits were introduced under a brand called Skin Co. by the owner of Monsoon Salons aiming to expand their reach and offer something extra to their walk-in customers.',
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "Monsoon Hair Salon identified a gap in its product offerings concerning walk-in customers. Additionally, they aimed to expand their reach to affluent individuals in Tier 2 and Tier 3 cities in India by creating a new brand called SkinCO - manicure and pedicure kits.",
      details2: "To establish SkinCo as a luxury brand catering to the needs of walk-in customers and affluent consumers in Tier 2 and Tier 3 cities in India, with elements to make them fit in with their European market competitors.",
      details3: "After various conceptualized variations including illustrations etc, the team decided to finalize the approach that incorporated floral designs to convey nature-inspired luxury and sophistication. The color of the packaging emphasizes aspirational indulgence, appealing to affluent consumers in Tier 2 and Tier 3 cities in India.",
    };
  }
  else if (content === 'i') {
    data = {
      title: '3D NEST',
      description: '3D Nest is a 3D printing service provider based out of New Delhi. The 3D Printing space in India at the lower end is very competitive compared to a handful of experts that work across different technologies. 3D Nest is one such expert service provider. We collaborated with 3D Nest to create a brand for them.',
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "3D Nest faced challenges in differentiating itself in the competitive Indian 3D printing market. They struggled to visually communicate their expertise and unique positioning to their target audience, hindering their ability to stand out from the crowd.",
      details2: "The goal was to create a distinctive brand identity for 3D Nest that would effectively convey their expertise in additive manufacturing. They aimed to position themselves as experts in 3D printing technology, setting them apart from the competition. Additionally, they sought to optimize their packaging for 3D printing filaments to reduce costs and improve efficiency.",
      details3: "ByteTabs collaborated with 3D Nest to create a brand identity that reflected the essence of additive manufacturing. The logo design, inspired by the nozzle of a 3D printer, symbolized the process of layer-by-layer material addition. The name '3D Nest' was chosen to evoke the image of a bird building its nest, akin to how 3D printing builds objects layer by layer. For the packaging of their filaments, ByteTabs suggested a cost-effective solution. Instead of printing all the variations of filament colors and sizes on the packaging, they recommended printing only the essential information that would appear on every box. Additional details could be included on a sticker, which would partly cover one side of the package, serving as a seal and making it easier for 3D Nest to identify the required filament color. This approach helped 3D Nest reduce packaging costs while maintaining efficiency in handling different filament variations.",
    };
  }
  else if (content === 'j') {
    data = {
      title: 'IMS - DIA',
      description: 'After various conceptualized variations including illustrations etc, the team decided to finalize the approach that incorporated floral designs to convey nature-inspired luxury and sophistication. The color of the packaging emphasizes aspirational indulgence, appealing to affluent consumers in Tier 2 and Tier 3 cities in India.',
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "Established in 2005 and part of the Unison world group, IMS Design School always set itself as the innovator. However, due to challenges with board and course certifications, they were never able to establish a name for themselves.",
      details2: "Position IMS as innovators at a Global level.",
      details3: "The goal was to ignite passion & impart the knowledge & experience required to become world-class creators. The rebranding for IMS Design School was a playful, colorful yet minimal approach aligning perfectly with DIA’s tagline ‘Dream, Dare, Design’",
    };
  }
  else if (content === 'k') {
    data = {
      title: 'KAFIN',
      description: 'A cafe that resonates with the bright and lively street culture of Hong Kong, a chill hangout place in the heart of the city with their ambiance bringing a modern Western twist while staying true to their Cantonese roots.',
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "In the bustling metropolis of Hong Kong, there is a lack of cafes that fully capture the essence of the city's dynamic and vibrant street culture, while also resonating with the growing demand for artisanal coffee. The challenge is to create a brand that blends the allure of modern coffee with lively street art and neon colors that paint the city with life while remaining rooted in the traditional Cantonese culture.",
      details2: "Establish a captivating modern cafe brand rooted in Cantonese culture and street art, resonating with coffee enthusiasts.",
      details3: "Create a brand that represents an urban fusion of Hong Kong's vibrant street culture and the evolving artisanal coffee scene. The goal is to curate a captivating experience that seamlessly blends modern coffee artistry with the rich heritage of Cantonese culture. The visual identity of Kafin would showcase a mix of Cantonese-inspired design elements, drawing inspiration from street art and neon lights while incorporating traditional Cantonese motifs. The logo would be a play on the script.",
    };
  }
  else if (content === 'l') {
    data = {
      title: 'THE SELF CENTER',
      description: 'A holistic life coaching, mindfulness, and wellness studio based in Gurgaon with a need to bring awareness about self care to as many people as they can with a goal to help people reach their ultimate potential.',
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "The Self Center, a holistic life coaching page targeting a slightly premium audience, faced the challenge of carving a unique space in the competitive life coaching industry. While there is a growing demand for life coaching services, the market is saturated with numerous providers offering similar services. The Self Center needed to differentiate itself and establish a distinctive identity that would resonate with its target audience.",
      details2: "Clearly communicate the uniqueness of their approach and the value they bring to their clients as a one-of-a-kind life coaching platform.",
      details3: "Impart information that our audience might often get wrong amidst all the confusion regarding mental health and self-care in the modern world. Positioning ourselves as a one-of-a-kind holistic wellness center with flexible schedules and a supportive community was our top priority to meet the challenges faced by The Self Center.",
    };
  }
  else if (content === 'm') {
    data = {
      title: 'Shimona',
      description: 'A holistic life coaching, mindfulness, and wellness studio based in Gurgaon with a need to bring awareness about self care to as many people as they can with a goal to help people reach their ultimate potential.',
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "The Self Center, a holistic life coaching page targeting a slightly premium audience, faced the challenge of carving a unique space in the competitive life coaching industry. While there is a growing demand for life coaching services, the market is saturated with numerous providers offering similar services. The Self Center needed to differentiate itself and establish a distinctive identity that would resonate with its target audience.",
      details2: "Clearly communicate the uniqueness of their approach and the value they bring to their clients as a one-of-a-kind life coaching platform.",
      details3: "Impart information that our audience might often get wrong amidst all the confusion regarding mental health and self-care in the modern world. Positioning ourselves as a one-of-a-kind holistic wellness center with flexible schedules and a supportive community was our top priority to meet the challenges faced by The Self Center.",
    };
  }
  else if (content === 'n') {
    data = {
      title: 'AIRE',
      description: 'A handmade agriculture-based brand, with their primary shelf consisting of pickles and chutneys as a celebration for recipes that have been passed down for generations.',
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "Cordet, a subdivision of IFFCO was hoping to find a market for its new handmade agriculture-based products. The goal was 2 fold, on one hand, they wanted to uplift and empower women in the rural sector, on the other they wanted to preserve the old forgotten recipes of India.",
      details2: "Makin sure the brand they launch is successful in the metros with a modern touch to old forgotten recipes.",
      details3: "Highlighting the journey from rural kitchens to urban shelves, the branding celebrated the diverse flavors and traditions that encompassed Indian cuisine. The packaging design played a crucial role in capturing the essence of 'Lost Recipes.' Using traditional patterns and illustrations inspired by Indian folk art, attracting the attention of consumers seeking unique and culturally enriched products. The use of earthy and natural tones reflected the handmade nature of the products and their agricultural origins.",
    };
  }
  else if (content === 'o') {
    data = {
      title: 'Begam',
      description: 'A holistic life coaching, mindfulness, and wellness studio based in Gurgaon with a need to bring awareness about self care to as many people as they can with a goal to help people reach their ultimate potential.',
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "The Self Center, a holistic life coaching page targeting a slightly premium audience, faced the challenge of carving a unique space in the competitive life coaching industry. While there is a growing demand for life coaching services, the market is saturated with numerous providers offering similar services. The Self Center needed to differentiate itself and establish a distinctive identity that would resonate with its target audience.",
      details2: "Clearly communicate the uniqueness of their approach and the value they bring to their clients as a one-of-a-kind life coaching platform.",
      details3: "",
    };
  }

  else if (content === 'p') {
    data = {
      title: 'THREE KINGS',
      description: 'It’s no secret that the hype culture in India is on the rise, and with hype culture, comes a sneakerhead community that is truly, madly dedicated to this one thing they love to wear, protect and collect: Sneakers. Three KIngs, a platform with a dedicated team of individuals with love and passion for sneakers, aims to spread and infuse this culture into every street of India.',
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "In a crowded market, where a lot of huge players are already doing phenomenal business, the main challenge for Three Kings was to stand out. Being a new brand, it was essential for them to reach the right audience at the right time to be able to compete with established brands by leveraging social media to their advantage while staying true to their core passion.",
      details2: "Our objective was to elevate Three Kings brand presence on social media platforms, cultivate a loyal community of sneaker enthusiasts, and position the brand as the go-to destination for exclusive sneaker releases in India.",
      details3: "A market where it’s all about selling and reselling, offers and drops, a true weapon in our favour was truly leveraging the love and passion for the culture. With our social media posts, we aimed to give every sneaker an identity of their own, while keeping a holistic language for the entire brand.",
    };
  }
  else if (content === 'q') {
    data = {
      title: 'LOST RECIPIES',
      description: 'A handmade agriculture-based brand, with their primary shelf consisting of pickles and chutneys as a celebration for recipes that have been passed down for generations.',
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Aman', 'Riya Singh', 'Mahesh Pratap'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "Cordet, a subdivision of IFFCO was hoping to find a market for its new handmade agriculture-based products. The goal was 2 fold, on one hand, they wanted to uplift and empower women in the rural sector, on the other they wanted to preserve the old forgotten recipes of India.",
      details2: "Makin sure the brand they launch is successful in the metros with a modern touch to old forgotten recipes.",
      details3: "Highlighting the journey from rural kitchens to urban shelves, the branding celebrated the diverse flavors and traditions that encompassed Indian cuisine. The packaging design played a crucial role in capturing the essence of 'Lost Recipes.' Using traditional patterns and illustrations inspired by Indian folk art, attracting the attention of consumers seeking unique and culturally enriched products. The use of earthy and natural tones reflected the handmade nature of the products and their agricultural origins.",
    };
  }

  else if (content === 'r') {
    data = {
      title: 'GREEN GRATITUDE',
      description: 'An ecommerce platform, with sustainable and earth-friendly products offered on the platform. Currently, in their awareness phase on Instagram, Green Gratitude strives to bring a change by spreading education about sustainability unlike any other platform.',
      service1: 'Video Editing',
      service2: 'Website Design',
      team1: ['Yatin Savlani', 'Riya Singh', 'Harsh Gupta'],
      team2: ['Akash Mani', 'Rajkumar'],
      details1: "Green Gratitude, a sustainable e-commerce platform, faces the challenge of establishing its presence and gaining recognition in a competitive market. As a brand that is yet to release its products, it needs to find a way to engage with its target audience and build anticipation for its sustainable platform.",
      details2: "Creating a marketing strategy that not only generates buzz around the upcoming launch but also resonates with potential customers, highlighting the brand's values and mission.",
      details3: "Instagram's visual nature provides an opportunity to showcase the eco-friendly materials and practices used in the products. Another effective approach was to collaborate with eco-conscious brands that align with Green Gratitude's values to capture the attention of sustainable brands in the market as a way of teasing the e-commerce platform. To educate and inspire followers, we also created informative content on sustainable living, eco-friendly tips, and the importance of making conscious choices in everyday life.",
    };
  }



  res.render("work", data);
});
