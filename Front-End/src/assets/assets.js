// Imports image assets and exports UI icons along with structured product data for the online jewelry store
import logoPNG from './logo.PNG'
import searchPNG from './search.PNG'
import userPNG from './user.PNG'
import cartPNG from './cart.PNG'
import menuPNG from './menu.PNG'
import exchangePNG from './exchange.PNG'
import returnPNG from './return.PNG'
import customerPNG from './customer.PNG'
import onePNG from './one.PNG'
import twoPNG from './two.PNG'
import threePNG from './three.PNG'
import fourPNG from './four.PNG'
import fivePNG from './five.PNG'
import sixPNG from './six.PNG'
import sevenPNG from './seven.PNG'
import eightPNG from './eight.PNG'
import ninePNG from './nine.PNG'
import tenPNG from './ten.PNG'
import elevenPNG from './eleven.PNG'
import twelvePNG from './twelve.PNG'
import thirteenPNG from './thirteen.PNG'
import fourteenPNG from './fourteen.PNG'
import fifteenPNG from './fifteen.PNG'
import sixteenPNG from './sixteen.PNG'
import seventeenPNG from './seventeen.PNG'
import eighteenPNG from './eighteen.PNG'
import nineteenPNG from './nineteen.PNG'
import twentyPNG from './twenty.PNG'
import twentyonePNG from './twentyone.PNG'
import twentytwoPNG from './twentytwo.PNG'
import twentythreePNG from './twentythree.PNG'
import twentyfourPNG from './twentyfour.PNG'
import twentyfivePNG from './twentyfive.PNG'
import twentysixPNG from './twentysix.PNG'
import twentysevenPNG from './twentyseven.PNG'
import twentyeightPNG from './twentyeight.PNG'
import twentyninePNG from './twentynine.PNG'
import thirtyPNG from './thirty.PNG'
import thirtyonePNG from './thirtyone.PNG'
import thirtytwoPNG from './thirtytwo.PNG'
import thirtythreePNG from './thirtythree.PNG'
import thirtyfourPNG from './thirtyfour.PNG'
import thirtyfivePNG from './thirtyfive.PNG'
import thirtysixPNG from './thirtysix.PNG'
import thirtysevenPNG from './thirtyseven.PNG'
import thirtyeightPNG from './thirtyeight.PNG'
import thirtyninetPNG from './thirtynine.PNG'


export const assets = {
	logo: logoPNG,
	search_icon: searchPNG,
	user_icone: userPNG,
	cart_icone: cartPNG,
	menu_icone: menuPNG,
	exchange_icone: exchangePNG,
	return_icone: returnPNG,
	customer_icone: customerPNG,
	nineteen_product: nineteenPNG,
}
export const products = [
	{
		_id: "one",
		name: "Green jasper and amethyst necklace",
		description: "Handcrafted necklace featuring green jasper and amethyst gemstones, blending vibrant green and purple hues for a unique, elegant design. Perfect for adding a touch of sophistication to any outfit.",
		price: 30,
		image: [onePNG],
		category: "women",
		subCategory: "necklace"
	},
	{
		_id: "two",
		name: "Grey labradorite necklace",
		description: "Handcrafted grey labradorite necklace featuring a captivating natural stone with subtle iridescent flashes. A perfect balance of elegance and mystical energy.",
		price: 25,
		image: [twoPNG],
		category: "women",
		subCategory: "necklace",
	},
	{
		_id: "three",
		name: "Black obsidian necklace",
		description: "Handcrafted black obsidian necklace, featuring a sleek, polished stone known for its grounding and protective energy. A bold and timeless piece.",
		price: 35,
		image: [threePNG,],
		category: "men",
		subcategory: "necklace",
	},
	{
		_id: "four",
		name: "Pictorial Agate necklace",
		description: "Handcrafted Pictorial Agate necklace, showcasing a unique, earthy stone with natural patterns that resemble scenic landscapes. A wearable piece of nature’s art.",
		price: 36,
		image:[fourPNG],
		category: "women",
		subcategory: "necklace",
	},
	{
		_id: "five",
		name: "Quartz earrings",
		description: "Handcrafted quartz earrings featuring radiant, natural stones that amplify clarity and positive energy. A timeless touch of elegance and harmony.",
		price: 36,
		image: [fivePNG],
		category: "women",
		subCategory: "earrings",
	},
	{
		_id: "six",
		name: "Quartz Combo",
		description: "Handcrafted Quartz Combo featuring a stunning blend of natural quartz crystals, designed to enhance clarity, balance, and elegance in every piece.",
		price: 36,
		image: [sixPNG],
		category: "women",
		subCategory: "combinations",
	},
	{
		_id: "seven",
		name: "Raw amethyst necklace",
		description: "Handcrafted Raw Amethyst necklace featuring an organic, unpolished stone known for its calming and healing properties. A natural and powerful accessory.",
		price: 32,
		image: [sevenPNG],
		category: "women",
		subCategory: "necklace",
	},
	{
		_id: "eight",
		name: "Yellow calcite necklace",
		description: "Handcrafted Yellow Calcite necklace, featuring a bright, cheerful stone that promotes positivity and joy. A radiant addition to any jewelry collection.",
		price: 30,
		image: [eightPNG],
		category: "men",
		subCategory: "necklace",
	},
	{
		_id: "nine",
		name: "Carnelian Combo",
		description: "Handcrafted Carnelian Combo, featuring rich red and orange hues, designed to inspire vitality and creativity in every piece.",
		price: 46,
		image: [ninePNG],
		category: "women",
		subCategory: "combinations",
	},
	{
		_id: "ten",
		name: "Opalite necklace",
		description: "Handcrafted Opalite necklace, showcasing a milky white stone that glows with an ethereal, iridescent shine. A symbol of tranquility and emotional balance.",
		price: 28,
		image: [tenPNG],
		category: "men",
		subCategory: "necklace",
	},
	{
		_id: "eleven",
		name: "Blue lace necklace",
		description: "Handcrafted Blue Lace Agate necklace, featuring delicate, soft blue stones known for their soothing and calming energy.",
		price: 32,
		image: [elevenPNG],
		category: "men",
		subCategory: "necklace",
	},
	{
		_id: "twelve",
		name: "Raw black obsidian necklace",
		description: "Handcrafted Raw Black Obsidian necklace, featuring raw volcanic glass known for its protective and grounding properties. A powerful statement piece.",
		price: 34,
		image: [twelvePNG],
		category: "men",
		subCategory: "necklace",
	},
	{
		_id: "thirteen",
		name: "Pictorial agate necklace",
		description: "Handcrafted Pictorial Agate necklace, showcasing a unique, earthy stone with natural patterns that resemble scenic landscapes. A wearable piece of nature’s art.",
		price: 33,
		image: [thirteenPNG],
		category: "women",
		subCategory: "necklace",
	},
	{
		_id: "fourteen",
		name: "Grey labradorite necklace",
		description: "Handcrafted Grey Labradorite necklace featuring a captivating natural stone with iridescent flashes of blue and gold. A timeless piece full of magic and elegance.",
		price: 24,
		image: [fourteenPNG],
		category: "women",
		subCategory: "necklace",
	},
	{
		_id: "fifteen",
		name: "Pictorial agate earrings",
		description: "Handcrafted Pictorial Agate earrings, featuring unique stones with natural patterns that resemble scenic landscapes. A wearable piece of art that enhances any look.",
		price: 28,
		image: [fifteenPNG],
		category: "women",
		subCategory: "earrings",
	},
	{
		_id: "sixteen",
		name: "Rose quartz earrings",
		description: "Handcrafted Rose Quartz earrings featuring soothing pink stones that promote love, peace, and harmony. A delicate touch of elegance for any occasion.",
		price: 18,
		image: [sixteenPNG],
		category: "women",
		subCategory: "earrings",
	},
	{
		_id: "seventeen",
		name: "Special tumbled agate earrings",
		description: "Handcrafted Special Tumbled Agate earrings, featuring stones with unique natural patterns that evoke a sense of harmony and balance. A perfect complement to any outfit.",
		price: 20,
		image: [seventeenPNG],
		category: "women",
		subCategory: "earrings",
	},
	{
		_id: "eighteen",
		name: "Tiger's eye rough ring",
		description: "Handcrafted Tiger's Eye rough ring, featuring a raw, unpolished stone known for its grounding and protective qualities. A bold and empowering accessory.",
		price: 30,
		image: [eighteenPNG],
		category: "women",
		subCategory: "rings",
	},
	{
		_id: "nineteen",
		name: "Pictorial agate Combo",
		description: "Handcrafted Pictorial Agate Combo, combining stones with natural patterns that resemble scenic landscapes, designed to bring harmony and creativity.",
		price: 44,
		image: [nineteenPNG],
		category: "women",
		subCategory: "combinations",
	},
	{
		_id: "twenty",
		name: "Amethyst necklace",
		description: "Handcrafted Amethyst necklace, featuring a stunning purple gemstone known for its calming and healing properties. A beautiful addition to any jewelry collection.",
		price: 19,
		image: [twentyPNG],
		category: "women",
		subCategory: "necklace",
	},
	{
		_id: "twentyone",
		name: "Quartz crystals ring",
		description: "Handcrafted Quartz Crystals ring, featuring clear, radiant crystals known for their healing and energy-enhancing properties. A timeless and elegant accessory.",
		price: 22,
		image: [twentyonePNG],
		category: "women",
		subCategory: "rings",
	},
	{
		_id: "twentytwo",
		name: "Green aventurine Combo",
		description: "Handcrafted Green Aventurine Combo, featuring soothing green stones known for their healing properties and promoting growth, prosperity, and well-being.",
		price: 36,
		image: [twentytwoPNG],
		category: "women",
		subCategory: "combinations",
	},
	{
		_id: "twentythree",
		name: "Green aventurine Combo",
		description: "Handcrafted Green Aventurine Combo, featuring vibrant green stones that promote balance and prosperity. A healing combination perfect for every occasion.",
		price: 38,
		image: [twentythreePNG],
		category: "women",
		subCategory: "combinations",
	},
	{
		_id: "twentyfour",
		name: "Lapis lazuli necklace",
		description: "Handcrafted Lapis Lazuli necklace, showcasing a rich blue stone known for its spiritual and protective properties. A timeless piece full of wisdom and strength.",
		price: 30,
		image: [twentyfourPNG],
		category: "men",
		subCategory: "necklace",
	},
	{
		_id: "twentyfive",
		name: "Sodalite Combo",
		description: "Handcrafted Sodalite Combo, combining blue stones known for their calming and communication-enhancing properties. A perfect balance of serenity and clarity.",
		price: 39,
		image: [twentyfivePNG],
		category: "women",
		subCategory: "combinations",
	},
	{
		_id: "twentysix",
		name: "Rough sodalite necklace",
		description: "Handcrafted Rough Sodalite necklace, featuring raw blue stones known for their calming and communication-enhancing properties. A grounding piece full of natural beauty.",
		price: 26,
		image: [twentysixPNG],
		category: "men",
		subCategory: "necklace",
	},
	{
		_id: "twentyseven",
		name: "Amazonite necklace",
		description: "Handcrafted Amazonite necklace, featuring a beautiful blue-green stone that promotes harmony and tranquility. A calming piece for the modern soul.",
		price: 20,
		image: [twentysevenPNG],
		category: "women",
		subCategory: "necklace",
	},
	{
		_id: "twentyeight",
		name: "Citrine necklace",
		description: "Handcrafted Citrine necklace, featuring a radiant yellow stone known for its ability to attract abundance and positivity. A bright and uplifting addition to any jewelry collection.",
		price: 19,
		image: [twentyeightPNG],
		category: "men",
		subCategory: "necklace",
	},
	{
		_id: "twentynine",
		name: "Rose quartz necklace",
		description: "Handcrafted Rose Quartz necklace, featuring a soft pink stone that promotes love, compassion, and emotional healing. A beautiful and gentle piece.",
		price: 22,
		image: [twentyninePNG],
		category: "women",
		subCategory: "necklace",
	},
	{
		_id: "thirty",
		name: "Amethyst earrings",
		description: "Handcrafted Amethyst earrings featuring radiant purple gemstones known for their calming and healing properties. A timeless touch of elegance and peace.",
		price: 18,
		image: [thirtyPNG],
		category: "women",
		subCategory: "earrings",
	},
	{
		_id: "thirtyone",
		name: "Opalite earrings",
		description: "Handcrafted Opalite earrings featuring glowing, iridescent stones known for their soothing and uplifting qualities. A perfect balance of beauty and energy.",
		price: 18,
		image: [thirtyonePNG],
		category: "women",
		subCategory: "earrings",
	},
	{
		_id: "thirtytwo",
		name: "Lapis lazuli necklace",
		description: "Handcrafted Lapis Lazuli necklace, featuring a deep blue stone with protective and wisdom-enhancing properties. A striking addition to any jewelry collection.",
		price: 30,
		image: [thirtytwoPNG],
		category: "women",
		subCategory: "necklace",
	},
	{
		_id: "thirtythree",
		name: "Raw selenite ring",
		description: "Handcrafted Raw Selenite ring, featuring a rough crystal known for its purifying and healing properties. A unique and powerful accessory.",
		price: 32,
		image: [thirtythreePNG],
		category: "women",
		subCategory: "rings",
	},
	{
		_id: "thirtyfour",
		name: "Lapis lazuli necklace",
		description: "Handcrafted Lapis Lazuli necklace, featuring a deep blue stone with protective and wisdom-enhancing properties. A striking addition to any jewelry collection, bringing peace and strength.",
		price: 25,
		image: [thirtyfourPNG],
		category: "women",
		subCategory: "necklace",
	},
	{
		_id: "thirtyfive",
		name: "Amethyst earrings",
		description: "Handcrafted Amethyst earrings featuring radiant purple gemstones known for their calming and healing properties. A timeless touch of elegance and tranquility.",
		price: 24,
		image: [thirtyfivePNG],
		category: "women",
		subCategory: "earrings",
	},
	{
		_id: "thirtysix",
		name: "Evil eye ring",
		description: "Handcrafted Evil Eye ring, designed with protective symbols to ward off negative energy. A stylish and meaningful accessory that combines elegance with spiritual protection.",
		price: 36,
		image: [thirtysixPNG],
		category: "women",
		subCategory: "rings",
	},
	{
		_id: "thirtyseven",
		name: "Matching Aventurine Combo",
		description: "Handcrafted Matching Aventurine Combo, featuring vibrant green stones known for their healing properties. A perfect combination that promotes prosperity and well-being.",
		price: 39,
		image: [thirtysevenPNG],
		category: "women",
		subCategory: "combinations",
	},
	{
		_id: "thirtyeight",
		name: "Rose quartz earrings",
		description: "Handcrafted Rose Quartz earrings featuring soft pink stones that promote love, compassion, and emotional healing. A delicate and timeless addition to any collection.",
		price: 24,
		image: [thirtyeightPNG],
		category: "women",
		subCategory: "earrings",
	},
	{
		_id: "thirtynine",
		name: "Tiger’s eye and sodalite necklaces",
		description: "Handcrafted Tiger’s Eye and Sodalite necklaces, featuring bold, grounding stones that enhance strength, courage, and communication. A powerful duo for the modern individual.",
		price: 24,
		image: [thirtyninetPNG],
		category: "men",
		subCategory: "necklace",
	}
]
