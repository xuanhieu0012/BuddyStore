# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u1= User.create(username: 'buddyStoreUs', password:'Buddystore1', admin: true)

Product.create(name: 'ACNE ABSORB NIGHT MASK', price: 55 ,quantity: 100 , description:"<b>INGREDIENTS</b>

<p>Aqua, Kaolin, Bentonite, Propylene Glycol, Sulfur, Magnesium Aluminum Silicate, Glycerin, Zinc Oxide, Eucalyptus Globulus Leaf Oil, Polysorbate 20, Titanium Dioxide, Caprylhydroxamic Acid, Glyceryl Caprylate <AFTER>

<b>FUNCTION</b>
<p>THE ACNE ABSORB NIGHT MASK CONTAINS EUCALYTUS GLOBULUS LEAF OIL HELP ANTI-INFLAMMATORY AND ANTIBACTERIAL PROPERTIES MAKING IT HIGHLY EFFECTIVE IN TREATING WOOND AND ACNE, SKIN INFECTION.</p>

<b>DESCRIPTION:</b>
 <p>AFTER CLEANSING, SERUM AND CREAM APPLICATION, APPLY AS A SPOT REATMENT FOR 20 MINUTES AND WASH OFF WITH COOL WATER</p>" , image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/acne-absorb-night-mask-box-DSC_6417-min-scaled_800x.jpg?v=1603579020', 'https://cdn.shopify.com/s/files/1/0267/5772/6399/products/acne-absorb-night-mask-DSC_6419-min-scaled_800x.jpg?v=1603579020'], category:['skincare','DBH'], bestSeller: false  )
Product.create(name: 'ACNE MINT TREE OIL (1OZ)', price: 155 ,quantity: 100 , description:'
<b>INGREDIENTS</b>
<p>Glycine Soja (Soybean) Oil , Helianthus Annuus (Sunflower) Seed Oil, Carthamus Tinctorius (Safflower) Seed Oil, Vitis Vinifera (Grape) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Rosa Canina Fruit Oil</p>

<b>FUNCTION</b>
<p>INFUSED WITH SUNFLOWER SEED OIL WITH RICH VITAMIN E, KEEPS THE SKIN WELL HYDRATED, AND CONTINURES PROTECTING THE COLLAGEN UNDER YOUR SKIN. JOJOBA OIL HELPS THE SKIN REPAIR AND DAMAGE CONTROL.</p>

<b>DESCRIPTION:</b> 
<p>AFTER CLEANSING, APPLY 4-5 DROPS AND MASSAGE TO THE FACE&NECK AREA </p>' , image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/acne-mint-tree-oil-box-DSC_6299-min-scaled_800x.jpg?v=1603579106', 'https://cdn.shopify.com/s/files/1/0267/5772/6399/products/acne-mint-tree-oil-DSC_6322-min-scaled_800x.jpg?v=1603579107'], category:['skincare','DBH'], bestSeller: false )
Product.create(name: 'ACNE MUSHROOM EXTRACT CREAM (1OZ)', price: 119,quantity: 80, description:'<b>INGREDIENTS</b>

<p>Aqua, PVM/MA Decadiene Crosspolymer, Glycerin, Pyrus Malus (Apple) Fruit Extract, Porphyridium Polysaccharide, Dipotassium Glycyrrhizate, Niacinamide, Salix Nigra (Willow) Bark Extract, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Caprylhydroxamic Acid, Glyceryl Caprylate, Salicylic Acid </p>

<b>FUNCTION</b>
<p>TEA TREE OIL WITHIN THIS MUSHROOM EXTRACT CREAM IS FOUND TO BE AN EFFECTIVE TREATMENT FOR PURIFYING AND INFLAMMATORY CONDITIONS SUCH AS ACNE. PYRUS MAUS FRUIT EXTRACT SMOOTH YOUR SKIN.</p>

<b>DESCRIPTION: </b> 
<p>AFTER CLEANSING, APPLY THE CREAM AND MASSAGE TO THE FACE AND NECK AREA</p>' , image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/advance-acne-mushroom-box-DSC_6413-min-scaled_800x.jpg?v=1603579204','https://cdn.shopify.com/s/files/1/0267/5772/6399/products/advance-acne-mushroom-DSC_6411-min-scaled_800x.jpg?v=1603579204'], category:['skincare', 'DBH'], bestSeller: false  )
Product.create(name: 'DOUBLE WALL GLASS TOGO BOTTLE', price: 20 ,quantity: 50, description: '
<b>Perfect design</b>
<p>✓ Made of toxic-free borosilicate glass,food-grade 304 stainless steel, which is extremely safe and BPA/lead-free.</p>

<p>✓Double-walled glass tea tumbler, keep your drinks cool or warm longer without sweating and leaking,three-pieces design</p>

<p>✓ This glass water bottle is resistant to thermal shock, preventing cracking in extreme hot or cold which can withstand the repaid temperature change of the water from -20℃ to 100℃. Resistant double-layer glass bottle, don\'t need to care the erosion anymore.</p>

<p>✓Built-in sealed the silica gel ring, inverted shaking does not leak water</p>

<p>✓ Easy and convenient, comfortable and drink.Soft and light skin, portable tough, and durable</p>

<p>ONLY 4 COLORS AVAILABLE: Black, Gold, Rose, Silver</p>' , image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/6_800x.jpg?v=1610157252', 'https://cdn.shopify.com/s/files/1/0267/5772/6399/products/9_5d88e8de-d70f-4d38-a546-64d17cc9fa76_800x.jpg?v=1610157252', 'https://cdn.shopify.com/s/files/1/0267/5772/6399/products/17520520009_1141873188_800x.jpg?v=1610157253', 'https://cdn.shopify.com/s/files/1/0267/5772/6399/products/17590367673_1141873188_800x.jpg?v=1610157253'], category:['lifestyle','accessories'], bestSeller: true, salePrice: 15 )

Product.create(name: 'Orihiro Amino Body diet', price:40 ,quantity: 50, description: '
<p>The Orihiro Amino Body Diet helps to get rid of excess weight and improve overall health.</p>
<ul>
    <li>It provides you with all nutrients your body needs.</li>
    <li>It can improve your immune system and body function.</li>
    <li>Amino acids strengthen muscles, stimulate weight loss, improve mental health. Group B vitamins help to prevent sagging skin, keep it supple, firm, and elastic, improve cellular metabolism, and restore damaged areas.</li>
    <li>They also have a positive effect on the nervous system, help to cope with stress and provide the body with energy. Soy peptide stimulates muscle growth, prevents muscle weakness. It heals the digestive system, stimulates the fat burning process and normalizes the hormonal balance.</li>
    <li>Soy peptide reduces the cholesterol level and increases protein absorption. It neutralizes stress and helps to be active.</li>
    </ul>', image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/IMG_6243_800x.jpg?v=1612467295','https://cdn.shopify.com/s/files/1/0267/5772/6399/products/Diet_post_800x.png?v=1612467295'], category:['healthcare','diet'], bestSeller: true , salePrice: 30 )
Product.create(name: 'Super Collagen Plus', price: 89 ,quantity: 20 , description:'
    <p>Wild fish-higher availability of omega 3s, more bioavailable/absorption, speed up desired skin/bone
    health </p>
    <p>Fish collagen: 75% of our skin, Type 1: proline/glycine, Type 3: In our intestines, important for the gut lining health and repair </p>
    <ul>
    <li>Skin Hydration</li>
    <li>Strengthen Hair/Nails Growth</li>
    <li>Minimize Fine Lines/Wrinkles</li>
    <li>Lean muscle gain &amp; workout recovery</li>
    <li>Alleviate scars/faster healing</li>
    <li>Reduce joint pain</li>
    </ul>
    <em>Goji:</em>
    <p> -Protects eyes, support the immune system, protects against cancer, promotes healthy skin, stabilize blood sugar helps depression/anxiety, helps liver damage, great antioxidants, boost Energy, Anti-aging</p>
    <em>Aloe Vera:</em>
    <p>-Healing powers, digestive health, clears acne, relieves anal fissure, weight loss, hair/skin moisture, good
    source of Vitamin C&E </p>
    <em>Chamomile:</em>
    <p>-Helps sleep, reduce muscle spasm and period pain, treats cuts/wounds, reduce stress, lighten skin
    Acerola (Cherry)-Superfruits</p>
    <p>-Vitamin C, antioxidants, boost the immune system, diarrhea, liver problem</p>' , image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/9_800x.jpg?v=1603576133','https://cdn.shopify.com/s/files/1/0267/5772/6399/products/122552120_697001267688754_3671002063524319602_n_800x.jpg?v=1603576408'], category:['healthcare'], bestSeller: true  )
Product.create(name: 'COCONUT OIL 100% ORGANIC', price: 7.99 ,quantity: 100 , description: "<ul>
<li>Light & Nourishing ,Promotes Healthy-Looking Skin </li>
<li>Condition: Dry skin or hair in need of comprehensive moisturization and nourishment.</li>
<li>NOW Solutions Liquid Coconut Oil is a versatile cosmetic oil that's pleasingly light and easily absorbed for comprehensive moisturization without clogged pores</li>
<li>Our fractionated Liquid Coconut Oil is colorless and odorless with a smooth, non-greasy texture that's ideal for a variety of personal care uses.</li>
<li>Use it for dry skin, as a carrier oil for essential oils, for massage therapy, or as a base for handmade skin care products. </li>
<li>Liquid Coconut Oil can also help to soften dry, damaged hair as well as add a healthy shine.</li>
</ul", image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/153440457_150510963567731_6838923669471661807_n_800x.png?v=1614719926'], category:['healthcare','skincare'], bestSeller: true)
Product.create(name: 'SUNSCREENS SKINSAVER SPF 30', price: 55 , quantity:30, description:"<ul>
<li>Aloe barradensis leaf juice: smooth skin, anti-inflammatory, scar reducing and wounds healing properties, protect skin from UV damage. </li>
<li>Sea whip extract: a powerful healing ingredient as it neutralizes enzymes that are responsible for irritation evident in skin sensitivity, sunburn and aging, as well as pain and swelling from acne. </li>
<li>Glycerin: Anti-aging, anti-irritation, improve skin permeability, promotes cell maturation, smoother skin, improves skin elasticity, healing wound, control oil skin.</li><ul>" , image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/il_fullxfull.2477544222_eaz5_800x.jpg?v=1603841243'], category:['skincare','skinsaver'], bestSeller: false )
Product.create(name: 'Neuglow L Premium White – Whitening Shining From Inside', price:120 ,quantity: 50, description:"
<b>Neuglow L Premium White – Whitening Shining From Inside 28 Tablets </b>

<p>Manufactured under the objective of HEALTHY WHITE, safe, whitening boost while bringing countless health benefits, such as strengthen the immune system, prevent diseases, cancer, fight against free radicals, enhance the detoxifying function of the body as well as eliminate toxins from the environment.</p>

<b>Each Effervescent Tablet Contains:</b>
<ul>
<li>Vitamin C 1000mg </li>
<li>L-Glutathione (Reduced) 500mg</li>
<ul>
<b>HOW TO USE:</b><p> Dissolve 1 effervescent tablet in about 200 ml of cold water. Wait for it to dissolve completely and drink immediately.</p>

<strong>NOTE:</strong>
<ul>
<li>You can use less volume of water if you want a strong, juicy taste or you can also add some more water for the interested taste.</li>
<li>It will be delicious if used in cold. The product does not contain sugar, so it does not cause weight gain.</li>
<li>After dissolving, drink immediately. Do not leave in the air for long time in order to avoid the active substances to be oxidized and the effect reduces.</li>
<li>Take with meals, immediately after eating or 1-2 hours after eating. Do not drink with an empty stomach.</li>
</ul

<b>REGIMEN</b>

<b>First month: </b> <p>Attack dose. 02 tablets (morning and at night before you go to bed) in 02 months. For dark skin, 3 tablets in the first month and 2 tablets in the next 1 month.</p>
<b>Third month: </b><p>Stabilization dose. 02 tablets alternating with 01 tablet daily for 01 month.</p>
<b>Fourth month:</b> <p>Maintenance dose. 1 tablet per day in 1 month.</p>
<b>From fifth month onwards:</b><p> Prevention dose. 2-3 tablets a week to lighten the skin, prevent melasma, hyperpigmentation, cancer as well as endogenously protect the skin from the sun, enhance immune system, anti-aging, scavenger radical and eliminate toxins from food and environment.</p>
<b>PRESERVATION</b> 

<p>Store in a cool and dry place.</p>
<p>Keep out of reach of children.</p>" , image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/57_800x.jpg?v=1622607132'], category:['skincare, healthcare'], bestSeller: false)
Product.create(name: 'MINT REFRESHING TONER (4OZ)', price: 57 ,quantity:100 , description: "INGREDIENTS
Aqua, Aloe Barbadensis Leaf Juice, Hamamelis Virginiana (Witch Hazel) Leaf Extract, Hydrolyzed Candida Saitoana Extract, Allantoin, Niacinamide, Glycerin, Caprylhydroxamic Acid, Glyceryl Caprylate, Mint, Sodium Starch Octenylsuccinate, Calcium Pantothenate, Maltodextrin, Lavender Extract, Tocopheryl Acetate.

FUNCTION
FOR OILIER AND ACNEIC SKIN, THE MINT REFRESHING TONER IS AN EFFECTIVE DEGREASER AND ACNE TREATMENT IN ONE. GLYCOLIC ACID ALLOWS FOR LIGHT EXFOLIATION THAT ALLOWS WITCH HAZEL AND ALOE VERA TO PENETRATE THE SKIN FOR COMFORT AND SOFTENING

DESCRIPTION: AFTER CLEANSING, LIGHTLY MIST OVER THE FA", image_url: ['https://cdn.shopify.com/s/files/1/0267/5772/6399/products/mint-refresh-toner-box-DSC_6326-min-scaled_800x.jpg?v=1603581734'], category:['skincare'], bestSeller: true)
