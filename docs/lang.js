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
    "中位月租 (HK$)": "Median rent (HK$)",
  };

  const PHRASES = [
    ["拟合曲线在底层；圆点=租盘样本（抽样显示），菱形=待售楼盘估算租金", "Fitted curve underneath; dots = rent samples (sampled), diamonds = estimated rent of homes for sale"],
    ["拟合曲线在底层；圆点=租盘样本（按区域毛回报率换算隐含呎价），菱形=待售楼盘实际呎价（悬停见估算租金）", "Fitted curve underneath; dots = implied price/sqft from district yield, diamonds = asking price/sqft (hover for estimated rent)"],
    ["仅住宅（≥ HK$500万）。月租 = 可比租盘每呎租金平均值 × 面积；匹配顺序：屋苑 → 分区 → 区划。", "Residential only (≥ HK$5M). Rent = average rent/sqft of comps × area. Match order: estate → district → region."],
    ["区域、地区支持多选（不选 = 全部）。仅住宅——已排除村屋、工商铺、工业、土地及车位。楼龄带 ", "Region and district are multi-select (none = all). Residential only — village houses, commercial, industrial, land and parking are excluded. Age marked "],
    [" 表示存疑；选用楼龄筛选时，未知或存疑楼龄的楼盘不会显示。", " means uncertain; those listings are hidden when an age filter is on."],
    ["区域、地区、房间数可多选（不选 = 全部）。呎租按", "Region, district and bedrooms are multi-select (none = all). Rent/sqft uses "],
    ["计算；楼龄筛选时未知/存疑楼龄不显示。月租、面积为区间筛选，可只填一侧。", "; unknown or uncertain ages are hidden when an age filter is on. Rent and area filters can be one-sided."],
    ["按区域（港岛→九龙→新界）及中位现金回报率排序。A级占比 = 该分区强力推荐盘比例。", "Sorted by region (Hong Kong Island → Kowloon → New Territories), then median cash-on-cash. Grade A share = share of strong buys in that district."],
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
    ["房间数 vs 中位月租", "Bedrooms vs median rent"],
  ];

  window.DASH_LANG = localStorage.getItem("dash-lang") === "en" ? "en" : "zh";

  window.t = function t(s) {
    if (s == null) return s;
    const key = String(s);
    if (window.DASH_LANG !== "en") return key;
    if (Object.prototype.hasOwnProperty.call(DICT, key)) return DICT[key];
    return key;
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
    if (Object.prototype.hasOwnProperty.call(DICT, trimmed)) {
      node.nodeValue = raw.replace(trimmed, DICT[trimmed]);
      return;
    }
    let next = raw;
    PHRASES.forEach(([zh, en]) => {
      if (next.includes(zh)) next = next.split(zh).join(en);
    });
    node.nodeValue = next;
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

  function translatePlotly() {
    if (!window.Plotly) return;
    document.querySelectorAll(".js-plotly-plot").forEach((gd) => {
      const layout = gd.layout || {};
      const patch = {};
      function conv(text) {
        if (!text) return text;
        if (window.DASH_LANG !== "en") return text;
        let next = String(text);
        if (DICT[next]) return DICT[next];
        PHRASES.forEach(([zh, en]) => {
          if (next.includes(zh)) next = next.split(zh).join(en);
        });
        return next;
      }
      if (!gd._i18n) {
        gd._i18n = {
          title: layout.title && (layout.title.text || layout.title),
          x: layout.xaxis && layout.xaxis.title && (layout.xaxis.title.text || layout.xaxis.title),
          y: layout.yaxis && layout.yaxis.title && (layout.yaxis.title.text || layout.yaxis.title),
        };
      }
      const saved = gd._i18n;
      if (saved.title) patch.title = { text: window.DASH_LANG === "en" ? conv(saved.title) : saved.title };
      if (saved.x) patch["xaxis.title"] = { text: window.DASH_LANG === "en" ? conv(saved.x) : saved.x };
      if (saved.y) patch["yaxis.title"] = { text: window.DASH_LANG === "en" ? conv(saved.y) : saved.y };
      try { Plotly.relayout(gd, patch); } catch (_) {}
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
