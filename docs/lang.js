/* Chinese / English UI switch. Listing names stay as scraped. */
(function () {
  const DICT = {
    "Cheap_house — 香港物业投资报告": "Cheap_house — Hong Kong Property Investment",
    "Cheap_house — 香港租房报告": "Cheap_house — Hong Kong Rental Report",
    "正在加载物业数据…": "Loading listings…",
    "正在加载租盘数据…": "Loading rentals…",
    "正在加载精选推荐…": "Loading top picks…",
    "正在加载楼盘数据…": "Loading listings…",
    "仅住宅": "Residential only",
    "买房报告": "Buy",
    "租房报告 →": "Rent →",
    "← 买房报告": "← Buy",
    "租房报告": "Rent",
    "住宅待售": "Homes for sale",
    "住宅租金可比": "Rent comps",
    "已排除工商铺": "Non-residential excluded",
    "已分析": "Analyzed",
    "核实租金": "Verified rent",
    "中位毛租金回报率": "Median gross yield",
    "正现金流占比": "Positive cash flow",
    "市场概览": "Overview",
    "精选推荐": "Top picks",
    "精选租盘": "Top rentals",
    "全部楼盘": "All listings",
    "全部租盘": "All rentals",
    "分区分析": "Districts",
    "分区租金": "Rent by district",
    "图表": "Charts",
    "中位售价": "Median price",
    "中位月租": "Median rent",
    "中位呎价": "Median price / sqft",
    "中位呎租": "Median rent / sqft",
    "中位净租金回报率": "Median net yield",
    "中位现金回报率": "Median cash-on-cash",
    "中位实用面积": "Median saleable area",
    "含管理费总支出": "Rent + management",
    "回报率 > 4%": "Yield > 4%",
    "专业市场分析": "Market analysis",
    "租房市场洞察": "Rental market notes",
    "楼龄筛选": "Building age",
    "全部楼龄": "Any age",
    "≤ 10 年": "≤ 10 years",
    "≤ 20 年": "≤ 20 years",
    "≤ 30 年": "≤ 30 years",
    "≤ 40 年": "≤ 40 years",
    "41 年以上": "41+ years",
    "全部住宅楼盘": "All residential listings",
    "搜索屋苑或地区": "Search estate or district",
    "区域": "Region",
    "盈亏平衡": "Breakeven",
    "地区": "District",
    "评级": "Grade",
    "租金匹配": "Rent match",
    "楼龄": "Age",
    "排序": "Sort",
    "全部区域": "All regions",
    "全部地区": "All districts",
    "全部评级": "All grades",
    "全部": "All",
    "全部房型": "Any bedrooms",
    "港岛": "Hong Kong Island",
    "九龙": "Kowloon",
    "新界": "New Territories",
    "清除": "Clear",
    "A — 强力推荐": "A — Strong buy",
    "B — 值得买入": "B — Buy",
    "C — 观望": "C — Watch",
    "D — 回避": "D — Avoid",
    "A 高性价比": "A Good value",
    "B 值得考虑": "B Consider",
    "C 均价附近": "C Near average",
    "D 偏贵": "D Expensive",
    "仅同区可比": "Same district only",
    "仅预算内": "Within budget",
    "≥2 个可比": "≥2 comps",
    "排名": "Rank",
    "现金回报率": "Cash-on-cash",
    "毛租金回报率": "Gross yield",
    "售价": "Price",
    "评分": "Score",
    "屋苑": "Estate",
    "类型": "Type",
    "面积": "Area",
    "月租": "Rent",
    "呎租": "Rent/sqft",
    "可比": "Comps",
    "毛回报": "Gross",
    "净回报": "Net",
    "现金回报": "Cash",
    "加息+1%": "Rate +1%",
    "呎价": "HK$/sqft",
    "链接": "Link",
    "加载更多": "Load more",
    "分区投资分析": "District analysis",
    "分区租金分析": "Rent by district",
    "盘数": "Listings",
    "呎价": "HK$/sqft",
    "A级占比": "Grade A share",
    "中位实用面积": "Median area",
    "住宅": "Residential",
    "年": " yrs",
    "房": "Bed",
    "实用面积": "Saleable sqft",
    "各区中位呎租": "Median rent/sqft by district",
    "月租分布": "Rent distribution",
    "中位月租 (HK$)": "Median rent (HK$)",
    "总支出": "Total cost",
    "较分区": "Vs district",
    "房间数": "Bedrooms",
    "预算": "Budget",
    "月租下限": "Min rent",
    "月租上限": "Max rent",
    "自定义月租": "Custom rent",
    "面积下限": "Min area",
    "面积上限": "Max area",
    "自定义面积": "Custom area",
    "不限": "Any",
    "1房": "1 bed",
    "2房": "2 beds",
    "3房": "3 beds",
    "4房": "4 beds",
    "5房及以上": "5+ beds",
    "评分（高→低）": "Score (high → low)",
    "月租（低→高）": "Rent (low → high)",
    "呎租（低→高）": "Rent/sqft (low → high)",
    "总支出（低→高）": "Total cost (low → high)",
    "面积（大→小）": "Area (large → small)",
    "楼龄（新→旧）": "Age (new → old)",
    "性价比（高→低）": "Value (high → low)",
    "中原": "Centaline",
    "美聯": "Midland",
    "利嘉閣": "Ricacorp",
    "千居": "Spacious",
    "盘源": "Source",
    "投资者": "Investor",
    "自住": "Owner-occupier",
    "没有符合该楼龄筛选的精选推荐。": "No picks match this age filter.",
    "加息 +1% 现金回报": "Cash-on-cash if rates +1%",
    "SSD 风险": "SSD risk",
    "回本 < 36 个月": "Breakeven < 36 months",
    "A级高性价比": "Grade A value",
    "租金盘源": "Rental listings",
    "预算内占比": "Within budget",
    "输入关键字…": "Search…",
    "最低 HK$": "Min HK$",
    "最高 HK$": "Max HK$",
    "最低呎": "Min sqft",
    "最高呎": "Max sqft",
    "月租 (HK$)": "Rent (HK$)",
    "租盘数量": "Listings",
    "呎租 (HK$/呎)": "HK$ / sqft",
    "实用面积 (呎)": "Saleable sqft",
    "低于分区呎租中位": "Below district median",
    "房间": "Beds",
    "含管理费": "Incl. fees",
    "年租收入": "Annual rent",
    "营运成本": "Operating costs",
    "按揭利息": "Mortgage interest",
    "年净现金流": "Annual net cash flow",
    "A · 强力推荐": "A · Strong buy",
    "B · 值得买入": "B · Buy",
    "C · 观望": "C · Watch",
    "D · 回避": "D · Avoid",
    "A · 高性价比": "A · Good value",
    "B · 值得考虑": "B · Consider",
    "C · 均价附近": "C · Near average",
    "D · 偏贵": "D · Expensive",
  };

  const PHRASES = [
    ["拟合曲线在底层；圆点=租盘样本（抽样显示），菱形=待售楼盘估算租金", "Fitted curve underneath; dots = rent samples (sampled), diamonds = estimated rent of homes for sale"],
    ["拟合曲线在底层；圆点=租盘样本（按区域毛回报率换算隐含呎价），菱形=待售楼盘实际呎价（悬停见估算租金）", "Fitted curve underneath; dots = implied price/sqft from district yield, diamonds = asking price/sqft (hover for estimated rent)"],
    ["仅住宅（≥ HK$500万）。月租 = 可比租盘每呎租金平均值 × 面积；匹配顺序：屋苑 → 分区 → 区划。", "Residential only (≥ HK$5M). Rent = average rent/sqft of comps × area. Match order: estate → district → region."],
    ["区域、地区支持多选（不选 = 全部）。仅住宅——已排除村屋、工商铺、工业、土地及车位。楼龄带", "Region and district are multi-select (none = all). Residential only — village houses, commercial, industrial, land and parking are excluded. Age marked"],
    ["表示存疑；选用楼龄筛选时，未知或存疑楼龄的楼盘不会显示。", "means uncertain; those listings are hidden when an age filter is on."],
    ["区域、地区、房间数可多选（不选 = 全部）。呎租按", "Region, district and bedrooms are multi-select (none = all). Rent/sqft uses "],
    ["计算；楼龄筛选时未知/存疑楼龄不显示。月租、面积为区间筛选，可只填一侧。", ". Unknown or uncertain ages are hidden when an age filter is on. Rent and area filters can be one-sided."],
    ["按区域（港岛→九龙）及中位现金回报率排序。A级占比 = 该分区强力推荐盘比例。", "Sorted by region (Hong Kong Island → Kowloon), then median cash-on-cash. Grade A share = share of strong buys in that district."],
    ["气泡越大=该分区楼盘越多；颜色越绿=现金回报率越高", "Larger bubble = more listings; greener = higher cash-on-cash"],
    [    "以下图表基于已核实租金的楼盘。收益率轴均为百分比；售价轴为百万港元。", "Charts use listings with verified rent. Yield axes are percent; price axis is HK$ millions."],
    ["投资评级分布", "Investment grade mix"],
    ["租盘评级分布", "Rental grade mix"],
    ["三区租金回报率对比（中位数）", "Yield by region (median)"],
    ["投资评分前20（核实租金）", "Top 20 scores (verified rent)"],
    ["热门地区：回报 vs 现金流（气泡=盘数，悬停看地区）", "Districts: yield vs cash flow (bubble = count)"],
    ["售价 vs 毛租金回报率（核实租金）", "Price vs gross yield (verified rent)"],
    ["毛租金回报率分布（核实租金）", "Gross yield distribution (verified rent)"],
    ["毛租金回报率分布", "Gross yield distribution"],
    ["租金匹配方式（核实租金）", "How rent was matched (verified)"],
    ["月租分布", "Rent distribution"],
    ["各区中位呎租", "Median rent/sqft by district"],
    ["面积 vs 月租", "Area vs rent"],
    [    "房间数 vs 中位月租", "Bedrooms vs median rent"],
    ["楼龄 vs 每呎租金（港岛 / 九龙）", "Age vs rent/sqft (Hong Kong Island / Kowloon)"],
    ["楼龄 vs 每呎售价（港岛 / 九龙）", "Age vs price/sqft (Hong Kong Island / Kowloon)"],
    ["楼龄 vs 每呎租金（港岛 / 九龙 / 新界）", "Age vs rent/sqft (Hong Kong Island / Kowloon)"],
    ["楼龄 vs 每呎售价（港岛 / 九龙 / 新界）", "Age vs price/sqft (Hong Kong Island / Kowloon)"],
    ["按租值评分排序。评级 A = 呎租明显低于分区/屋苑中位。", "Sorted by value score. Grade A means rent/sqft is clearly below the district or estate median."],
  ];

  const DISTRICTS = {
    "田湾": "Tin Wan", "坚尼地城": "Kennedy Town", "中环": "Central", "西营盘": "Sai Ying Pun",
    "康怡": "Kornhill", "鲗鱼涌": "Quarry Bay", "湾仔": "Wan Chai", "跑马地": "Happy Valley",
    "柴湾": "Chai Wan", "天后": "Tin Hau", "铜锣湾": "Causeway Bay", "上环": "Sheung Wan",
    "北角": "North Point", "太古城": "Taikoo Shing", "筲箕湾": "Shau Kei Wan", "西湾河": "Sai Wan Ho",
    "海怡": "South Horizons", "中环半山": "Mid-Levels", "玉桂山湾畔": "Mount Nicholson",
    "浅水湾": "Repulse Bay", "薄扶林": "Pok Fu Lam", "香港仔": "Aberdeen", "大潭": "Tai Tam",
    "舂坎角": "Chung Hom Kok", "深湾": "Shum Wan", "贝沙湾": "Bel-Air", "华富": "Wah Fu",
    "荔湾": "Lai Wan", "坪石": "Ping Shek", "钻石山": "Diamond Hill", "美孚": "Mei Foo",
    "马头围": "Ma Tau Wai", "九龙湾": "Kowloon Bay", "长沙湾": "Cheung Sha Wan", "彩虹": "Choi Hung",
    "盈晖": "Ying Hei", "黄埔": "Whampoa", "土瓜湾": "To Kwa Wan", "旺角": "Mong Kok",
    "又一村": "Yau Yat Tsuen", "荔景": "Lai King", "蓝田": "Lam Tin", "荔枝角": "Lai Chi Kok",
    "龙坪": "Lung Ping", "太子": "Prince Edward", "九龙城": "Kowloon City", "四小龙": "Four Little Dragons",
    "深水埗": "Sham Shui Po", "红磡": "Hung Hom", "九龙塘": "Kowloon Tong", "大角咀": "Tai Kok Tsui",
    "何文田": "Ho Man Tin", "观塘": "Kwun Tong", "黄大仙": "Wong Tai Sin", "油麻地": "Yau Ma Tei",
    "启德": "Kai Tak", "京士柏": "King's Park", "海逸": "Laguna Verde", "尖沙咀": "Tsim Sha Tsui",
    "慈云山": "Tsz Wan Shan", "佐敦": "Jordan", "鸭脷洲": "Ap Lei Chau", "将军澳": "Tseung Kwan O",
    "沙田": "Sha Tin", "大埔": "Tai Po", "元朗": "Yuen Long", "屯门": "Tuen Mun", "荃湾": "Tsuen Wan",
    "葵涌": "Kwai Chung", "青衣": "Tsing Yi", "粉岭": "Fanling", "上水": "Sheung Shui", "西贡": "Sai Kung",
  };
  const REGIONS = { "港岛": "Hong Kong Island", "九龙": "Kowloon", "新界": "New Territories" };
  function normZh(s) {
    return String(s).replace(/[灣環龍馬東島華雲貝暉臺區勝場園廣國門車後發頭圍]/g, (ch) => ({
      "灣": "湾", "環": "环", "龍": "龙", "馬": "马", "東": "东", "島": "岛", "華": "华", "雲": "云",
      "貝": "贝", "暉": "晖", "臺": "台", "區": "区", "勝": "胜", "場": "场", "園": "园", "廣": "广",
      "國": "国", "門": "门", "車": "车", "後": "后", "發": "发", "頭": "头", "圍": "围",
    }[ch]));
  }
  function placeName(s) {
    const n = normZh(s);
    return REGIONS[n] || DISTRICTS[n] || null;
  }
  const RULES = [
    [/^(.+)：每呎租金 ≈ exp\(([\d.]+) ([+−\-]) ([\d.]+)×楼龄\) （对数线性拟合，R²=([\d.]+)，n=(\d+)；10年≈HK\$([\d,]+)\/呎，40年≈HK\$([\d,]+)\/呎）$/,
      (m) => `${placeName(m[1]) || m[1]}: rent/sqft ≈ exp(${m[2]} ${m[3]} ${m[4]}×age) (log-linear fit, R²=${m[5]}, n=${m[6]}; 10y ≈ HK$${m[7]}/sqft, 40y ≈ HK$${m[8]}/sqft)`],
    [/^(.+)：每呎售价 ≈ exp\(([\d.]+) ([+−\-]) ([\d.]+)×楼龄\) （对数线性拟合，R²=([\d.]+)，n=(\d+)；10年≈HK\$([\d,]+)\/呎，40年≈HK\$([\d,]+)\/呎）$/,
      (m) => `${placeName(m[1]) || m[1]}: price/sqft ≈ exp(${m[2]} ${m[3]} ${m[4]}×age) (log-linear fit, R²=${m[5]}, n=${m[6]}; 10y ≈ HK$${m[7]}/sqft, 40y ≈ HK$${m[8]}/sqft)`],
    [/^中位毛租金回报率 ([\d.]+)%，低于香港典型水平（约3\.5%）。该板块可能更依赖楼价升值而非租金回报。$/,
      (m) => `Median gross yield is ${m[1]}%, below the typical Hong Kong level (~3.5%). This segment may depend more on price appreciation than on rent.`],
    [/^中位毛租金回报率 ([\d.]+)%，高于香港市场基准（约3\.5%），租售比相对有利。$/,
      (m) => `Median gross yield is ${m[1]}%, above the Hong Kong benchmark (~3.5%). The rent-to-price ratio is relatively favorable.`],
    [/^仅 (\d+)% 的物业在扣除按揭、印花税及营运成本后现金回报率为正。杠杆与买入成本是关键因素。$/,
      (m) => `Only ${m[1]}% of homes have positive cash-on-cash after mortgage, stamp duty and operating costs. Leverage and entry costs are the main drivers.`],
    [/^(\d+)% 的物业可实现正杠杆现金流，对收租型投资者是较健康的池子。$/,
      (m) => `${m[1]}% of homes produce positive leveraged cash flow, a healthier pool for rental investors.`],
    [/^(.+) 中位现金回报率更高（新界 ([\d.]+)% vs 九龙 ([\d.]+)%）。新界入场价较低，租金回报率通常更优。$/,
      (m) => `${placeName(m[1]) || m[1]} has the higher median cash-on-cash (New Territories ${m[2]}% vs Kowloon ${m[3]}%). New Territories entry prices are lower, so yields are usually better.`],
    [/^A级需同区租金可比（置信度 ≥ (\d+)%）。有 ([\d,]+) 个高回报盘因仅区划级租金匹配，最高评级为 B。$/,
      (m) => `Grade A requires same-district rent comps (confidence ≥ ${m[1]}%). ${m[2]} high-yield listings are capped at B because rent was matched only at region level.`],
    [/^([\d,]+) 个盘回本年期少于36个月——若36个月内转售可能须缴额外印花税（SSD）。$/,
      (m) => `${m[1]} listings break even in under 36 months — resale within 36 months may trigger extra stamp duty (SSD).`],
    [/^投资者须缴15%从价印花税（BSD），对现金回报率影响显著。$/,
      () => "Investors pay 15% ad valorem stamp duty (BSD), which materially reduces cash-on-cash."],
    [/^首置永居买家或可享受从价印花税优惠。$/,
      () => "A first-time permanent-resident buyer may qualify for a lower ad valorem stamp duty."],
    [/^有 ([\d,]+) 个租盘呎租低于所属分区中位数，性价比较高。$/,
      (m) => `${m[1]} rentals are below their district's median rent/sqft, so they look better value.`],
    [/^评级 A（高性价比）租盘 ([\d,]+) 个，建议优先查看精选推荐。$/,
      (m) => `${m[1]} grade-A (good value) rentals. Start with the top picks.`],
    [/^已知楼龄租盘 ([\d,]+) 个，中位楼龄 ([\d,]+) 年。$/,
      (m) => `${m[1]} rentals have a known building age; the median is ${m[2]} years.`],
    [/^预算 HK\$([\d,]+)\/月 内可覆盖 ([\d,]+) 个租盘（占 ([\d,]+)%）。$/,
      (m) => `A budget of HK$${m[1]}/month covers ${m[2]} rentals (${m[3]}%).`],
    [/^(.+) 呎租更低（新界 HK\$([\d,]+) vs 九龙 HK\$([\d,]+)\/呎）。$/,
      (m) => `${placeName(m[1]) || m[1]} has the lower rent/sqft (New Territories HK$${m[2]} vs Kowloon HK$${m[3]}/sqft).`],
    [/^价格 ≥ HK\$([\d.]+)M$/, (m) => `Price ≥ HK$${m[1]}M`],
    [/^按揭 ([\d.]+)% @ ([\d.]+)%$/, (m) => `Mortgage ${m[1]}% @ ${m[2]}%`],
    [/^([\d,]+)呎$/, (m) => `${m[1]} sqft`],
    [/^[≥≤] ([\d,]+)呎$/, (m) => m[0].replace("呎", " sqft")],
    [/^投资评级分布（共 ([\d,]+) 盘）$/, (m) => `Investment grade mix (${m[1]} listings)`],
    [/^租盘评级分布（共 ([\d,]+) 盘）$/, (m) => `Rental grade mix (${m[1]} listings)`],
    [/^租盘评级分布（共 ([\d,]+) 个）$/, (m) => `Rental grade mix (${m[1]} listings)`],
    [/^([\d,]+) 盘 \(([^)]+)\)$/, (m) => `${m[1]} listings (${m[2]})`],
    [/^(港岛|九龙|新界) 租盘$/, (m) => `${placeName(m[1])} rentals`],
    [/^(港岛|九龙|新界) 楼盘$/, (m) => `${placeName(m[1])} listings`],
    [/^(港岛|九龙|新界) 拟合/, (m) => `${placeName(m[1])} fit`],
    [/^年现金流拆解：(.+)$/, (m) => `Annual cash-flow bridge: ${m[1]}`],
  ];
  const GLOSS = [
    ["同屋苑（面积相近）", "Same estate (similar size)"],
    ["同屋苑（面积宽松）", "Same estate (loose size)"],
    ["同屋苑（每呎租金平均）", "Same estate (avg rent/sqft)"],
    ["同区（每呎租金平均）", "Same district (avg rent/sqft)"],
    ["同区划（每呎租金平均）", "Same region (avg rent/sqft)"],
    ["同区划（宽松·楼龄调整）", "Same region (loose, age-adjusted)"],
    ["同屋苑同楼层", "Same estate, same floor"],
    ["同区划（楼龄调整）", "Same region (age-adjusted)"],
    ["同区（楼龄调整）", "Same district (age-adjusted)"],
    ["同屋苑（宽松）", "Same estate (loose)"],
    ["同区划（宽松）", "Same region (loose)"],
    ["每呎月租（港元）", "Rent/sqft (HK$)"],
    ["每呎售价（港元）", "Price/sqft (HK$)"],
    ["楼龄（年）", "Age (years)"],
    ["售价（百万港元）", "Price (HK$ m)"],
    ["年净现金流", "Annual net cash flow"],
    ["待售楼盘（菱形）", "For-sale homes (diamonds)"],
    ["租盘样本（圆点）", "Rent samples (dots)"],
    ["楼盘估算（菱形）", "Listing estimate (diamonds)"],
    ["年租收入", "Annual rent"],
    ["营运成本", "Operating costs"],
    ["按揭利息", "Mortgage interest"],
    ["现金回报率", "Cash-on-cash"],
    ["毛租金回报率", "Gross yield"],
    ["投资评分", "Score"],
    ["每呎租金", "Rent/sqft"],
    ["每呎售价", "Price/sqft"],
    ["强力推荐", "Strong buy"],
    ["值得买入", "Buy"],
    ["高性价比", "Good value"],
    ["值得考虑", "Consider"],
    ["均价附近", "Near average"],
    ["现金回报", "Cash-on-cash"],
    ["毛回报", "Gross yield"],
    ["观望", "Watch"],
    ["回避", "Avoid"],
    ["偏贵", "Expensive"],
    ["楼龄", "Age"],
    ["盘数", "Listings"],
    ["月租", "Rent"],
    ["面积", "Area"],
    ["租盘", "rentals"],
    ["楼盘", "listings"],
    ["呎", "sqft"],
    ["年", "y"],
    ["盘", "listings"],
  ];
  function applyGloss(s) {
    let next = s;
    GLOSS.forEach(([zh, en]) => {
      if (next.includes(zh)) next = next.split(zh).join(en);
    });
    return next;
  }
  function tr(s) {
    if (s == null) return s;
    const raw = String(s);
    if (window.DASH_LANG !== "en") return raw;
    const trimmed = raw.trim();
    if (!/[\u4e00-\u9fff]/.test(trimmed)) return raw;
    if (Object.prototype.hasOwnProperty.call(DICT, trimmed)) return raw.replace(trimmed, DICT[trimmed]);
    const gloss = GLOSS.find(([zh]) => zh.length >= 2 && zh === trimmed);
    if (gloss) return raw.replace(trimmed, gloss[1]);
    const note = trimmed.match(/^[（(](\d+) 个租盘每呎租金平均 × 面积 · (.+)[）)]$/);
    if (note) {
      const method = (GLOSS.find(([zh]) => zh === note[2]) || [null, note[2]])[1];
      return raw.replace(trimmed, `(${note[1]} rent comps: avg rent/sqft × area · ${method})`);
    }
    const place = placeName(trimmed);
    if (place) return raw.replace(trimmed, place);
    for (let i = 0; i < RULES.length; i++) {
      const m = trimmed.match(RULES[i][0]);
      if (m) return raw.replace(trimmed, RULES[i][1](m));
    }
    let next = trimmed;
    PHRASES.forEach(([zh, en]) => {
      if (zh.length >= 8 && next.includes(zh)) next = next.split(zh).join(en);
    });
    if (next !== trimmed) return raw.replace(trimmed, next);
    const loc = trimmed.match(/^(.+?) · (.+)$/);
    if (loc) {
      const left = placeName(loc[1]);
      const right = placeName(loc[2]);
      if (left || right) return raw.replace(trimmed, `${left || loc[1]} · ${right || loc[2]}`);
    }
    return raw;
  }

  window.DASH_LANG = localStorage.getItem("dash-lang") === "en" ? "en" : "zh";

  window.t = function t(s) {
    return tr(s);
  };

  const orig = new WeakMap();

  function translateText(node) {
    const parent = node.parentElement;
    if (!parent || parent.closest("script, style, [data-i18n-live]")) return;
    if (!orig.has(node)) orig.set(node, node.nodeValue);
    const raw = orig.get(node);
    if (!raw || !/[\u4e00-\u9fff]/.test(raw)) return;
    if (window.DASH_LANG !== "en") {
      node.nodeValue = raw;
      return;
    }
    const trimmed = raw.trim();
    const hit = tr(trimmed);
    if (hit !== trimmed) node.nodeValue = raw.replace(trimmed, hit);
  }

  function walk(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (n.parentElement && n.parentElement.closest("script, style, [data-i18n-live]")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(translateText);
    root.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((el) => {
      if (!el.dataset.phZh) el.dataset.phZh = el.placeholder;
      el.placeholder = window.DASH_LANG === "en" ? window.t(el.dataset.phZh) : el.dataset.phZh;
    });
  }

  function chartText(s) {
    if (s == null || typeof s !== "string") return s;
    if (window.DASH_LANG !== "en") return s;
    const exact = tr(s);
    if (exact !== s) return exact;
    if (s.indexOf("%{") >= 0) return applyGloss(s);
    return s;
  }
  function arrChanged(src, fn) {
    if (!Array.isArray(src) || !src.length || !src.every((x) => typeof x === "string")) return null;
    const next = src.map(fn);
    return next.some((v, i) => v !== src[i]) ? next : null;
  }
  function translatePlotly() {
    if (!window.Plotly) return;
    document.querySelectorAll(".js-plotly-plot").forEach((gd) => {
      const layout = gd.layout || {};
      if (!gd._i18n) {
        gd._i18n = {
          title: layout.title && (layout.title.text || layout.title),
          x: layout.xaxis && layout.xaxis.title && (layout.xaxis.title.text || layout.xaxis.title),
          y: layout.yaxis && layout.yaxis.title && (layout.yaxis.title.text || layout.yaxis.title),
          legend: layout.legend && layout.legend.title && (layout.legend.title.text || layout.legend.title),
          annotations: (layout.annotations || []).map((a) => a.text),
          traces: (gd.data || []).map((tr0) => ({
            name: tr0.name,
            x: Array.isArray(tr0.x) ? tr0.x.slice() : null,
            y: Array.isArray(tr0.y) ? tr0.y.slice() : null,
            text: Array.isArray(tr0.text) ? tr0.text.slice() : null,
            hovertext: Array.isArray(tr0.hovertext) ? tr0.hovertext.slice() : null,
            hovertemplate: typeof tr0.hovertemplate === "string" ? tr0.hovertemplate : null,
          })),
        };
      }
      const saved = gd._i18n;
      const en = window.DASH_LANG === "en";
      const show = (v) => (en ? chartText(v) : v);
      const patch = {};
      if (saved.title) patch.title = { text: show(saved.title) };
      if (saved.x) patch["xaxis.title"] = { text: show(saved.x) };
      if (saved.y) patch["yaxis.title"] = { text: show(saved.y) };
      if (saved.legend) patch["legend.title"] = { text: show(saved.legend) };
      if (saved.annotations && saved.annotations.some(Boolean) && layout.annotations) {
        patch.annotations = layout.annotations.map((a, i) => Object.assign({}, a, {
          text: show(saved.annotations[i]),
        }));
      }
      try { Plotly.relayout(gd, patch); } catch (_) {}
      (saved.traces || []).forEach((tr0, i) => {
        const upd = {};
        if (tr0.name) upd.name = [show(tr0.name)];
        const x = arrChanged(tr0.x, show);
        const y = arrChanged(tr0.y, show);
        const text = arrChanged(tr0.text, show);
        const hovertext = arrChanged(tr0.hovertext, show);
        if (x) upd.x = [x];
        if (y) upd.y = [y];
        if (text) upd.text = [text];
        if (hovertext) upd.hovertext = [hovertext];
        if (tr0.hovertemplate) upd.hovertemplate = [show(tr0.hovertemplate)];
        if (Object.keys(upd).length) {
          try { Plotly.restyle(gd, upd, [i]); } catch (_) {}
        }
      });
    });
  }

  function paintSwitch() {
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.setLang === window.DASH_LANG);
    });
    document.documentElement.lang = window.DASH_LANG === "en" ? "en" : "zh-CN";
    const title = document.querySelector("title");
    if (title) {
      if (!title.dataset.zh) title.dataset.zh = title.textContent;
      title.textContent = window.DASH_LANG === "en" ? window.t(title.dataset.zh) : title.dataset.zh;
    }
  }

  window.applyPageLang = function applyPageLang() {
    paintSwitch();
    walk(document.body);
    translatePlotly();
  };

  window.setDashLang = function setDashLang(lang) {
    window.DASH_LANG = lang === "en" ? "en" : "zh";
    localStorage.setItem("dash-lang", window.DASH_LANG);
    if (typeof renderPicks === "function") {
      try { renderPicks(); } catch (_) {}
    }
    if (typeof populateDistricts === "function" && typeof DATA !== "undefined" && DATA.length) {
      try { populateDistricts(); } catch (_) {}
    }
    if (typeof filterTable === "function" && typeof DATA !== "undefined" && DATA.length) {
      try { filterTable(); } catch (_) {}
    }
    window.applyPageLang();
  };

  function boot() {
    window.applyPageLang();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
