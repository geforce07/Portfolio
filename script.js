const projectData = {
  microns: {
    tag: 'Neuroscience · Machine Learning',
    title: 'MICrONS Connectome',
    subtitle: 'Master’s thesis · Bocconi University x Politecnico di Milano · 2026',
    metrics: [['11.6M', 'neuron pairs'], ['71,408', 'connections'], ['0.909', 'hybrid AUC']],
    body: '<h3>Context</h3><p>MICrONS is a dataset of a ~1 mm³ reconstruction of <strong>mouse primary visual cortex</strong>, containing tens of thousands of neurons, their <strong>synaptic connectivity</strong>, and associated functional measurements.</p><h3>Research question</h3><p>Which biological variables best explain <strong>synaptic connectivity in mouse V1</strong>, and can latent representations reveal <strong>higher-order wiring principles</strong> beyond known anatomical and functional factors?</p><h3>Methods</h3><p>I developed a <strong>novel graph-embedding approach</strong> based on learned latent representations and an <strong>MLP decoder</strong>, then progressively analyzed the learned spaces with increasingly refined decoders and controls to identify encoded variables, explain predictive gains, and uncover potential biases.</p><h3>What the model revealed</h3><ul><li>The model achieved <strong>strong predictive performance</strong>, substantially outperforming the reference approach from the literature.</li><li>It recovered several known physiological properties, including <strong>spatial organization, retinotopy, and the limited contribution of like-to-like connectivity</strong>.</li><li>The learned representations were highly sensitive to <strong>dominant sources of structure</strong>, with reconstruction bias, spatial organization and neuron-specific connection propensity successively masking subtler signals.</li></ul><p><strong>Stack:</strong> Python, PyTorch, MICrONS/CAVE, NumPy, pandas, scikit-learn.</p>',
    image: 'assets/evidence/graph.png',
    imageAlt: 'Figure 27 - Comparison of anatomical, functional and latent model performance',
    imageCaption: 'Model comparison — latent-space models outperform geometry-only baselines, while explicit anatomical and functional features account for nearly all of the remaining predictive gain.',
    links: [['Read the final report', 'downloads/DTMI_PIERRARD_Antoine_Rapport_3A_en.pdf']]
  },
  inria: {
    tag: 'Signal Processing · Explainable AI',
    title: 'Multimodal Stress Detection',
    subtitle: 'Research internship · Inria Paris-Saclay / École Polytechnique · 2025',
    metrics: [['3', 'stress conditions'], ['4', 'signal modalities'], ['EBM', 'interpretable ML']],
    body: '<h3>Context</h3>Prolonged <strong>psychological stress</strong> is associated with increased risks of <strong>cardiovascular and other chronic disorders</strong>.<br>Psychological stress and physical activity can produce similar physiological responses, making them difficult to distinguish using wearable sensors.</strong>.<h3>Research question</h3>Which <strong>physiological signals</strong> can best distinguish <strong>psychological stress</strong> from <strong>physical stress</strong>?<h3>Methods</h3><ul><li>Designed and processed a <strong>multimodal experimental protocol</strong> combining <strong>EEG, ECG and blood-pressure measurements</strong> across different stress conditions.</li><li>Studied a signal-analysis pipeline based on <strong>weighted visibility graphs</strong>.</li><li>Used <strong>Explainable Boosting Machines</strong> to identify the <strong>most informative physiological features</strong>.</li></ul><strong>Stack:</strong> Python, MNE, EEG/ECG, visibility graphs, EBM, Optuna.</p>',
    image: 'assets/evidence/inria-visibility-graph.jpg',
    imageAlt: 'Visibility graph and weighted adjacency matrix developed during the Inria internship',
    imageCaption: 'Signal-to-graph transformation — PPG waveforms are converted into weighted visibility graphs and colored adjacency matrices, exposing temporal and morphological structure for interpretable feature extraction.',
    links: [['Read the internship report', 'downloads/Inria-Paris-Saclay-Internship-Report.pdf']]
  },
  micromix: {
    tag: 'Project manager · Embedded Systems · Biomedical',
    title: 'MicroMix Cell Screening',
    subtitle: 'Embedded systems project · Télécom Physique Strasbourg · 2023–2024',
    metrics: [['200 kHz', 'sampling'], ['16-bit', 'ADC'], ['10×', 'speed gain']],
    body: '<h3>Context</h3><ul><li><strong>MicroOmiX</strong> develops laboratory cell-sorting systems whose acquisition electronics relied on a microcontroller costing around <strong>€1,000</strong>.</li><li>At roughly <strong>€80</strong>, the Arduino Portenta H7 offered hardware specifications that could theoretically deliver similar acquisition performance if used close to its full potential.</li></ul><h3>Engineering challenge</h3><ul><li>Could a <strong>low-cost embedded platform</strong> meet the requirements of high-throughput cell screening: up to <strong>200 droplets/s</strong> with <strong>200 kHz / 16-bit acquisition</strong>?</li></ul><h3>Implementation</h3><ul><li>Bypassed Arduino\'s standard acquisition functions and configured the <strong>STM32 timers and ADC registers</strong> directly.</li><li>Implemented <strong>circular double-buffer DMA</strong> for continuous high-speed acquisition.</li><li>Used <strong>shared memory between the M4 and M7 cores</strong> and optimized UART communication for real-time transfer to LabVIEW.</li></ul><h3>Result</h3><ul><li>Achieved stable <strong>200 kHz / 16-bit acquisition</strong> on the Portenta H7.</li><li>Integrated real-time visualization, storage and signal processing in <strong>LabVIEW</strong>.</li><li>Demonstrated the feasibility of a <strong>much lower-cost embedded prototype</strong> for the cell-screening acquisition pipeline.</li></ul><p><strong>Stack:</strong> C, Arduino Portenta H7, STM32 registers, ADC, DMA, shared memory, UART, LabVIEW.</p>',
    image: 'assets/evidence/micromix-results.png',
    imageAlt: 'Final MicroMix interface, electronic test bench and recorded data',
    imageCaption: 'Portenta H7 architecture — High-speed acquisition using ADC, DMA and shared memory across the M4/M7 cores, with real-time PC communication.',
    links: [['Read the final report', 'downloads/MicroMix-Final-Report.pdf'], ['Open the project presentation', 'downloads/MicroMix-Project-Presentation.pptx']]
  },
  tipe: {
    tag: 'Physics · Engineering',
    title: 'Regenerative Elevator',
    subtitle: 'TIPE research project · CPGE MPSI/MP · 2023',
    metrics: [['97%', 'slower fall'], ['10', 'recovery cycles'], ['3', 'design layers']],
    body: '<p>Independent research project developed and defended as part of the <strong>French competitive entrance examinations for engineering schools</strong>, receiving a <strong>16/20 score (Grade A equivalent)</strong>.</p><p>I designed a bench-scale system to study how elevator descent could be slowed and partially converted back into electrical energy.</p><h3>Three-part approach</h3><ul><li><strong>Magnetic braking:</strong> modelled and measured induction braking in a copper tube.</li><li><strong>Energy recovery:</strong> rectified and stored the induced voltage in a capacitor.</li><li><strong>Optimisation:</strong> used a genetic algorithm to explore infrastructure placement and passenger scheduling.</li></ul><p>The prototype linked Maxwell’s equations, experimental physics, electronics and optimisation in one coherent system.</p><p><strong>Stack:</strong> Python, numerical optimisation, electromagnetism, electronics, experimental design.</p>',
    image: 'assets/evidence/tipe-results.png',
    imageAlt: 'Elevator energy recovery prototype and voltage accumulated over ten drops',
    imageCaption: 'Experimental validation — Bench-scale setup comparing descent dynamics with and without five coils, while recording the induced electrical response and measuring the resulting increase in fall time.',
    links: [['Open the TIPE presentation', 'downloads/TIPE-Energy-Recovery-Presentation.pdf']]
  },
  vision: {
    tag: 'Project manager · Computer Vision · Healthcare',
    title: 'Emergency Department Flow',
    subtitle: 'Project lead · Inria Nancy · 2024–2025',
    metrics: [['YOLO', 'detection'], ['MediaPipe', 'features'], ['Multi-camera', 'tracking']],
    body: '<p>I led the development of a camera network designed to understand patient movement through an emergency department.</p><h3>From pixels to patient journeys</h3><p>The system combined <strong>YOLO person detection</strong>, pose estimation and custom re-identification features based on <strong>body proportions, clothing colors and visual patterns</strong> to maintain identities between camera views.</p><h3>Operational objective</h3><ul><li>Map patient trajectories without manual observation.</li><li>Estimate waiting times and detect bottlenecks.</li><li>Help clinical teams target interventions where they matter most.</li></ul><p><strong>Stack:</strong> Python, OpenCV, YOLO, MediaPipe, computer vision.</p>',
    video: 'https://drive.google.com/file/d/1MXkU57f-DiGZsSt7iChQ0_h3BDuN6kIE/preview',
    videoCaption: 'Prototype multi-camera tracking system tested across university buildings, with real-time trajectory reconstruction on a graph-based building map using body proportions, clothing colors and visual patterns for re-identification',
    links: [['View presentation', 'https://docs.google.com/presentation/d/1tbQ6r4F-3M3QboetceTEeU_mX3AmeSIECjmraN5mtyM/present?pli=1&slide=id.g3fa4623cd24_3_1688']]
  }
};

const dialog = document.querySelector('#project-dialog');

const openProject = (id) => {
  const data = projectData[id];
  if (!data || !dialog) return;

  document.querySelector('#dialog-tag').textContent = data.tag || '';
  document.querySelector('#dialog-title').textContent = data.title || '';
  document.querySelector('#dialog-subtitle').textContent = data.subtitle || '';

  document.querySelector('#dialog-metrics').innerHTML = (data.metrics || [])
    .map(([value, label]) => `<span><strong>${value}</strong>${label}</span>`)
    .join('');

  document.querySelector('#dialog-body').innerHTML = data.body || '';

  // Project image + visible caption
  const figure = document.querySelector('#dialog-figure');
  const image = document.querySelector('#dialog-image');
  const caption = document.querySelector('#dialog-image-caption');

  if (data.image && figure && image && caption) {
    image.src = data.image;
    image.alt = data.imageAlt || data.title || '';
    caption.textContent = data.imageCaption || '';
    caption.hidden = !data.imageCaption;
    figure.classList.add('visible');
  } else if (figure && image && caption) {
    figure.classList.remove('visible');
    image.removeAttribute('src');
    image.alt = '';
    caption.textContent = '';
    caption.hidden = true;
  }

  // Project video + visible caption
  const video = document.querySelector('#dialog-video');
  const videoContainer = document.querySelector('#dialog-video-container');
  const videoCaption = document.querySelector('#dialog-video-caption');

  if (data.video && video && videoContainer && videoCaption) {
    video.src = data.video;
    videoCaption.textContent = data.videoCaption || '';
    videoCaption.hidden = !data.videoCaption;
    videoContainer.classList.add('visible');
  } else if (video && videoContainer && videoCaption) {
    video.src = '';
    videoCaption.textContent = '';
    videoCaption.hidden = true;
    videoContainer.classList.remove('visible');
  }

  // Project links
  document.querySelector('#dialog-links').innerHTML = (data.links || [])
    .map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`)
    .join('');

  dialog.showModal();
};

document.querySelectorAll('[data-modal]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.modal)));
document.querySelectorAll('[data-project]').forEach(button => {
  const stage = button.closest('.brain-stage');
  button.addEventListener('mouseenter', () => { stage.dataset.active = button.dataset.link; });
  button.addEventListener('focus', () => { stage.dataset.active = button.dataset.link; });
  button.addEventListener('mouseleave', () => { delete stage.dataset.active; });
  button.addEventListener('blur', () => { delete stage.dataset.active; });
  button.addEventListener('click', () => openProject(button.dataset.project));
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

const menu = document.querySelector('.menu-button');
const nav = document.querySelector('#main-nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('nav a');
const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
}), { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(section => sectionObserver.observe(section));

const canvas = document.querySelector('#connectomeCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const renderConnectome = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);
    const nodes = Array.from({length: 64}, (_, i) => ({
      x: (Math.sin(i * 7.31) * .44 + .5) * rect.width,
      y: (Math.cos(i * 4.73) * .38 + .5) * rect.height,
      c: ['#20ddff','#9170ff','#23dfbf','#ff9f2c'][i % 4]
    }));
    nodes.forEach((a, i) => nodes.slice(i + 1).forEach(b => {
      const d = Math.hypot(a.x-b.x, a.y-b.y);
      if (d < 74) {
        ctx.globalAlpha = .18 * (1-d/74);
        ctx.strokeStyle = a.c;
        ctx.beginPath();
        ctx.moveTo(a.x,a.y);
        ctx.lineTo(b.x,b.y);
        ctx.stroke();
      }
    }));
    nodes.forEach(n => {
      ctx.globalAlpha = .8;
      ctx.fillStyle = n.c;
      ctx.beginPath();
      ctx.arc(n.x,n.y,1.4,0,Math.PI*2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  };
  renderConnectome();
  window.addEventListener('resize', renderConnectome);
}
document.querySelector('#year').textContent = new Date().getFullYear();
