# Spotti — Launch Promo Pack

Includes 4 versions — the 2 Portuguese taglines × the PT-BR and EN languages.

## Folder structure

  A_pt_pra-cada-vontade/   — Tagline A, Portuguese.    "Pra cada vontade, um lugar."
  A_en_your-city-by-craving/ — Tagline A equivalent, English. "Your city, by craving."
  D_pt_cidade-entende/     — Tagline D, Portuguese.    "A cidade entende você."
  D_en_your-city-by-craving/ — Tagline D equivalent, English. "Your city, by craving."

Note: in EN, both A and D collapse to "Your city, by craving." — the
English tagline is locked. The A_en and D_en folders are byte-identical;
both provided so each version folder is self-contained.

Each version contains its own:
  app-store/            7 screenshots, 1290×2796
  instagram/            3 feed posts (1080×1080) + story (1080×1920) + profile pic (1024×1024)
  instagram-carousel/   5-panel "What is Spotti?" carousel (1080×1080 each)
  social-portfolio/     social-explainer.png (1600×900), portfolio-card.png (1600×2000)

## Copy

  copy/app-store-description-PT.txt
  copy/app-store-description-EN.txt
  copy/whats-new-v1-PT.txt
  copy/whats-new-v1-EN.txt
  copy/keywords-PT.txt
  copy/keywords-EN.txt
  copy/hashtags.txt
  copy/snippets/   one file per copy snippet (title, subtitle, captions, press lines)

## How to ship

1. Pick a tagline (A or D) and use that folder.
2. App Store Connect:
   · Drop app-store/*.png into Screenshots, in order 1 through 7.
   · Paste copy/app-store-description-{PT,EN}.txt into the localized description.
   · Paste copy/keywords-{PT,EN}.txt into Keywords field (no spaces after commas).
   · Paste copy/whats-new-v1-{PT,EN}.txt into "What's New".
3. Instagram:
   · Set instagram/ig-profile.png as profile picture.
   · Post instagram/ig-launch.png with the "instagram-launch-post-caption" snippet.
   · Post the 5 instagram-carousel/*.png as a single carousel using "what-is-spotti-caption-carousel".
   · Use instagram/ig-story.png in your launch Story.
4. Press / Portfolio:
   · social-portfolio/social-explainer.png for press contact, Twitter header, LinkedIn image.
   · social-portfolio/portfolio-card.png for your CV / portfolio site.

Live on the App Store. Boa sorte. — Spotti
