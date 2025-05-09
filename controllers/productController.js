const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        products
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        product
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Product not found'
    });
  }
};

exports.seedProducts = async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: "Moist-1",
        price: 3,
        imageUrl: "https://i.postimg.cc/fyYn7fJG/Moist-1.jpg",
        description: "Deep hydrating facial cream that provides 24-hour moisture. Formulated with hyaluronic acid to plump skin and reduce fine lines. Perfect for all skin types, especially dry and sensitive skin."
      },
      {
        name: "Alejon Body Milk",
        price: 6,
        imageUrl: "https://i.postimg.cc/fbQdBw21/Alejon-Body-Milk.jpg",
        description: "Luxurious body milk that absorbs quickly without greasy residue. Enriched with shea butter and almond oil to nourish and soften skin. Leaves a delicate, long-lasting fragrance."
      },
      {
        name: "Shaan Body Milk",
        price: 4,
        imageUrl: "https://i.postimg.cc/VsZb29Zq/Shaan-Body-Milk.jpg",
        description: "Lightweight daily moisturizer with vitamin E and aloe vera. Provides essential hydration while improving skin elasticity. Gentle enough for sensitive skin and all ages."
      },
      {
        name: "VitoCare Whitening Cream",
        price: 5,
        imageUrl: "https://i.postimg.cc/cH9ryZhx/Vitocare.jpg",
        description: "Advanced skin brightening cream that reduces dark spots and evens skin tone. Contains natural ingredients like licorice extract and vitamin B3 to inhibit melanin production."
      },
      {
        name: "Veet Cream",
        price: 2,
        imageUrl: "https://i.postimg.cc/VLb5TxCw/Veet.jpg",
        description: "Gentle hair removal cream that dissolves hair at the root without irritation. Enriched with almond oil and vitamin E to leave skin smooth. Works in just 3-6 minutes."
      },
      {
        name: "Moroccan Oil Bath Soap",
        price: 5,
        imageUrl: "https://i.postimg.cc/MGzTnXrZ/Moroccan-oil-bath-soap.jpg",
        description: "Premium cleansing bar infused with authentic argan oil. Creates a rich lather that cleanses without stripping natural oils. Leaves skin supple with a subtle exotic fragrance."
      },
      {
        name: "Bio Soft Aloe Vera",
        price: 2,
        imageUrl: "https://i.postimg.cc/BZR2Xc5q/Aloe-Vera.jpg",
        description: "Pure aloe vera gel with 99% natural ingredients. Soothes sunburns, reduces inflammation, and provides instant hydration. Can be used on face, body, and hair."
      },
      {
        name: "Leylak Sun Screen",
        price: 6,
        imageUrl: "https://i.postimg.cc/d0Wyv8tc/Leylak-sun-screen.jpg",
        description: "Broad spectrum SPF 50+ PA+++ sunscreen with lightweight texture. Protects against UVA/UVB rays while preventing premature aging. Water-resistant formula ideal for outdoor activities."
      },
      {
        name: "Infinity",
        price: 5,
        imageUrl: "https://i.postimg.cc/C58BjXCw/Infinity.jpg",
        description: "Anti-aging night cream that boosts collagen production. Reduces appearance of wrinkles while you sleep. Contains retinol alternative and peptides for firmer-looking skin."
      },
      {
        name: "Alejon Sun Screen",
        price: 6,
        imageUrl: "https://i.postimg.cc/8CC7yjdK/Alejon-Sun-Screen.jpg",
        description: "Matte finish sunscreen with SPF 30 perfect for daily wear. Controls shine while protecting against sun damage. Non-comedogenic formula won't clog pores."
      },
      {
        name: "Shaan Rejuvenation Cream",
        price: 3,
        imageUrl: "https://i.postimg.cc/B6rtQprk/SHAAN-Rejuvenation-Cream.jpg",
        description: "Nighttime recovery cream with botanical extracts that work while you sleep. Helps repair daily environmental damage and restore skin's natural glow."
      },
      {
        name: "Alejon Facial Moisturizer gel",
        price: 3,
        imageUrl: "https://i.postimg.cc/hGhGLNgN/Alejon-Facial-Moisturizer.jpg",
        description: "Oil-free gel moisturizer ideal for combination and oily skin types. Provides hydration without heaviness. Contains green tea extract to soothe and reduce redness."
      },
      {
        name: "Eva Vitamin-A Serum",
        price: 3,
        imageUrl: "https://i.postimg.cc/T2n3JVM2/Eva-vitamin-A-serum.jpg",
        description: "Anti-aging serum with encapsulated retinol that releases gradually. Stimulates cell turnover to reduce fine lines and improve skin texture. Formulated to minimize irritation."
      },
      {
        name: "Ordinary Niacinamide Serum",
        price: 12,
        imageUrl: "https://i.postimg.cc/xCMng2Zp/Ordinary-niacinamide-serum.jpg",
        description: "10% niacinamide serum that visibly reduces blemishes and congestion. Minimizes pores while strengthening skin barrier. Zinc PCA helps control excess sebum."
      },
      {
        name: "Leylak Hyalo-C Serum",
        price: 7,
        imageUrl: "https://i.postimg.cc/GmfRCtwS/Leylak-vitamin-c-serum.jpg",
        description: "Brightening serum combining 15% vitamin C with hyaluronic acid. Fades dark spots while providing intense hydration. Antioxidant protection against environmental damage."
      },
      {
        name: "Shaan Lip Balm",
        price: 2,
        imageUrl: "https://i.postimg.cc/TwXZdWkQ/Shaan-Lip-Balm.jpg",
        description: "Moisturizing lip treatment with SPF 15 protection. Contains beeswax and coconut oil to heal chapped lips. Available in untinted and lightly tinted versions."
      },
      {
        name: "Amanda Lip Balm",
        price: 1,
        imageUrl: "https://i.postimg.cc/9F41kQbf/Amanda-Lip-Care.jpg",
        description: "Basic lip balm with natural ingredients for everyday hydration. Smooth application without stickiness. Pocket-friendly size for on-the-go use."
      },
      {
        name: "Eva Lip Balm",
        price: 2,
        imageUrl: "https://i.postimg.cc/CK0NdHgZ/Eva-Lip-Care.jpg",
        description: "Tinted lip balm that enhances natural lip color while moisturizing. Provides sheer, buildable color with a glossy finish. Enriched with vitamin E."
      },
      {
        name: "Bobana Lip Balm",
        price: 2,
        imageUrl: "https://i.postimg.cc/sxMPbTpL/Bobana-Lip-Balm.jpg",
        description: "Fun, flavored lip balms in fruity varieties. Provides light moisture with delicious scents. Paraben-free formula safe for frequent use."
      },
      {
        name: "Laneige Lip Sleeping Mask",
        price: 8,
        imageUrl: "https://i.postimg.cc/q7pspJsy/Laneige-lip-sleeping-mask.jpg",
        description: "Overnight lip mask that intensely hydrates dry lips. Berry extract complex and moisturizing agents work while you sleep. Wake up to noticeably smoother lips."
      },
      {
        name: "Axis-Y Dark Spot Serum",
        price: 18,
        imageUrl: "https://i.postimg.cc/nr973Cxb/Axis-Y-Dark-Spot.jpg",
        description: "Korean-inspired dark spot corrector with natural brightening ingredients. Contains 5% niacinamide and licorice root extract to fade hyperpigmentation gradually."
      },
      {
        name: "Snow-White Secret Key",
        price: 20,
        imageUrl: "https://i.postimg.cc/13QCNZ05/Secret-Key-Snow-White-Spot-Gel.jpg",
        description: "Korean spot treatment gel with pearl extracts and arbutin. Targets specific dark spots and uneven skin tone. Light texture absorbs quickly without stickiness."
      },
      {
        name: "M&N Highlighter",
        price: 5,
        imageUrl: "https://i.postimg.cc/vTnhcPcV/Highlighter.jpg",
        description: "Cream-to-powder highlighter for a natural glow. Buildable formula works for subtle illumination or intense strobe effect. Long-wearing and non-greasy."
      },
      {
        name: "M&N Blush",
        price: 5,
        imageUrl: "https://i.postimg.cc/284TYKpp/M-N-blush.jpg",
        description: "Pigmented powder blush with silky texture. Blends effortlessly for a natural flush of color. Available in matte and satin finishes."
      },
      {
        name: "Alejon Eye-Contour",
        price: 7,
        imageUrl: "https://i.postimg.cc/XJGcz2Kz/Alejon-Eye-Contour.jpg",
        description: "Targeted eye cream with caffeine and peptides. Reduces puffiness and dark circles while hydrating delicate eye area. Lightweight texture absorbs quickly."
      },
      {
        name: "Sheglam Eye-Brows Soap",
        price: 2,
        imageUrl: "https://i.postimg.cc/RVQ1yJf4/Sheglam-Soap-Brows.jpg",
        description: "Brow styling soap that creates fluffy, laminated brow look. Holds hairs in place all day without flaking. Clear formula works with any brow color."
      },
      {
        name: "Sheglam Jelly",
        price: 7,
        imageUrl: "https://i.postimg.cc/h4VVQQ2T/Sheglam-jelly.jpg",
        description: "Multipurpose makeup jelly for eyes, lips and cheeks. Provides dewy, translucent color that's buildable. Unique bouncy texture feels cooling on skin."
      },
      {
        name: "M&N Lip Stick & Gloss",
        price: 4,
        imageUrl: "https://i.postimg.cc/8cbFKWYY/M-N-Lip-gloss-stick.jpg",
        description: "2-in-1 lip product with moisturizing color stick and high-shine gloss. Coordinating shades can be worn together or separately. Non-sticky formula."
      },
      {
        name: "Amanda Mascara",
        price: 7,
        imageUrl: "https://i.postimg.cc/XvyrMthd/Amanda-Mascara.jpg",
        description: "Lengthening and volumizing mascara with curved brush. Buildable formula doesn't clump. Water-resistant yet removes easily with warm water."
      },
      {
        name: "Duricef",
        price: 2,
        imageUrl: "https://i.postimg.cc/PfMPkW63/Duricef.jpg",
        description: "Cefadroxil monohydrate antibiotic medication. Used to treat certain bacterial infections. Always consult a healthcare professional before use."
      },
      {
        name: "Panadol",
        price: 1,
        imageUrl: "https://i.postimg.cc/nh9FMBkt/Panadol.jpg",
        description: "Pain reliever containing paracetamol. Effective for headaches, fever, and mild to moderate pain. Follow dosage instructions carefully."
      },
      {
        name: "Temporal",
        price: 1,
        imageUrl: "https://i.postimg.cc/4NWHCGTh/Temporal-2.jpg",
        description: "Fast-acting headache relief tablets. Contains paracetamol and caffeine for enhanced pain relief. Helps relieve tension headaches and migraines."
      },
      {
        name: "Mucobrave",
        price: 2,
        imageUrl: "https://i.postimg.cc/QxFhtZT7/Mucobrave-2.jpg",
        description: "Expectorant syrup that helps loosen mucus and thin bronchial secretions. Provides relief from chest congestion. Contains ambroxol hydrochloride."
      }
    ];

    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    res.status(201).json({
      status: 'success',
      message: 'Database seeded successfully'
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};