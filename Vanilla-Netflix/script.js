// Data is loaded via <script src="data.js"> in index.html
// Global Scroll Function
window.scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 100) {
    nav.classList.add('nav_black');
  } else {
    nav.classList.remove('nav_black');
  }
});

// Icons
const PlayIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>`;
const LinkIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 6v2H5v11h11v-5h2v7H3V6h7zm11-3v8l-3-3-7 7-1.5-1.5 7-7-3-3h8z" /></svg>`;
const GithubIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>`;
const CloseIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>`;

// Card Renderers
function renderSkillCard(item) {
  return `
    <div class="nf_card nf_card_skill_tall">
      <div class="skill_header">
        <span class="skill_icon">${item.icon}</span>
        <div class="skill_cat">${item.category}</div>
      </div>
      <div class="skill_list_outside">
        ${item.items.map(s => `<div class="skill_item_pill">${s}</div>`).join('')}
      </div>
    </div>
  `;
}

function renderExpCard(item) {
  return `
    <div class="nf_card nf_card_exp">
      <img src="${item.image}" alt="${item.company}" onerror="this.style.display='none';" />
    </div>
  `;
}

function renderProjectCard(item) {
  return `
    <div class="nf_card nf_card_large">
      <img
        class="nf_thumb"
        src="${item.image}"
        alt="${item.title}"
        onerror="this.src='https://via.placeholder.com/300x450/181818/e50914?text=${encodeURIComponent(item.title)}';"
      />
      <div class="nf_info">
        <span class="nf_info_title">${item.title}</span>
        <div class="nf_icon_row">
          ${item.liveLink ? `<a href="${item.liveLink}" target="_blank" class="nf_icon_btn play" title="Live" onclick="event.stopPropagation()">${LinkIcon}</a>` : ''}
          ${item.githubLink ? `<a href="${item.githubLink}" target="_blank" class="nf_icon_btn" title="GitHub" onclick="event.stopPropagation()">${GithubIcon}</a>` : ''}
          ${item.videoLink ? `<a href="${item.videoLink}" target="_blank" class="nf_icon_btn" title="Video" onclick="event.stopPropagation()">${PlayIcon}</a>` : ''}
        </div>
        <div class="nf_pills">
          ${(item.tech || []).slice(0, 3).map(t => `<span class="nf_pill">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderSeminarCard(item) {
  return `
    <div class="nf_card nf_card_seminar">
      <img
        class="nf_thumb"
        src="${item.image}"
        alt="${item.title}"
        onerror="this.src='https://via.placeholder.com/320x180/181818/e50914?text=${encodeURIComponent(item.title)}';"
      />
      <div class="nf_info">
        <span class="nf_info_title">${item.title}</span>
        <span class="nf_info_sub">${item.date}</span>
      </div>
    </div>
  `;
}

function renderEduCard(item) {
  return `
    <div class="nf_card nf_card_edu">
      <span class="nf_edu_period">${item.period}</span>
      <h3 class="nf_edu_degree">${item.degree}</h3>
      <span class="nf_edu_inst">${item.institution}</span>
      <p class="nf_edu_desc">${item.description}</p>
    </div>
  `;
}

function renderAchieveCard(item) {
  return `
    <div class="nf_card nf_card_achieve">
      <span class="achieve_icon">${item.icon}</span>
      <h3 class="nf_achieve_title">${item.title}</h3>
      <p class="nf_achieve_desc">${item.description}</p>
    </div>
  `;
}

// Generate Preview Panel HTML
function generatePreviewPanel(item) {
  const bg = item.image || item.backdrop_path || '';
  const title = item.title || item.degree || item.category || item.name;
  const desc = item.description || item.overview || item.desc || '';

  return `
    <button class="preview_close" aria-label="Close preview">${CloseIcon}</button>
    <div class="preview_backdrop" style="background-image: ${bg ? `url(${bg})` : 'none'}">
      <div class="preview_backdrop_fade"></div>
      <div class="preview_top_content">
        <div class="preview_titles">
          <h2 class="preview_title">${title}</h2>
          ${(item.company || item.institution || item.date) ? `
            <p class="preview_subtitle">
              ${item.date ? `<span class="preview_date">${item.date}</span>` : ''}
              ${(item.company || item.institution) ? `<span class="preview_company">${item.company || item.institution}</span>` : ''}
            </p>
          ` : ''}
        </div>
        <div class="preview_actions">
          ${item.liveLink ? `<a href="${item.liveLink}" target="_blank" class="preview_btn primary">${LinkIcon} Live Site</a>` : ''}
          ${item.githubLink ? `<a href="${item.githubLink}" target="_blank" class="preview_btn ghost">${GithubIcon} GitHub</a>` : ''}
          ${item.videoLink ? `<a href="${item.videoLink}" target="_blank" class="preview_btn ghost">${PlayIcon} Watch Demo</a>` : ''}
        </div>
      </div>
    </div>
    <div class="preview_details">
      ${desc ? `<p class="preview_desc">${desc}</p>` : ''}
      ${item.items ? `<ul class="preview_skill_list">${item.items.map(s => `<li>${s}</li>`).join('')}</ul>` : ''}
      ${item.tech && item.tech.length > 0 ? `
        <div class="preview_pills_row">
          <span class="preview_pills_label">Tech Stack</span>
          <div class="preview_pills">${item.tech.map(t => `<span class="preview_pill">${t}</span>`).join('')}</div>
        </div>
      ` : ''}
      ${item.period ? `
        <div class="preview_meta_row">
          <span class="preview_meta_label">Period</span>
          <span class="preview_meta_val">${item.period}</span>
        </div>
      ` : ''}
      ${item.institution ? `
        <div class="preview_meta_row">
          <span class="preview_meta_label">Institution</span>
          <span class="preview_meta_val">${item.institution}</span>
        </div>
      ` : ''}
    </div>
  `;
}

// Row Data Configuration
const rowConfig = [
  { title: "💼 Work Experience", id: "work", data: workData, renderer: renderExpCard, isGrid: false },
  { title: "🎓 Internship ", id: "intern", data: internData, renderer: renderExpCard, isGrid: false },
  { title: "🚀 Projects", id: "projects", data: projectsData, renderer: renderProjectCard, isGrid: false },
  { title: "📅 Seminars & Webinars", id: "seminars", data: seminarsData, renderer: renderSeminarCard, isGrid: false },
  { title: "🛠 Technical Skills", id: "skills", data: skillsData, renderer: renderSkillCard, isGrid: false },
  { title: "🎓 Education", id: "education", data: educationData, renderer: renderEduCard, isGrid: false },
  { title: "🏆 Achievements & Certifications", id: "achievements", data: achievementsData, renderer: renderAchieveCard, isGrid: false },
];

// Build DOM
const appRows = document.getElementById('app_rows');

rowConfig.forEach(config => {
  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';
  rowDiv.id = config.id;

  let arrowLeftHtml = !config.isGrid ? `<div class="slider_arrow left"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg></div>` : '';
  let arrowRightHtml = !config.isGrid ? `<div class="slider_arrow right"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></div>` : '';

  let containerClass = config.isGrid ? 'row_grid' : 'row_posters no-scrollbar';

  rowDiv.innerHTML = `
    <h2 class="row_title">${config.title}</h2>
    <div class="row_container">
      ${arrowLeftHtml}
      <div class="${containerClass}">
      </div>
      ${arrowRightHtml}
    </div>
    <div class="preview_panel" style="display: none;"></div>
  `;

  const container = rowDiv.querySelector(`.${containerClass.split(' ')[0]}`);
  const previewPanel = rowDiv.querySelector('.preview_panel');
  let activeCard = null;

  // Render cards
  config.data.forEach(item => {
    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'card_wrapper';
    cardWrapper.innerHTML = config.renderer(item);

    cardWrapper.addEventListener('click', () => {
      // Toggle off if same item
      if (activeCard === cardWrapper) {
        cardWrapper.classList.remove('card_active');
        previewPanel.style.display = 'none';
        activeCard = null;
        return;
      }

      // Clear previous active card in this row
      if (activeCard) {
        activeCard.classList.remove('card_active');
      }

      activeCard = cardWrapper;
      cardWrapper.classList.add('card_active');

      previewPanel.innerHTML = generatePreviewPanel(item);
      previewPanel.style.display = 'block';

      // Setup close button
      const closeBtn = previewPanel.querySelector('.preview_close');
      closeBtn.addEventListener('click', () => {
        cardWrapper.classList.remove('card_active');
        previewPanel.style.display = 'none';
        activeCard = null;
      });

      // Scroll preview into view
      setTimeout(() => {
        previewPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    });

    container.appendChild(cardWrapper);
  });

  // Slider Arrows Logic
  if (!config.isGrid) {
    const leftArrow = rowDiv.querySelector('.left');
    const rightArrow = rowDiv.querySelector('.right');

    leftArrow.addEventListener('click', () => {
      container.scrollBy({ left: -container.clientWidth * 0.8, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
      container.scrollBy({ left: container.clientWidth * 0.8, behavior: 'smooth' });
    });
  }

  appRows.appendChild(rowDiv);
});

// Build About Me
const aboutCardsContainer = document.getElementById('about_cards');
const aboutInfoArray = [
  { label: 'Name', value: personalInfo.name, icon: '👤' },
  { label: 'Father Name', value: personalInfo.fatherName, icon: '👨‍👦' },
  { label: 'Date of Birth', value: personalInfo.dob, icon: '🎂' },
  { label: 'Age', value: personalInfo.age, icon: '⏳' },
  { label: 'Gender', value: personalInfo.gender, icon: '⚧' },
  { label: 'Languages', value: personalInfo.languages, icon: '🗣️' },
  { label: 'Email', value: personalInfo.email, icon: '✉️' },
  { label: 'Phone', value: personalInfo.phone, icon: '📞' },
  { label: 'Interests', value: personalInfo.interests, icon: '🎯' },
];

aboutInfoArray.forEach(info => {
  aboutCardsContainer.innerHTML += `
    <div class="about_card">
      <div class="about_icon">${info.icon}</div>
      <div class="about_info">
        <span class="about_label">${info.label}</span>
        <span class="about_value">${info.value}</span>
      </div>
    </div>
  `;
});
