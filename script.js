const translations = {
  zh: {
    brand: "刘仁雨",
    navAbout: "简介",
    navNews: "经历",
    navPublications: "论文",
    navProjects: "项目",
    navPatents: "专利",
    navContact: "联系",
    name: "刘仁雨",
    headline: "机器人技术与具身智能算法工程师",
    affiliation: "中国 江苏 苏州",
    education: "苏州大学 电子与通信工程硕士",
    email: "renyu6708@gmail.com",
    focusText:
      "关注视觉算法、diffusion、VLA、WM\n关注视触觉/力觉等模态的应用\n关注 UMI、EGO 等数采形式以及跨本体研究进展。",
    introOne:
      "目前主要专注于 VLA、WM、DP 等具身算法的研究、探索及部署使用。已在越疆、瑞尔曼、UR、珞石、天机等机械臂，大寰、Robotiq、知行等夹爪，灵心巧手、兆威等灵巧手上进行算法的真机部署与调试。",
    introTwo:
      "过去的一段时间，持续在 VLA 多任务泛化、UMI/EGO 等无本体数采、跨本体应用、触觉模态融合等方向进行探索。",
    introThree:
      "当前正在探索真机强化学习后训练，以提升任务成功率，实现人类在环(DAgger介入)的数据飞轮闭环。",
    newsTitle: "经历",
    newsOne: "2025-09～至今: 上海纬钛科技有限公司",
    newsTwo: "2024-06～2025-09: 苏州天准科技股份有限公司",
    newsThree: "2021-07～2024-06: 广联达科技有限公司",
    publicationsTitle: "论文",
    pubOneTitle: "Machine-Learning-based Aortic Stenosis Detection for Electronic Stethoscope",
    pubOneAuthors: "Zhen Shi, Neng Dai, Renyu Liu, Jiajun Wang, Shengsheng Cai, Nan Hu",
    pubOneVenue: "2021 13th International Conference on Wireless Communications and Signal Processing (WCSP)",
    pubTwoTitle: "Detection of Adventitious Respiratory Sounds based on Convolutional Neural Network",
    pubTwoAuthors: "Renyu Liu, Shengsheng Cai, Kexin Zhang, Nan Hu",
    pubTwoVenue: "2019 4th International Conference on Intelligent Informatics and Biomedical Sciences (ICIIBMS)",
    pubThreeTitle: "The Automatic Repairing Method Addressing Clipping Distortions and Frictional Noises in Electronic Stethoscope",
    pubThreeAuthors: "Ning Zhou, Jiajun Wang, Bing Sun, Renyu Liu, Nan Hu",
    pubThreeVenue: "IEEE Conference Paper, 2019",
    paperLink: "[paper]",
    patentsTitle: "专利",
    patentOneTitle: "一种电子听诊器的肺部啰音人工智能实时分类方法、系统、装置及可读存储介质",
    patentOneAuthors: "蔡盛盛，胡南，刘仁雨，徐兴国",
    patentOneVenue: "CN110970042A, 申请公布日 2020-04-07",
    patentTwoTitle: "一种电子听诊器背景音干扰实时自动抵消方法",
    patentTwoAuthors: "蔡盛盛，胡南，刘仁雨，石珍，徐兴国",
    patentTwoVenue: "CN112190280A, 申请公布日 2021-01-08",
    patentLink: "[patent]",
    projectsTitle: "项目",
    projectOneTitle: "VLA微调+RL后训练",
    projectOneDesc:
      "基于PI0.5/PI*0.6基座VLA模型，搭建预训练+强化学习后训练的真机迭代训练范式。面向机器人长程规划与精细化操控难题，开展真机强化学习与HIL人机在环训练；引入DAgger交互式纠错机制，优化策略rollout轨迹数据质量，构建高质量数据筛选、迭代更新的闭环数据飞轮，显著提升复杂具身任务的综合完成率。",
    projectOneTags: ["PI0.5", "PI*0.6", "真机强化学习", "HIL", "DAgger", "UMI", "数据飞轮"],
    projectTwoTitle: "UMI无本体采集与跨本体迁移方案研发",
    projectTwoDesc:
      "深度参与通用无本体操作采集设备UMI的迭代研发与工程化落地，参与传感器选型、数据同步策略及标准化落盘规则制定。基于UR5e机械臂完成跨本体适配与坐标系对齐方案，探究无本体示教数据向实体机械臂的迁移范式；落地花瓶擦拭、黑板擦拭、方块堆叠、多类物品分拣等多样化实操场景，验证UMI数据在跨本体模仿学习中的泛化能力。",
    projectTwoTags: ["UMI", "跨本体迁移", "UR", "坐标系对齐", "模仿学习"],
    projectThreeTitle: "仿真合成触觉Encoder的精细化操控研究",
    projectThreeDesc:
      "探究仿真合成触觉模态对真机精细模仿学习的增益效果。基于Isasc-lab仿真平台构建大规模合成触觉数据集，针对性训练专属触觉编码Encoder；将预训练触觉Encoder迁移至天机Marvin机械臂+Robtiq夹爪真机环境，赋能Diffusion Policy策略网络，解决高难度USB精密插拔类操作痛点，提升模型对接触状态的感知能力。",
    projectThreeTags: ["Diffusion Policy", "USB精细插拔", "触觉Encoder", "模仿学习"],
    projectFourTitle: "视触觉多模态融合VLA模型部署探索",
    projectFourDesc:
      "面向OpenPI/PI0.5 VLA模型，开展触觉模态融合接入研究。以物体抓取放置、衣物折叠两大典型居家任务为场景，探索触觉模态的使用，并基于YAM双臂机械臂完成真机部署；通过补充接触维度感知信息，弥补纯视觉方案感知短板，一定程度上提升作业的任务成功率。",
    projectFourTags: ["OpenPI", "PI0.5", "双臂遥操作", "精细插拔", "VLA"],
    projectFiveTitle: "首个跨构型视触觉数据集构建（数据集发布当时是全球首个）",
    projectFiveDesc:
      "与上海某机器人企业对接，探讨并梳理数据集场景定义。依托Gel-Sight视触觉传感器，完成居家、医疗、仓储、商超、厨房五大场景拆解；规范全场景任务范式、细分多级子任务，并沉淀标准化机器人原子操作技能库，为视触觉VLA模型的训练与评测提供高质量数据底座。",
    projectFiveTags: ["Gel-Sight", "视触觉", "数据集", "多构型", "原子技能"],
    projectSixTitle: "基于ACT算法的低成本机械臂策略验证",
    projectSixDesc:
      "居家小项目：手搓Lerobot的SO-Arm101机械臂，在积木堆叠任务上进行策略复现与调试，重点验证算法在低成本硬件上的时序控制、末端稳定性与连续动作衔接。",
    projectSixTags: ["ACT", "精细堆叠", "低成本机械臂", "SO-Arm101", "模仿学习"],
    projectSevenTitle: "真机/仿真混合数据训练范式探究",
    projectSevenDesc:
      "基于NVIDIA GROOT-N1/N1.5通用机器人基座模型，结合MimicGen自动化数据生成流水线，系统性探究仿真合成数据与真机遥操作数据的融合使用规范。分别完成仿真模型零样本真机部署、不同比例虚实混合数据训练等对照实验，总结适配通用VLA模型的数据配比方案，为高效低成本构建机器人数据集提供标准化方法论。",
    projectSevenTags: ["GROOT", "仿真合成", "真机", "遥操作", "VLA"],
    footer: "© 2026 Liu Renyu. Bilingual academic/tech homepage.",
  },
  en: {
    brand: "Liu Renyu",
    navAbout: "About",
    navNews: "Experience",
    navPublications: "Publications",
    navProjects: "Projects",
    navPatents: "Patents",
    navContact: "Contact",
    name: "Liu Renyu",
    headline: "Robotics and Embodied AI Algorithm Engineer",
    affiliation: "Suzhou, Jiangsu, China",
    education: "M.Eng. in Electronics and Communication Engineering, Soochow University",
    email: "renyu6708@gmail.com",
    focusText:
      "Interested in vision algorithms, diffusion, VLA, and WM\nInterested in vision-tactile, force-aware, and related multimodal applications\nInterested in UMI, EGO, and progress in cross-embodiment data collection",
    introOne:
      "I currently focus on embodied algorithms such as VLA, WM, and DP, covering research, deployment, and real-world validation. These systems have been deployed and debugged on robot arms including Dobot, Realman, UR, Rokae, and Tianji, along with grippers and dexterous hands from Dahuan, Robotiq, Zhixing, Lingxin Qiaoshou, and Zhaowei.",
    introTwo:
      "Over the past period, I have been exploring multi-task generalization in VLA, embodiment-free data collection pipelines such as UMI and EGO, cross-embodiment transfer, and tactile-modal fusion.",
    introThree:
      "I am currently exploring post-training with real-world reinforcement learning to improve task success rates and build a human-in-the-loop data flywheel with DAgger intervention.",
    newsTitle: "Experience",
    newsOne: "2025-09 to present: Shanghai VITAI Technology Co., Ltd.",
    newsTwo: "2024-06 to 2025-09: Suzhou TZTEK Technology Co., Ltd.",
    newsThree: "2021-07 to 2024-06: Glodon Technology Co., Ltd.",
    publicationsTitle: "Selected Publications",
    pubOneTitle: "Machine-Learning-based Aortic Stenosis Detection for Electronic Stethoscope",
    pubOneAuthors: "Zhen Shi, Neng Dai, Renyu Liu, Jiajun Wang, Shengsheng Cai, Nan Hu",
    pubOneVenue: "2021 13th International Conference on Wireless Communications and Signal Processing (WCSP)",
    pubTwoTitle: "Detection of Adventitious Respiratory Sounds based on Convolutional Neural Network",
    pubTwoAuthors: "Renyu Liu, Shengsheng Cai, Kexin Zhang, Nan Hu",
    pubTwoVenue: "2019 4th International Conference on Intelligent Informatics and Biomedical Sciences (ICIIBMS)",
    pubThreeTitle: "The Automatic Repairing Method Addressing Clipping Distortions and Frictional Noises in Electronic Stethoscope",
    pubThreeAuthors: "Ning Zhou, Jiajun Wang, Bing Sun, Renyu Liu, Nan Hu",
    pubThreeVenue: "IEEE Conference Paper, 2019",
    paperLink: "[paper]",
    patentsTitle: "Patents",
    patentOneTitle:
      "AI-based Real-time Classification Method, System, Device, and Readable Storage Medium for Pulmonary Adventitious Sounds in an Electronic Stethoscope",
    patentOneAuthors: "Shengsheng Cai, Nan Hu, Renyu Liu, Xingguo Xu",
    patentOneVenue: "CN110970042A, publication date 2020-04-07",
    patentTwoTitle:
      "Real-time Automatic Cancellation Method for Background Noise Interference in an Electronic Stethoscope",
    patentTwoAuthors: "Shengsheng Cai, Nan Hu, Renyu Liu, Zhen Shi, Xingguo Xu",
    patentTwoVenue: "CN112190280A, publication date 2021-01-08",
    patentLink: "[patent]",
    projectsTitle: "Projects",
    projectOneTitle: "VLA Fine-Tuning and RL Post-Training",
    projectOneDesc:
      "Built a real-world iterative training paradigm that combines pretraining with reinforcement-learning post-training on PI0.5 and PI*0.6 VLA backbones. Targeted long-horizon planning and fine manipulation with real-robot RL and HIL training, while introducing DAgger-based interactive correction to improve rollout quality and establish a closed-loop data flywheel for filtering and iterative updates.",
    projectOneTags: ["PI0.5", "PI*0.6", "Real-World RL", "HIL", "DAgger", "UMI", "Data Flywheel"],
    projectTwoTitle: "UMI Embodiment-Free Collection and Cross-Embodiment Transfer",
    projectTwoDesc:
      "Deeply participated in the iteration and engineering deployment of UMI, an embodiment-free manipulation data-collection system, including sensor selection, synchronization strategy, and standardized storage rules. Completed cross-embodiment adaptation and coordinate alignment on a UR5e arm, and validated transfer from embodiment-free demonstrations to physical robots across vase wiping, board wiping, block stacking, and item sorting tasks.",
    projectTwoTags: ["UMI", "Cross-Embodiment", "UR", "Coordinate Alignment", "Imitation Learning"],
    projectThreeTitle: "Fine Manipulation with Synthetic Tactile Encoders",
    projectThreeDesc:
      "Studied how synthetic tactile modalities can improve fine-grained imitation learning on real robots. Built a large-scale synthetic tactile dataset on the Isasc-lab simulator, trained a dedicated tactile encoder, and transferred it to a Tianji Marvin arm with a Robotiq gripper to enhance a Diffusion Policy network for precise USB insertion and better contact-state awareness.",
    projectThreeTags: ["Diffusion Policy", "USB Insertion", "Tactile Encoder", "Imitation Learning"],
    projectFourTitle: "Multimodal Vision-Tactile VLA Deployment",
    projectFourDesc:
      "Explored tactile-modality integration for OpenPI and PI0.5 VLA models. Focused on household tasks such as pick-and-place and cloth folding, and deployed the multimodal setup on a YAM dual-arm robot. The added contact-aware signals helped compensate for the perception limits of vision-only pipelines and improved task success rates.",
    projectFourTags: ["OpenPI", "PI0.5", "Dual-Arm Teleop", "Precise Insertion", "VLA"],
    projectFiveTitle: "First Cross-Configuration Vision-Tactile Dataset Construction (First of Its Kind Globally at Release)",
    projectFiveDesc:
      "Worked with a robotics company in Shanghai to define dataset scenarios and task taxonomy. Using GelSight vision-tactile sensors, decomposed five domains including home, medical, warehouse, retail, and kitchen settings, then standardized task structures and atomic robot skills to provide a strong data foundation for training and evaluating vision-tactile VLA models. At the time of release, this dataset was the first of its kind globally across configurations.",
    projectFiveTags: ["GelSight", "Vision-Tactile", "Dataset", "Cross-Configuration", "Atomic Skills"],
    projectSixTitle: "Low-Cost Robot Policy Validation with ACT",
    projectSixDesc:
      "A personal side project using a self-built SO-Arm101 from LeRobot for policy reproduction and debugging on block stacking. The focus was verifying ACT under low-cost hardware constraints, especially timing control, end-effector stability, and smooth action transitions.",
    projectSixTags: ["ACT", "Fine Stacking", "Low-Cost Robot", "SO-Arm101", "Imitation Learning"],
    projectSevenTitle: "Hybrid Real-and-Sim Data Training Paradigms",
    projectSevenDesc:
      "Based on NVIDIA GROOT-N1/N1.5 and the MimicGen automated data-generation pipeline, systematically studied how to combine synthetic simulation data with real teleoperation data. Ran comparative experiments including zero-shot sim-to-real deployment and mixed-data training at different ratios, then summarized practical data-mixing recipes for general VLA models.",
    projectSevenTags: ["GROOT", "Synthetic Simulation", "Real Robot", "Teleoperation", "VLA"],
    footer: "© 2026 Liu Renyu. Bilingual academic/tech homepage.",
  },
};

const root = document.documentElement;
const langButtons = document.querySelectorAll(".lang-btn");
const styleButtons = document.querySelectorAll(".style-btn");

const defaultLang = "zh";
const defaultStyle = "tech";

function setActiveButtons(buttons, activeValue, attributeName) {
  buttons.forEach((button) => {
    const isActive = button.dataset[attributeName] === activeValue;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-project-tags]").forEach((node) => {
    const key = node.dataset.projectTags;
    const tags = dictionary[key];
    if (!Array.isArray(tags)) {
      return;
    }

    node.replaceChildren(
      ...tags.map((tag) => {
        const chip = document.createElement("span");
        chip.className = "project-tag";
        chip.textContent = tag;
        return chip;
      }),
    );
  });

  setActiveButtons(langButtons, language, "lang");
}

function applyStyle(style) {
  root.dataset.style = style;
  setActiveButtons(styleButtons, style, "style");
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

styleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyStyle(button.dataset.style);
  });
});

applyLanguage(defaultLang);
applyStyle(defaultStyle);
