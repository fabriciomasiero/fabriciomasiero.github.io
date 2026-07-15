const studio = document.querySelector("#studioOverlay");
const studioImage = document.querySelector("#studioImage");
const studioTitle = document.querySelector("#studioTitle");
const studioLook = document.querySelector("#studioLook");
const studioClose = document.querySelector(".studio-close");
const studioToggles = [...document.querySelectorAll(".studio-toggle")];
const collectionCards = [...document.querySelectorAll(".collection-card[data-studio-tono]")];
const plans = [...document.querySelectorAll(".plan[data-plan]")];

let activeCard = null;
let activeMode = "tono";

function setStudioMode(mode) {
  if (!activeCard) return;
  activeMode = mode;
  const image = mode === "original" ? activeCard.dataset.studioOriginal : activeCard.dataset.studioTono;
  studioImage.src = image;
  studioImage.alt =
    mode === "original"
      ? `${activeCard.dataset.studioTitle} original photo`
      : `${activeCard.dataset.studioTitle} photo with Tono ${activeCard.dataset.studioLook} Look`;

  studioToggles.forEach((toggle) => {
    const isActive = toggle.dataset.mode === mode;
    toggle.classList.toggle("active", isActive);
    toggle.setAttribute("aria-pressed", String(isActive));
  });
}

function openStudio(card) {
  activeCard = card;
  studioTitle.textContent = card.dataset.studioTitle;
  studioLook.textContent = `Free Look: ${card.dataset.studioLook}`;
  studio.setAttribute("aria-hidden", "false");
  studio.classList.add("open");
  document.body.classList.add("studio-open");
  setStudioMode("tono");
  studioClose.focus();
}

function closeStudio() {
  studio.classList.remove("open");
  studio.setAttribute("aria-hidden", "true");
  document.body.classList.remove("studio-open");
  if (activeCard) activeCard.focus();
  activeCard = null;
}

collectionCards.forEach((card) => {
  card.addEventListener("click", () => openStudio(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openStudio(card);
    }
  });
});

studioToggles.forEach((toggle) => {
  toggle.setAttribute("aria-pressed", String(toggle.classList.contains("active")));
  toggle.addEventListener("click", () => setStudioMode(toggle.dataset.mode));
});

studioClose.addEventListener("click", closeStudio);
studio.addEventListener("click", (event) => {
  if (event.target === studio) closeStudio();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && studio.classList.contains("open")) {
    closeStudio();
  }
});

function selectPlan(plan) {
  plans.forEach((item) => {
    const selected = item === plan;
    item.classList.toggle("selected", selected);
    item.setAttribute("aria-pressed", String(selected));
  });
}

plans.forEach((plan) => {
  plan.addEventListener("click", () => selectPlan(plan));
  plan.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectPlan(plan);
    }
  });
});
