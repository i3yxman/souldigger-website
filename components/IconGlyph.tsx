type IconName =
  | 'plan'
  | 'collect'
  | 'review'
  | 'insight'
  | 'govern'
  | 'ai'
  | 'retail'
  | 'auto'
  | 'medical'
  | 'fmcg'
  | 'service'
  | 'research';

const baseClass = 'icon-glyph-svg';

export function IconGlyph({ name }: { name: IconName }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8 } as const;

  switch (name) {
    case 'plan':
      return (
        <svg className={baseClass} {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 8h10M7 12h6M7 16h8" />
        </svg>
      );
    case 'collect':
      return (
        <svg className={baseClass} {...common}>
          <rect x="7" y="2.8" width="10" height="18.4" rx="2.2" />
          <path d="M10 6.5h4M9 11h6M9 14.5h6" />
        </svg>
      );
    case 'review':
      return (
        <svg className={baseClass} {...common}>
          <circle cx="10" cy="10" r="5.5" />
          <path d="M14.8 14.8L20 20M8 10.3l1.8 1.9L12.5 9" />
        </svg>
      );
    case 'insight':
      return (
        <svg className={baseClass} {...common}>
          <path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
        </svg>
      );
    case 'govern':
      return (
        <svg className={baseClass} {...common}>
          <path d="M12 3l7 3v5c0 4.5-2.8 7.5-7 10-4.2-2.5-7-5.5-7-10V6l7-3z" />
          <path d="M9 11.5l2 2 4-4" />
        </svg>
      );
    case 'ai':
      return (
        <svg className={baseClass} {...common}>
          <path d="M12 2l2.4 4.5L19 9l-4.6 2.3L12 16l-2.4-4.7L5 9l4.6-2.5L12 2z" />
          <circle cx="12" cy="9" r="1.3" />
        </svg>
      );
    case 'retail':
      return (
        <svg className={baseClass} {...common}>
          <path d="M4 9h16v10H4z" />
          <path d="M3 9l2-5h14l2 5M9 13h6" />
        </svg>
      );
    case 'auto':
      return (
        <svg className={baseClass} {...common}>
          <path d="M4 14l2-5h12l2 5v4H4z" />
          <circle cx="7" cy="18" r="1.5" />
          <circle cx="17" cy="18" r="1.5" />
        </svg>
      );
    case 'medical':
      return (
        <svg className={baseClass} {...common}>
          <path d="M9 4h6v5h5v6h-5v5H9v-5H4V9h5z" />
        </svg>
      );
    case 'fmcg':
      return (
        <svg className={baseClass} {...common}>
          <path d="M8 3h8v4H8zM7 7h10l-1 14H8z" />
        </svg>
      );
    case 'service':
      return (
        <svg className={baseClass} {...common}>
          <path d="M4 7h16v10H4z" />
          <path d="M9 11h6M9 14h4" />
        </svg>
      );
    case 'research':
      return (
        <svg className={baseClass} {...common}>
          <path d="M5 4h10l4 4v12H5z" />
          <path d="M15 4v4h4M8 12h8M8 15h6" />
        </svg>
      );
    default:
      return null;
  }
}
