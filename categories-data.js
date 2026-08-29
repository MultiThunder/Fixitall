// All categories data for FixItAll
// Set visible: true to show on the website, false to hide (kept for future use)

const allCategories = {
  main: [
    {
      id: "health",
      name: "Health",
      icon: "❤️",
      iconBg: "var(--health-soft)",
      description: "Symptom checker for fever, headache, stomach pain, and more",
      topics: ["Fever", "Headache", "Stomach Pain", "+5 more"],
      url: "health/",
      visible: true
    },
    {
      id: "automobile",
      name: "Automobile",
      icon: "🚗",
      iconBg: "var(--auto-soft)",
      description: "Vehicle diagnostics for cars, bikes, and scooters",
      topics: ["Engine Noise", "Won't Start", "Overheating", "+3 more"],
      url: "car/",
      visible: true
    },
    {
      id: "home",
      name: "Home Repairs",
      icon: "🏠",
      iconBg: "var(--home-soft)",
      description: "Household repair solutions for common problems",
      topics: ["Leaking Tap", "A/C Not Cooling", "Washing Machine", "+2 more"],
      url: "home/",
      visible: true
    },
    {
      id: "electronics",
      name: "Electronics",
      icon: "💻",
      iconBg: "var(--success-soft)",
      description: "Diagnose issues with laptops, phones, and networks",
      topics: ["Laptop", "Phone", "WiFi", "+2 more"],
      url: "tech/",
      visible: true
    }
  ],
  more: [
    {
      id: "garden",
      name: "Garden",
      icon: "🌱",
      iconBg: "#ECFCCB",
      description: "Plant care, pest control, and landscaping",
      topics: ["Plant Disease", "Pests", "Irrigation", "Soil Problems", "Lawn Care"],
      url: "garden/",
      visible: true
    },
    {
      id: "electrical",
      name: "Electrical",
      icon: "🔌",
      iconBg: "#F3E8FF",
      description: "Home electrical issues, wiring, and appliances",
      topics: ["Switch Not Working", "Fuse Issue", "Wiring"],
      url: "#",
      visible: false
    },
    {
      id: "plumbing",
      name: "Plumbing",
      icon: "🚿",
      iconBg: "#FEF3C7",
      description: "Water supply, drainage, and pipe issues",
      topics: ["Clogged Drain", "Low Pressure", "Pipe Leak"],
      url: "#",
      visible: false
    },
    {
      id: "hvac",
      name: "HVAC",
      icon: "🌡️",
      iconBg: "#E0F2FE",
      description: "Heating, ventilation, and air conditioning",
      topics: ["Heater Issue", "AC Gas Leak", "Thermostat"],
      url: "#",
      visible: false
    },
    {
      id: "furniture",
      name: "Furniture",
      icon: "🪑",
      iconBg: "#FCE7F3",
      description: "Assembly, repair, and maintenance tips",
      topics: ["Assembly", "Scratches", "Loose Joints"],
      url: "#",
      visible: false
    },
    {
      id: "security",
      name: "Security",
      icon: "🔒",
      iconBg: "#EDE9FE",
      description: "Home security, locks, and surveillance",
      topics: ["Lock Issues", "Camera Setup", "Alarm System"],
      url: "#",
      visible: false
    },
    {
      id: "construction",
      name: "Construction",
      icon: "🧱",
      iconBg: "#FEE2E2",
      description: "Building, renovation, and structural issues",
      topics: ["Cracks", "Waterproofing", "Painting"],
      url: "#",
      visible: false
    },
    {
      id: "appliances",
      name: "Appliances",
      icon: "📦",
      iconBg: "#E0E7FF",
      description: "Kitchen and home appliance troubleshooting",
      topics: ["Refrigerator", "Microwave", "Dishwasher"],
      url: "#",
      visible: false
    }
  ]
};

function renderCategories() {
  const mainContainer = document.getElementById("mainCategories");
  const moreContainer = document.getElementById("moreCategories");

  allCategories.main.forEach(cat => {
    if (!cat.visible) return;
    mainContainer.innerHTML += createCard(cat);
  });

  allCategories.more.forEach(cat => {
    if (!cat.visible) return;
    moreContainer.innerHTML += createCard(cat);
  });

  // Hide "More Categories" section if none visible
  const visibleMore = allCategories.more.filter(c => c.visible);
  if (visibleMore.length === 0) {
    document.getElementById("moreSection").style.display = "none";
  }
}

function createCard(cat) {
  const topics = cat.topics.map(t => `<span class="topic-tag">${t}</span>`).join("");
  return `
    <a href="${cat.url}" class="category-detail-card">
      <div class="category-detail-icon" style="background:${cat.iconBg};">
        <span>${cat.icon}</span>
      </div>
      <div class="category-detail-info">
        <h3>${cat.name}</h3>
        <p>${cat.description}</p>
        <div class="category-detail-topics">${topics}</div>
      </div>
      <span class="category-detail-arrow">›</span>
    </a>
  `;
}

function filterCategories(query) {
  const q = query.toLowerCase();
  const mainContainer = document.getElementById("mainCategories");
  const moreContainer = document.getElementById("moreCategories");
  mainContainer.innerHTML = "";
  moreContainer.innerHTML = "";

  allCategories.main.forEach(cat => {
    if (!cat.visible) return;
    const nameMatch = cat.name.toLowerCase().includes(q);
    const descMatch = cat.description.toLowerCase().includes(q);
    const topicsMatch = cat.topics.some(t => t.toLowerCase().includes(q));
    
    if (nameMatch || descMatch || topicsMatch) {
      mainContainer.innerHTML += createCard(cat);
    }
  });

  allCategories.more.forEach(cat => {
    if (!cat.visible) return;
    const nameMatch = cat.name.toLowerCase().includes(q);
    const descMatch = cat.description.toLowerCase().includes(q);
    const topicsMatch = cat.topics.some(t => t.toLowerCase().includes(q));
    
    if (nameMatch || descMatch || topicsMatch) {
      moreContainer.innerHTML += createCard(cat);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  document.getElementById("categorySearch").addEventListener("input", (e) => {
    filterCategories(e.target.value);
  });
});
